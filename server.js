/* eslint no-console: 0 */

/* libraries */
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const http = require('http');

/* local dependencies */
const journalRoutes = require('./routes/journals');
const userRoutes = require('./routes/users');

/* Express setup */
var app = express();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({
    extended: true
}));
app.use(logger('dev'));


/* Routes */
// ERROR I believe these 2 lines aren't valid with express 2.0+
app.use('/journals', journalRoutes);
app.use('/users', userRoutes);

// TESTING don't keep this route
app.use('/', (req, res) => {
    var obj = {
        'hello': 'world!'
    };
    res.send(obj);
});


/* start server */
const port = process.env.PORT || '3000';
app.set('port', port);
const server = http.createServer(app);

server.listen(port, () => {
    console.log('API running on localhost: ' + port);
});