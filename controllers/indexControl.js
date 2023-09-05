// Bring in the Home view
// const Index = require('layout')



// NEW
function indexNew(req, res) {
    console.log('The Home route has been hit');
    res.render('layout');
}
// CREATE
// INDEX
// SHOW
// EDIT
// UPDATE
// DELETE

// Export Modules
module.exports = {
    index: indexNew
};
