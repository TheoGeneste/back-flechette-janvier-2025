const gameModeService = require('../services/gameModeService');

const getAllGameModes = async (req, res) => {
    try {
        const gameModes = await gameModeService.getAllGameModes();
        res.status(200).json(gameModes);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving game modes', error });
    }
}

const getGameModeById = async (req, res) => {
    const { id } = req.params;
    try {
        const gameMode = await gameModeService.getGameModeById(id);
        if (!gameMode) {
            return res.status(404).json({ message: 'Game mode not found' });
        }
        res.status(200).json(gameMode);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving game mode', error });
    }
}

const createGameMode = async (req, res) => {
    const newGameMode = req.body;
    try {
        const gameModeId = await gameModeService.createGameMode(newGameMode);
        res.status(201).json({ message: 'Game mode created', gameModeId });
    } catch (error) {
        res.status(500).json({ message: 'Error creating game mode', error });
    }
}

const updateGameMode = async (req, res) => {
    const { id } = req.params;
    const updatedGameMode = req.body;
    try {
        const result = await gameModeService.updateGameMode(id, updatedGameMode);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Game mode not found' });
        }
        res.status(200).json({ message: 'Game mode updated' });
    } catch (error) {
        res.status(500).json({ message: 'Error updating game mode', error });
    }
}

const deleteGameMode = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await gameModeService.deleteGameMode(id);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Game mode not found' });
        }
        res.status(200).json({ message: 'Game mode deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting game mode', error });
    }
}

module.exports = {
    getAllGameModes,
    getGameModeById,
    createGameMode,
    updateGameMode,
    deleteGameMode
}