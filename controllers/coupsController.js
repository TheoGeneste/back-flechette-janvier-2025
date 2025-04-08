const coupsService = require('../services/coupsService');

const getAllCoups = async (req, res) => {
    try {
        const coups = await coupsService.getAllCoups();
        res.status(200).json(coups);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving coups', error });
    }
}

const getCoupsById = async (req, res) => {
    const { idPlayer,idGame } = req.params;
    try {
        const coups = await coupsService.getCoupsById(idPlayer, idGame);
        if (!coups) {
            return res.status(404).json({ message: 'Coups not found' });
        }
        res.status(200).json(coups);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving coups', error });
    }
}

const createCoups = async (req, res) => {
    const newCoups = req.body;
    try {
        const coupsId = await coupsService.createCoups(newCoups);
        res.status(201).json({ message: 'Coups created', coupsId });
    } catch (error) {
        res.status(500).json({ message: 'Error creating coups', error });
    }
}


const updateCoups = async (req, res) => {
    const { id } = req.params;
    const updatedCoups = req.body;
    try {
        const result = await coupsService.updateCoups(id, updatedCoups);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Coups not found' });
        }
        res.status(200).json({ message: 'Coups updated' });
    } catch (error) {
        res.status(500).json({ message: 'Error updating coups', error });
    }
}

const deleteCoups = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await coupsService.deleteCoups(id);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Coups not found' });
        }
        res.status(200).json({ message: 'Coups deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting coups', error });
    }
}

module.exports = {
    getAllCoups,
    getCoupsById,
    createCoups,
    updateCoups,
    deleteCoups
}