const express = require('express');
const router = express.Router();
const playController = require('../controllers/playController');

// /play
router.get('/', playController.getAllPlays);
router.get('/:idPlayer/:idGame', playController.getPlayById);
router.post('/', playController.createPlay);
router.patch('/:id', playController.updatePlay);
router.delete('/:id', playController.deletePlay);

module.exports = router;
