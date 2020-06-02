const express = require('express');
const router = express.Router();
const {signup, signin} = require('../controllers/user')
const { userSignUpValidator } = require('../validator/index')

router.post('/signup', userSignUpValidator, signup);
router.post("/signin", signin);

module.exports = router;