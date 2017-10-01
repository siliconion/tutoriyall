const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const morgan = require('morgan');
// const db = require('./db');
const axios = require('axios');
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
app.use(express.static(path.join(__dirname, '/static')));

/*
 *******************
 ROUTING STARTS HERE
 *******************
 */

app.get('/testid?:code', (req, res) => {
    console.log(req)
    const code = req.query.code
    console.log(client_id, client_secret, code)
    res.send('whoooo')
})

app.get('/github_callback?:code', (req, res) => {
    const code = req.query.code
    const data = {
        'client_id': client_id,
        'client_secret': client_secret,
        'code': code
    };
    console.log(data)
    axios.post('https://github.com/login/oauth/access_token', data).then(resp => {
        const access_token = resp.data.split('&')[0].split('=')[1]
        console.log('access token', access_token)
        return axios.get('https://api.github.com/user?access_token='+access_token)
    }).then(resp => {
        user_id = user_info.id
        user_info = resp.data
        username = user_info.login
        avatar_url = user_info.avatar_url
        name = user_info.name
        res.cookie('user_id',randomNumber, { maxAge: 900000, httpOnly: true });
        res.redirect('/');
    }).catch(err=>{
        console.log(err)
        res.send(err)
    })
});

// Song list routes
app.get('/songlist', isLoggedIn, function (req, res) {
    // db.getSongList(req.user.username, (err, data) => {
    //     res.send(data.rows);
    // })
    res.send("dude")
});


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