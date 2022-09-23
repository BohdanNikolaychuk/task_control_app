const express = require('express');
const router = express.Router();




router.get('/dashboards', (req, res) => {
  // return array of dashboards
});

router.post('/dashboards', (req, res) => {
  //create a new dashboard

});

router.patch('/dashboards/:id', (req, res) => {
  //want to update dashboard(title,description)
});

router.delete('/dashboards/:id', (req, res) => {

  //delete ddashboard by id
})

