const express = require('express');
const router = express.Router();

/* Get About Page */
router.get('/', function (_req, res,) {
    res.render('contact', {
        name: 'Bucky'
    });
}); 

module.exports =  router;