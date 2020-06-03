const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");
const Product = require("../models/product");

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

        const {name, description, quantity, price, shipping, photo, category} = fields;
        if(! name || !description || !quantity || !price || !shipping || !photo || !category) {
            return res.status(400).json({
                msg: "Enter all fields"
            })
        }

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


