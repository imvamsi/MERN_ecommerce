const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");
const Product = require("../models/product");


exports.productById = (req, res, next, id) => {
    Product.findById(id).exec((err, product) => {
        if(err) {
           return res.status(400).json({
               msg: "Product not found"
           })
        }
        req.product = product;
        next();
    })
}


exports.read = (req, res) => {
    req.product.photo = undefined;
    return res.json(req.product);
}

exports.remove = (req, res) => {
    let product = req.product;
    product.remove((err, deletedProduct) => {
        if(err) {
            return res.status(400).json({
                msg: "Could not be deleted"
            });
        }
        res.json({
            msg: 'Product deleted'
        })
    })
}

exports.update = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
        if (err) {
            return res.status(400).json({
                error: "Image could not be uploaded"
            });
        }
        let product = req.product;
        product = _.extend(product, fields);

        // const {name, description, quantity, price, shipping, photo, category} = fields;
        // if(! name || !description || !quantity || !price || !shipping || !photo || !category) {
        //     return res.status(400).json({
        //         msg: "Enter all fields"
        //     })
        // }

        if (files.photo) {
            if(files.photo.size > 1000000){
                return res.status(400).json({
                    msg: "Image size cannot exceed 1MB"
                })
            }
            product.photo.data = fs.readFileSync(files.photo.path);
            product.photo.contentType = files.photo.type;
        }

        product.save((err, result) => {
            if (err) {
                return res.status(400).json({
                    error: 'could not be completed'
                });
            }
            res.json(result);
        });
    });
}
exports.create = (req, res) => {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
        if (err) {
            return res.status(400).json({
                error: "Image could not be uploaded"
            });
        }
        let product = new Product(fields);

        // const {name, description, quantity, price, shipping, photo, category} = fields;
        // if(! name || !description || !quantity || !price || !shipping || !photo || !category) {
        //     return res.status(400).json({
        //         msg: "Enter all fields"
        //     })
        // }

        if (files.photo) {
            if(files.photo.size > 1000000){
                return res.status(400).json({
                    msg: "Image size cannot exceed 1MB"
                })
            }
            product.photo.data = fs.readFileSync(files.photo.path);
            product.photo.contentType = files.photo.type;
        }

        product.save((err, result) => {
            if (err) {
                return res.status(400).json({
                    error: 'could not be completed'
                });
            }
            res.json(result);
        });
    });
};


