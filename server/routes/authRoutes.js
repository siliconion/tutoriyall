const routes = require('express').Router();
const passport = require('./routes/auth')

routes.get('/auth/provider', passport.authenticate('github'));

routes.get('/github_callback',
    passport.authenticate('github', {failureRedirect: '/login'}),
    (req, res) => {
        res.redirect('/');
    });

routes.get('/getUserInfo', isLoggedIn, (req, res)=>{
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

routes.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.status(401).send("you shall not pass");
}