const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/taskController');

router.get('/', ctrl.getAll);
router.post('/', ctrl.create);
router.put('/:id', ctrl.update);
router.delete('/:id', ctrl.delete);
router.get('/summary', ctrl.summary);

module.exports = router;