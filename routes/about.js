const express = require('express');
const router = express.Router();

/* Get About Page */
router.get('/', function (_req, res,) {
    res.render('about', {
        name: 'Bucky'
    });
});

module.exports =  router;