const connection = require('../config/bdd')

const register = (user) => {
    return new Promise((resolve, reject) => {
        connection.query('INSERT INTO players SET ?', user, (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results.insertId);
            }
        });
    });
}

const login = (username) => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM players WHERE email = ?', [username], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results[0]);
            }
        });
    });
}

const getUserByEmail= (email) => {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM players WHERE email = ?', [email], (error, results) => {
            if (error) {
                reject(error);
            } else {
                resolve(results[0]);
            }
        });
    });
}

module.exports = {
    register,
    login,
    getUserByEmail
}

