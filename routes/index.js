// We need express
const express = require('express');
// Wer need to isolate the router
const router = express.Router();
// We need controller function(we'll keep those in another file)
const indexCtrl = require('../controllers/indexControl');
// NEW route
router.get('/', indexCtrl.index); // This route will  be /flights/new
// CREATE route
// INDEX
// SHOW 
// UPDATE
// DELETE
// We need to export
module.exports = router