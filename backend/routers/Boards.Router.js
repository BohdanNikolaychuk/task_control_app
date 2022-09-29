const express = require('express');
const router = express.Router();

const BoardsController = require('../controllers/Boards.Controller');

const { authMiddleware } = require('../middleware/Auth.Middleware');

router.get('/dashboards/:dashId/boards', authMiddleware, BoardsController.getBoards);

router.post('/dashboards/:dashId/boards', authMiddleware, BoardsController.createBoard);

router.patch('/dashboards/:dashId/boards/:boardId', authMiddleware, BoardsController.editBoard);
router.delete('/dashboards/:dashId/boards/:boardId', authMiddleware, BoardsController.deleteBoar);

module.exports = router;