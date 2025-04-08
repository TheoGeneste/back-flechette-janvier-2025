const express = require('express');
const router = express.Router();
const coupsController = require('../controllers/coupsController');

// /coups
router.get('/', coupsController.getAllCoups);
router.get('/:id', coupsController.getCoupsById);
router.post('/', coupsController.createCoups);
router.patch('/:id', coupsController.updateCoups);
router.delete('/:id', coupsController.deleteCoups);

module.exports = router;