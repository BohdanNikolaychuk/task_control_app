
const { DashBoards } = require('../models/Dashboards.Model');
const { Boards } = require('../models/Boards.Model');


class DashBoardsController {


  async getDashBoards(req, res) {
    try {
      DashBoards.find({ userId: req.user.userId }).then((dashboards) => {
        res.send(dashboards);
      });
    } catch (error) {
      res.send(error)
    }
  }

  async createNewDashBoard(req, res) {
    try {
      const { name, desc } = req.body;

      const newDashBoard = new DashBoards({
        name,
        desc,
        userId: req.user.userId,
      });
      newDashBoard.save().then(() => {
        res.send(newDashBoard);
      });
    } catch (error) {
      res.send(error)
    }
  }
  async editDashBoard(req, res, next) {
    try {
      DashBoards.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }).then(() => {
        res.sendStatus(200);
      });
    } catch (error) {
      res.send(error)
    }
  }
  async deleteDashBoard(req, res, next) {
    try {
      DashBoards.findByIdAndDelete({ _id: req.params.id }).then((removeDashBoard) => {
        res.send(removeDashBoard);
        Boards.find({ dashId: req.params.id }).remove().exec();
      });

    } catch (error) {

    }
  }
}

module.exports = new DashBoardsController();