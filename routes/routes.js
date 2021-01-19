let router = require('express').Router();
router.get('/', function (req, res) {
    res.json({
        status: 'API is Working',
        message: 'Welcome to webapp crafted with love!',
    });
});

// #STEP 3. Router per la gestione dei contatti
var contactController = require('../controllers/contactController');
router.route('/contacts')
    .get(contactController.index)
    .post(contactController.new);

router.route('/contacts/:contact_id')
    .get(contactController.view)
    .put(contactController.update)
    .delete(contactController.delete);


module.exports = router;