const express = require('express');
const path = require('path');
const app = express();
const port = 80;

const about = require('./routes/about');
const contact = require('./routes/contact');

let options = {};
app.use(express.static('static', options))

//EXPRESS SPECIFIC
app.use('/static', express.static('static')) //for serving static files
app.use(express.urlencoded())

//PUG SPECIFIC
app.set('view engine', 'pug') //set the template engine as pug
app.set('views', path.join(__dirname, 'views')) //set the views directory


app.use('/about', about);
app.use('/contact', contact);

//END POINTS
app.get('/', (req, res)=>{
    const params = {}
    res.status(200).render('index.pug', params);
})

//START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
})