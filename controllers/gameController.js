const gameService = require('../services/gameService');

const getAllGames = async (req, res) => {
    try {
        const games = await gameService.getAllGames();
        res.status(200).json(games);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving games', error });
    }
}

const getGameById = async (req, res) => {
    const { id } = req.params;
    try {
        const game = await gameService.getGameById(id);
        if (!game) {
            return res.status(404).json({ message: 'Game not found' });
        }
        res.status(200).json(game);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving game', error });
    }
}

const createGame = async (req, res) => {
    const newGame = req.body;
    try {
        const gameId = await gameService.createGame(newGame);
        res.status(201).json({ message: 'Game created', gameId });
    } catch (error) {
        res.status(500).json({ message: 'Error creating game', error });
    }
}

const updateGame = async (req, res) => {
    const { id } = req.params;
    const updatedGame = req.body;
    try {
        const result = await gameService.updateGame(id, updatedGame);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Game not found' });
        }
        res.status(200).json({ message: 'Game updated' });
    } catch (error) {
        res.status(500).json({ message: 'Error updating game', error });
    }
}

const deleteGame = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await gameService.deleteGame(id);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Game not found' });
        }
        res.status(200).json({ message: 'Game deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting game', error });
    }
}

module.exports = {
    getAllGames,
    getGameById,
    createGame,
    updateGame,
    deleteGame
}