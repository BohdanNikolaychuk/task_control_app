const express = require('express');
const router = express.Router();



const DashBoardsController = require('../controllers/DashBoards.Controllers');
const { authMiddleware } = require('../middleware/Auth.Middleware');


router.get('/dashboards', authMiddleware, DashBoardsController.getDashBoards);

router.post('/dashboards', authMiddleware, DashBoardsController.createNewDashBoard);

router.patch('/dashboards/:id', authMiddleware, DashBoardsController.editDashBoard);

router.delete('/dashboards/:id', authMiddleware, DashBoardsController.deleteDashBoard);


module.exports = router;
