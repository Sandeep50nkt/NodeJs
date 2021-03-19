
const express 	 = require('express');
const bodyParser = require('body-parser');
const app 		 = express();

app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
});

const digitalPrefRouter = require('./routes/digitalPrefRoute')
app.use('/api',digitalPrefRouter)

module.exports = app;