const express = require('express');
const router = express.Router();
const gameModeController = require('../controllers/gameModeController');

// /gameModes
router.get('/', gameModeController.getAllGameModes);
router.get('/:id', gameModeController.getGameModeById);
router.post('/', gameModeController.createGameMode);
router.patch('/:id', gameModeController.updateGameMode);
router.delete('/:id', gameModeController.deleteGameMode);

module.exports = router;
