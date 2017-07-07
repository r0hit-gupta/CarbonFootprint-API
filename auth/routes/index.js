var express = require('express');  
var passport = require('passport');  
var router = express.Router();


router.get('/login', function(req, res, next) {  
    res.render('login.ejs', { message: req.flash('loginMessage') });
});

router.get('/signup', function(req, res) {  
    res.render('signup.ejs', { message: req.flash('signupMessage') });
});

router.post('/signup', passport.authenticate('local-signup', {  
    successRedirect: '/',
    failureRedirect: '/auth/signup',
    failureFlash: true,
}));

router.post('/login', passport.authenticate('local-login', {  
    successRedirect: '/',
    failureRedirect: '/auth/login',
    failureFlash: true,
}));
 
router.get('/facebook', passport.authenticate('facebook', { scope: 'email' }));

router.get('/facebook/callback', passport.authenticate('facebook', {  
    successRedirect: '/',
    failureRedirect: '/auth/signup',
}));

// Twitter routes
router.get('/twitter', passport.authenticate('twitter'));

router.get('/twitter/callback', passport.authenticate('twitter', {  
    successRedirect: '/',
    failureRedirect: '/auth/signup',
}));

// Google routes
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback', passport.authenticate('google', {  
    successRedirect: '/',
    failureRedirect: '/auth/signup',
}));

router.get('/logout', function(req, res) {  
    req.logout();
    res.redirect('/');
});

module.exports = router;

function isLoggedIn(req, res, next) {  
    if (req.isAuthenticated())
        return next();
    res.redirect('auth/');
}
