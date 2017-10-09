const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const morgan = require('morgan');
const app = express();
const port = process.env.PORT || 5000;
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');

/*
 ****************
 Middleware calls
 ****************
 */
app.use(morgan('dev'));   // show requests in console
app.use(cookieParser());
app.use(bodyParser.json());
app.use(session({secret: 'session secrete', cookie: {}}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, '../static')));

/*
 *******************
 ROUTING STARTS HERE
 *******************
 */

app.use('/', routes);
app.use('/', routes);
app.use('/', routes);

// Index and catch-all
app.get('/*', (req, res) => {
    console.log('catch all')
    res.sendFile(path.join(__dirname, '/static/index.html'));
})
/*
 *******************************************************************
 Spin up server
 *******************************************************************
 */

app.listen(port);
console.log(`Listening on port: ${port}`);