const express = require('express');
const router = express.Router();
const Controller = require('../controllers/foodController');

router.post('/', Controller.create);
router.get('/', Controller.getAll);
router.get('/:_id', Controller.getOne);
router.put('/:_id', Controller.update);
router.delete('/:_id', Controller.delete);

module.exports = router;
