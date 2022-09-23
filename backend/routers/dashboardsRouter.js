const express = require('express');
const router = express.Router();


const { Boards } = require('../models/Boards.model');
const { DashBoards } = require('../models/Dashboards.model');



router.get('/dashboards', (req, res) => {
  // return array of dashboards
  DashBoards.find({}).then(dashboards => {
    res.send(dashboards)
  })
});

router.post('/dashboards', (req, res) => {
  //create a new dashboard
  let name = req.body.name;
  let newDashBoard = new DashBoards({
    name
  });
  newDashBoard.save().then(dashboards => {
    res.send(dashboards);
  })
});

router.patch('/dashboards/:id', (req, res) => {
  DashBoards.findOneAndUpdate({ _id: req.params.id }, { $set: req.body })
    .then(() => {
      res.sendStatus(200);
    })

});

router.delete('/dashboards/:id', (req, res) => {
  DashBoards.findByIdAndDelete({ _id: req.params.id }).then((removeDashBoard) => {
    res.send(removeDashBoard)
  })
  //delete ddashboard by id
})

module.exports = router;
