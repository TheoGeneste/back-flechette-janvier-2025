const playsService = require('../services/playService');

const getAllPlays = async (req, res) => {
    try {
        const plays = await playsService.getAllPlays();
        res.status(200).json(plays);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving plays', error });
    }
}

const getPlayById = async (req, res) => {
    const { idPlayer,idGame } = req.params;
    try {
        const play = await playsService.getPlayById(idPlayer, idGame);
        if (!play) {
            return res.status(404).json({ message: 'Play not found' });
        }
        res.status(200).json(play);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving play', error });
    }
}

const createPlay = async (req, res) => {
    const newPlay = req.body;
    try {
        const playId = await playsService.createPlay(newPlay);
        res.status(201).json({ message: 'Play created', playId });
    } catch (error) {
        res.status(500).json({ message: 'Error creating play', error });
    }
}

const updatePlay = async (req, res) => {
    const { id } = req.params;
    const updatedPlay = req.body;
    try {
        const result = await playsService.updatePlay(id, updatedPlay);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Play not found' });
        }
        res.status(200).json({ message: 'Play updated' });
    } catch (error) {
        res.status(500).json({ message: 'Error updating play', error });
    }
}

const deletePlay = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await playsService.deletePlay(id);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Play not found' });
        }
        res.status(200).json({ message: 'Play deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting play', error });
    }
}

module.exports = {
    getAllPlays,
    getPlayById,
    createPlay,
    updatePlay,
    deletePlay
}