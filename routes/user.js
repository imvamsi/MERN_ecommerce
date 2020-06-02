const express = require('express');
const router = express.Router();
const {userById} = require('../controllers/user')
const {requireSignIn, isAdmin, isAuth} = require('../controllers/auth')

//get the profile of the authenticated user
//stupid i know
//to be refactored later
router.get('/secret/:userId', requireSignIn, isAuth, (req, res) => {
    res.json({
        user: req.profile
    })
})
router.param('userId', userById);
module.exports = router;