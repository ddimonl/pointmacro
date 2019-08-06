const { check, param } = require('express-validator/check');

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

module.exports.loginUser =  [
    check("email").isEmail().withMessage("Incorrect email")
];

module.exports.createContest = [
    /*c_type - type of contest*/
    check("c_type")
        .isIn([1, 2, 3])
        .withMessage("Incorrect type of contest"),
    check("title")
        .not().isEmpty()
        .withMessage("Field title cannot be empty"),
    check("venture")
        .not().isEmpty()
        .withMessage("Field venture cannot be empty"),
    check("whatVentureDoes")
        .not().isEmpty()
        .withMessage("Field cannot be empty"),
    check("targetDescription")
        .isLength({min: 6})
        .withMessage("Field cannot be empty")

];

/*typeofname,namestyle,taglinepreference,logostyle*/
module.exports.nameContest = [
    check("typeOfName")
        .not().isEmpty()
        .withMessage("Type of name cannot be empty"),
    check("nameStyle")
        .not().isEmpty()
        .withMessage("Name style cannot be empty")
];

module.exports.taglineContest = [
    check("taglinePreference")
        .not().isEmpty()
        .withMessage("Tagline preference cannot be empty")
];

module.exports.logoContest = [
    check("logoStyle")
        .not().isEmpty()
        .withMessage("Logo style cannot be empty")
];