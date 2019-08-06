module.exports = (err, req, res, next) => {
    if(!err.status) {
        next();
    } else {
        res.status(err.status).send(err);
    }
};