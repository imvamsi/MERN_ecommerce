const express = require('express');
const Category = require
const router = express.Router();
const {create, read, categoryById} = require('../controllers/category');
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
router.post('/category/create/:userId', requireSignIn, isAuth, isAdmin, create);
router.param("categoryId", categoryById);
router.param("userId", userById);


module.exports = router;
