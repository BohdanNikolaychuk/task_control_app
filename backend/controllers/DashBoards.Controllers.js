
const { DashBoards } = require('../models/Dashboards.Model');

class DashBoardsController {
  async getDashBoards(req, res, next) {
    try {
      DashBoards.find({}).then((dashboards) => {
        res.send(dashboards);
      });
    } catch (error) {
      res.send(error)
    }
  }
  async createNewDashBoard(req, res, next) {
    try {
      let { name, desc } = req.body;
      let newDashBoard = new DashBoards({
        name,
        desc
      });
      newDashBoard.save().then((dashboards) => {
        res.send(dashboards);
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
      });
    } catch (error) {

    }
  }
}

module.exports = new DashBoardsController();