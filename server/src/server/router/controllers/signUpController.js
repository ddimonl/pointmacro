const models = require('../../models/index');
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = (req, res, next) => {
    bcrypt.hash(req.body.password, saltRounds)
        .then(hashedPwd => {
            models.User.create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                displayName: req.body.displayName,
                email: req.body.email,
                password: hashedPwd,
                role: req.body.role
            })
            .then((user) => { res.json(user) })
            .catch(err => { next(err) })
        })
        .catch(err => { res.send(err) })
};