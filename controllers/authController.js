const authService = require('../services/authService');
const bcrypt = require('bcrypt');
const e = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config();


const register = async (req, res) => {
    const { pseudo, firstname, lastname, email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const userId = await authService.register({pseudo, firstname, lastname, email, password : hashedPassword});
        res.status(201).json({ message: 'User created', userId });
    } catch (error) {
        res.status(500).json({ message: 'Error creating user', error });
    }
}

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        
        const user = await authService.getUserByEmail(email);
        
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }
        const token = jwt.sign({ user : user}, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRATION });
        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in', error });
    }
}

const middleware = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        req.user = decoded.user;
        next();
    });
}


module.exports = {
    register,
    login,
    middleware
};