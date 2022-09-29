const express = require('express');
const router = express.Router();

const BoardsController = require('../controllers/Boards.Controller');


router.get('/dashboards/:dashId/boards', BoardsController.getBoards);

router.post('/dashboards/:dashId/boards', BoardsController.createBoard);

router.patch('/dashboards/:dashId/boards/:boardId', BoardsController.editBoard);
router.delete('/dashboards/:dashId/boards/:boardId', BoardsController.deleteBoar);

module.exports = router;