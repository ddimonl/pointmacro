const InvalidParamsError = require("./errorHandler/InvalidParamsError");
const models = require('../models/index');

const { validationResult, check } = require('express-validator/check');

module.exports.signUpUser = [
    check("email")
        .isEmail()
        .withMessage("Incorrect email"),
    check("displayName")
        .isLength({min: 4})
        .withMessage("Too short name"),
    check("password")
        .isLength({min: 6})
        .withMessage("Too short password."),
    check("role")
        .isIn(["CUSTOMER", "CREATIVE"])
        .withMessage("Incorrect role")
];

module.exports.validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const err = new InvalidParamsError(errors.array())
        res.send({ error: err })
    }
    next();
};

module.exports.checkUser = (req, res, next) => {
    models.User.findOne({ where: {email: req.body.email} })
        .then((user) => {
            if(user) {
                const err = new AlreadyExistsError("User already exists", 409)
                return res.status(409).send({ error: err })
            }
            next();
        })
        .catch(err => { next(err) })
};

module.exports.checkToken = (req, res, next) => {
    const header = req.headers['authorization'];

    if(typeof header !== 'undefined') {
        const bearer = header.split(' ');
        const token = bearer[0];

        req.token = token;
        next();
    } else {
        //If header is undefined return Forbidden (403)
        const err = new ApplicationError("Could not connect to the protected route", 403)
        res.status(403).send({ error: err})
    }
};






