const express = require('express');
const router = express.Router();
const {create, read, removeCategory, update, categoryById, list} = require('../controllers/category');
const {requireSignIn, isAdmin, isAuth} = require('../controllers/auth')
const { userById } = require("../controllers/user");


router.get("/category/:categoryId", read);
// router.get("/category/:categoryId", async (req, res) => {
//     try {
//       const category = await Category.find({ category: req.category.id });
//       res.json(category);
//     } catch (error) {
//       res.status(500).send("server error");
//     }
//   });
router.delete('/category/:categoryId/:userId', requireSignIn, isAuth, isAdmin, removeCategory);
router.put('/category/:categoryId/:userId', requireSignIn, isAuth, isAdmin, update);
router.get('/categories', list);
router.post('/category/create/:userId', requireSignIn, isAuth, isAdmin, create);
router.param("categoryId", categoryById);
router.param("userId", userById);


module.exports = router;
