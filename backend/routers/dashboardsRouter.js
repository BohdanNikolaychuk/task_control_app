const express = require('express');
const router = express.Router();

const { Boards } = require('../models/Boards.model');
const { DashBoards } = require('../models/Dashboards.model');

router.get('/dashboards', (req, res) => {
  // return array of dashboards
  DashBoards.find({}).then((dashboards) => {
    res.send(dashboards);
  });
});

router.post('/dashboards', (req, res) => {
  //create a new dashboard
  let name = req.body.name;
  let newDashBoard = new DashBoards({
    name,
  });
  newDashBoard.save().then((dashboards) => {
    res.send(dashboards);
  });
});

router.patch('/dashboards/:id', (req, res) => {
  DashBoards.findOneAndUpdate({ _id: req.params.id }, { $set: req.body }).then(() => {
    res.sendStatus(200);
  });
});

router.delete('/dashboards/:id', (req, res) => {
  DashBoards.findByIdAndDelete({ _id: req.params.id }).then((removeDashBoard) => {
    res.send(removeDashBoard);
  });
  //delete ddashboard by id
});

router.get('/dashboards/:dashId/boards', (req, res) => {
  Boards.find({
    _dashId: req.params.dashId,
  }).then((boards) => {
    res.send(boards);
  });
});

router.post('/dashboards/:dashId/boards', (req, res) => {
  let name = req.body.name;
  let newBoard = new Boards({
    name,
    dashId: req.params.dashId,
  });
  newBoard.save().then((newAddBoard) => {
    res.send(newAddBoard);
  });
});

router.patch('/dashboards/:dashId/boards/:boardId', (req, res) => {
  Boards.findOneAndUpdate(
    { _id: req.params.boardId, dashId: req.params.dashId },
    { $set: req.body },
  ).then(() => {
    res.sendStatus(200);
  });
});
router.delete('/dashboards/:dashId/boards/:boardId', (req, res) => {
  Boards.findOneAndRemove({ _id: req.params.boardId, dashId: req.params.dashId }).then(
    (removeBoards) => {
      res.send(removeBoards);
    },
  );
});

module.exports = router;
