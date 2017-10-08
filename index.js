const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const morgan = require('morgan');
// const db = require('./db');
const passport = require('./controllers/auth')
const app = express();
const port = process.env.PORT || 5000;

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
app.use(express.static(path.join(__dirname, '/static')));

/*
 *******************
 ROUTING STARTS HERE
 *******************
 */

app.get('/auth/provider', passport.authenticate('github'));

app.get('/github_callback',
    passport.authenticate('github', {failureRedirect: '/login'}),
    (req, res) => {
        res.redirect('/');
    });

app.get('/getUserInfo', isLoggedIn, (req, res)=>{
    const user = req.user
    console.log(user)
    res.json({
        id: user.id,
        username: user.username,
        avatar: user.avatar,
        tutorialList: [1,2,3,4],
        tagList: [5, 6, 7],
    })
})

app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

app.get('/loginstatus', isLoggedIn, (req, res) => {
    res.send("you logged in")
})
// Index and catch-all
app.get('/*', (req, res) => {
    console.log('catch all')
    res.sendFile(path.join(__dirname, '/static/index.html'));
})
;

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.status(401).send("you shall not pass");
}

/*
 *******************************************************************
 Spin up server
 *******************************************************************
 */

app.listen(port);
console.log(`Listening on port: ${port}`);