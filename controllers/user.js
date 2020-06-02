const User = require('../models/user')

exports.userById = (req, res, next, id) => {
    User.findById(id).exec((err, user) => {
        if(err || !user) {
            return res.status.json({
                msg: 'User not found'
            });
        }
        req.profile = user;
        next();
    })
}