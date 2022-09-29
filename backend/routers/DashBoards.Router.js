const express = require('express');
const router = express.Router();



const DashBoardsController = require('../controllers/DashBoards.Controllers');



router.get('/dashboards', DashBoardsController.getDashBoards);

router.post('/dashboards', DashBoardsController.createNewDashBoard);

router.patch('/dashboards/:id', DashBoardsController.editDashBoard);

router.delete('/dashboards/:id', DashBoardsController.deleteDashBoard);


module.exports = router;
