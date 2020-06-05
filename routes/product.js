const express = require('express');
const router = express.Router();
const {create} = require('../controllers/product');
const {requireSignIn, isAdmin, isAuth} = require('../controllers/auth')
const { userById } = require("../controllers/user");
const { productById, read, remove, update, list, listRelated, listCategories}  = require('../controllers/product')

router.get('/product/:productId', read);
router.get('/products', list);
router.get('/products/related/:productId', listRelated);
router.get('/products/categories', listCategories);
router.delete('/product/:productId/:userId', requireSignIn, isAuth, isAdmin, remove);
router.put('/product/:productId/:userId', requireSignIn, isAuth, isAdmin, update);
router.post('/product/create/:userId', requireSignIn, isAuth, isAdmin, create);
router.param("userId", userById);
router.param('productId', productById);
module.exports = router;