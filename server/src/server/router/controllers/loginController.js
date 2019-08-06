const models = require('../../models/index');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const NotFoundError  = require('../../utils/errorHandler/NotFoundError')
const InvalidParamsError  = require('../../utils/errorHandler/InvalidParamsError')

module.exports = (req, res, next) => {
    const { email, password } = req.body;
    models.User.findOne({ where: { email: email }})
        .then((user) => {
            if(!user) {
                const err = new NotFoundError("User not found");
                res.status(404).send({ error: err });
            }

            bcrypt.compare(password, user.password)
                .then(result => {
                    if(result) {
                        jwt.sign({user}, 'privatekey', { expiresIn: '1h' },(err, token) => {
                            if(err) { console.log(err) }
                            res.send({
                                jwt: token,
                                user: {
                                    id: user.id,
                                    displayName: user.displayName
                                }
                            });
                        });
                    } else {
                        const err = new InvalidParamsError('Wrong password');
                        err.status = 400;
                        res.status(err.status).send({error: err});
                    }
                })
                .catch(err => next(err))
        })
        .catch(err => next(err))
};