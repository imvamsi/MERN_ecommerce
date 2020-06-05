const express = require('express');
const router = express.Router();
const {userById, read, update} = require('../controllers/user')
const {requireSignIn, isAdmin, isAuth} = require('../controllers/auth')

//get the profile of the authenticated user
//stupid i know
//to be refactored later
router.get('/secret/:userId', requireSignIn, isAuth, (req, res) => {
    res.json({
        user: req.profile
    })
})

router.get('/user/:userId', requireSignIn, isAuth, read);
router.put('/user/:userId', requireSignIn, isAuth, update);
router.param('userId', userById);
module.exports = router;