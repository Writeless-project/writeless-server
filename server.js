const express = require('express');
// const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const http = require('http');

// mongoose.connect('localhost:27017/writeless');

var app = express();
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({
    extended: true
}));
app.use(logger('dev'));


/* TESTING routes */
app.use('/', (req, res) => {
    var obj = {
        'hello': 'world!'
    };
    res.send(obj);
});


const port = process.env.PORT || '3000';
app.set('port', port);
const server = http.createServer(app);

// Tell the server to start listening on the provided port
server.listen(port, () => {
    console.log('API running on localhost: ' + port);
});