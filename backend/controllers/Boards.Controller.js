const { Boards } = require('../models/Boards.Model');


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
      let name = req.body.name;
      let status = req.body.status;
      let newBoard = new Boards({
        name,
        dashId: req.params.dashId,
        status,
      });
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
  async deleteBoar(req, res, next) {
    try {
      Boards.findOneAndRemove({ _id: req.params.boardId, dashId: req.params.dashId }).then(
        (removeBoards) => {
          res.send(removeBoards);
        },
      );
    } catch (error) {
      res.send(error)
    }
  }
}

module.exports = new BoardsController();