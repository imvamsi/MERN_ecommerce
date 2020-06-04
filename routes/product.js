const express = require('express');
const router = express.Router();
const {create} = require('../controllers/product');
const {requireSignIn, isAdmin, isAuth} = require('../controllers/auth')
const { userById } = require("../controllers/user");
const { productById, read }  = require('../controllers/product')

router.get('/product/:productId', read);
router.post('/product/create/:userId', requireSignIn, isAuth, isAdmin, create);
router.param("userId", userById);
router.param('productId', productById);
module.exports = router;