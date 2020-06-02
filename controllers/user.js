const User = require("../models/user");
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');

exports.signup = (req, res) => {
    console.log("req.body", req.body);
    const user = new User(req.body);
    user.save((err, user) => {
        if (err) {
            return res.status(400).json({
                err: 'Email is already registered'
            });
        }
        user.salt = undefined;
        user.hashed_password = undefined;
        res.json({
            user
        });
    });
};

exports.signin = (req, res) => {
    const {email, password} = req;
    let user = User.findOne({email});
    if(user) {
        return res.status(400).json({msg: "user already exists"});
    }

    const token = jwt.sign({_id: user._id}, process.env.JWT_KEY)
    //persist token as 't' with expiry date
    res.cookie('t', token, {expire: new Date() + 9999});
    return res.json({token: {_id, name, email, role}})
}




