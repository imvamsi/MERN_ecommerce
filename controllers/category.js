const Category = require('../models/category')
exports.create = (req, res) => {
    const category = new Category(req.body);
    category.save((err, data) => {
        if(err) {
            return res.status(400).json({
                msg: "error"
            })
        }
        res.json({data});
    })
}

exports.categoryById = (req, res, next, id) => {
   Category.findById(id).exec((err, category) => {
       if(err) {
           return res.status(400).json({
               msg: "catgeory could not be found"
           });
       }
       req.category = category;
       next();
   })
}

exports.read = (req, res) => {
    return res.json(req.category);
}

exports.update = (req, res) => {
    let category = req.category;
    console.log(category);
     category.name = req.body.name;
     
    category.save((err, data) => {
        if(err) {
            return res.status(400).json({
                msg: 'could not be performed'
            });
        }
         res.json(data);
    })
}

exports.removeCategory = (req, res) => {
    const product = req.category;
    console.log(product);
    product.remove((err, deletedProduct) => {
        if(err) {
            return res.status(400).json({
                msg: "Could not be deleted"
            });
        }
        res.json({
            deletedProduct,
            msg: 'Product deleted'
        })
    })
}

exports.list = (req, res) => {
    Category.find().exec((err, data) => {
        if(err) {
            return res.status(400).json({
                msg: 'could not get the items'
            });
        }
        res.json(data);
    })
}