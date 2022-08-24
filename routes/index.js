const express = require('express');
const router = express.Router();

/* Get Home Page */
router.get('/', function (req, res,) {
    res.render('index', {
        name: 'Bucky'
    });
});

module.exports =  router;