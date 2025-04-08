const playersService = require('../services/playersService');

const getAllPlayers = async (req, res) => {
    try {
        const players = await playersService.getAllPlayers();
        res.status(200).json(players);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving players', error });
    }
}

const getPlayerById = async (req, res) => {
    const { id } = req.params;
    try {
        const player = await playersService.getPlayerById(id);
        if (!player) {
            return res.status(404).json({ message: 'Player not found' });
        }
        res.status(200).json(player);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving player', error });
    }
}

const createPlayer = async (req, res) => {
    const newPlayer = req.body;
    try {
        const playerId = await playersService.createPlayer(newPlayer);
        res.status(201).json({ message: 'Player created', playerId });
    } catch (error) {
        res.status(500).json({ message: 'Error creating player', error });
    }
}

const updatePlayer = async (req, res) => {
    const { id } = req.params;
    const updatedPlayer = req.body;
    try {
        const result = await playersService.updatePlayer(id, updatedPlayer);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Player not found' });
        }
        res.status(200).json({ message: 'Player updated' });
    } catch (error) {
        res.status(500).json({ message: 'Error updating player', error });
    }
}

const deletePlayer = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await playersService.deletePlayer(id);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Player not found' });
        }
        res.status(200).json({ message: 'Player deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting player', error });
    }
}

module.exports = {
    getAllPlayers,
    getPlayerById,
    createPlayer,
    updatePlayer,
    deletePlayer,
};
