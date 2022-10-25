const express = require('express');
const router = express.Router();

const BoardsController = require('../controllers/Boards.Controller');



router.get('/dashboards/:dashId/boards', BoardsController.getBoards);

router.post('/dashboards/:dashId/boards', BoardsController.createBoard);

router.patch('/dashboards/:dashId/boards/:boardId', BoardsController.editBoard);
router.patch('/dashboards/:dashId/boards/:boardId', BoardsController.changeArchiveStatus);
router.delete('/dashboards/:dashId/boards/:boardId', BoardsController.deleteBoard);

module.exports = router;