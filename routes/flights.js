// We need express
const express = require('express');
// Wer need to isolate the router
const router = express.Router();
// We need controller function(we'll keep those in another file)
const flightCtrl = require('../controllers/flightsControl');

// NEW route - displays a form that triggers CREATE
router.get('/new', flightCtrl.new); // This route will  be /flights/new

// CREATE route creates the data(triggered by the 'new' form)
// This route will be /flights
router.post('/', flightCtrl.create)

// INDEX 
router.get('/', flightCtrl.index)
// SHOW 

// UPDATE
// DELETE
// We need to export
module.exports = router