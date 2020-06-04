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
// exports.categoryById = (req, res, next, id) => {
//     Category.findById(id).exec((err, category) => {
//         if (err || !category) {
//             return res.status(400).json({
//                 error: "Category does not exist"
//             });
//         }
//         req.category = category;
//         next();
//     });
// };

exports.read = (req, res) => {
    return res.json(req.category);
}