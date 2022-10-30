const { Boards } = require('../models/Boards.Model');
const { DashBoards } = require('../models/Dashboards.Model');

class BoardsController {

  async getBoards(req, res, next) {
    try {
      Boards.find({
        dashId: req.params.dashId,

      }).then((boards) => {
        res.send(boards);
      });
    } catch (error) {
      res.send(error)
    }
  }
  async createBoard(req, res, next) {
    try {
      const { name, status } = req.body;
      const { dashId } = req.params

      const newBoard = new Boards({
        name,
        dashId,
        status,
      });
      const DashBoard = await DashBoards.findById(dashId);
      DashBoard.tasks = [...DashBoard.tasks, newBoard];

      DashBoard.toDoCount = DashBoard.tasks.filter((task) => task.status === 'TODO').length;
      DashBoard.inProgressCount = DashBoard.tasks.filter(
        (task) => task.status === 'INPROGRESS',
      ).length;
      DashBoard.doneCount = DashBoard.tasks.filter((task) => task.status === 'DONE').length;
      DashBoard.save();
      newBoard.save().then((newAddBoard) => {
        res.send(newAddBoard);
      });
    } catch (error) {
      res.send(error)
    }
  }
  async editBoard(req, res, next) {
    try {
      Boards.findOneAndUpdate(
        { _id: req.params.boardId, dashId: req.params.dashId },
        { $set: req.body },
      ).then(() => {
        res.sendStatus(200);
      });
    } catch (error) {
      res.send(error)
    }
  }
  async deleteBoard(req, res, next) {
    try {
      const { boardId, dashId } = req.params;
      const DashBoard = await DashBoards.findById(dashId);
      // 
      const filteredTasks = DashBoard.tasks.filter((task) => {
        JSON.stringify(task._id) !== boardId
      });

      DashBoard.tasks = filteredTasks;
      DashBoard.toDoCount = DashBoard.tasks.filter((task) => task.status === 'TODO').length;
      DashBoard.inProgressCount = DashBoard.tasks.filter(
        (task) => task.status === 'INPROGRESS',
      ).length;
      DashBoard.doneCount = DashBoard.tasks.filter((task) => task.status === 'DONE').length;

      DashBoard.save();
      await Boards.findOneAndRemove({ _id: boardId, dashId }).then(
        (removeBoards) => {

          res.send(removeBoards);
        },
      );
    } catch (error) {
      res.send(error)
    }
  }

  async changeArchiveStatus(req, res, next) {
    try {
      Boards.findOneAndUpdate(
        { _id: req.params.boardId, dashId: req.params.dashId },
        { $set: req.body },
      ).then(() => {
        res.sendStatus(200);
      });
    } catch (error) {
      res.send(error)
    }
  }


  async changeStatusInTask(req, res, next) {
    try {
      Boards.findOneAndUpdate(
        { _id: req.params.boardId, dashId: req.params.dashId },
        { $set: req.body },
      ).then(() => {
        res.sendStatus(200);
      });
    } catch (error) {
      res.send(error)
    }
  }
}

module.exports = new BoardsController();