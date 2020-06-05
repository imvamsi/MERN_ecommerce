exports.userSignUpValidator = (req, res, next) => {
    req.check('name', 'Name is required').notEmpty();
    req.check('email', 'Email is required').isEmail();
    req.check('password', 'password is required').isLength({min: 6});
    const errors = req.validationErrors();
    if (errors) {
        const err = errors.map(error => error);
        return res.status(400).json({ errors: err });
      }
    next();
}