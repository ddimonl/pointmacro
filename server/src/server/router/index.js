import 'babel-polyfill';
import express from 'express';
const jwt = require('jsonwebtoken');
const loginController = require('./controllers/loginController');
const signUpController =  require('./controllers/signUpController');
const ApplicationError = require('../utils/errorHandler/ApplicationError');
const router = express.Router();
const validationMiddleware = require('../utils/validationMiddleware');
const validationParams = require('../utils/validationParams');
const contestController = require('./controllers/contestController');

router.get('/test', (req, res, next) => {
	res.send("Hello world");
});

router.post('/login',
	validationParams.loginUser,
	validationMiddleware.validate,
	loginController
);

router.post('/signup',
	validationParams.signUpUser,
	validationMiddleware.validate,
	validationMiddleware.checkUser,
	signUpController
);
router.post('/namecontest/:userId',
	validationParams.createContest,
	validationParams.nameContest,
	validationMiddleware.validate,
	contestController.createContest
);
router.post('/taglinecontest/:userId',
	validationParams.createContest,
	validationParams.taglineContest,
	validationMiddleware.validate,
	contestController.createContest
);
router.post('/logocontest/:userId',
	validationParams.createContest,
	validationParams.logoContest,
	validationMiddleware.validate,
	contestController.createContest
);

/*get user contest with some status*/
router.get('/mycontest/:status',
	contestController.getContest
);

/*get all active contests*/
router.get('/contest/active',
	contestController.getActiveContests
);

router.put('/changestatus/:contestId',
	contestController.changeContestStatus
);

router.get('/notforall',
	validationMiddleware.checkToken,
	(req, res, next) => {
		//verify the JWT token generated for the user
		jwt.verify(req.token, 'privatekey', (err, authorizedData) => {
			if(err){
				//If error send Forbidden (403)
				const err = new ApplicationError("Could not connect to the protected route", 403)
				res.status(403).send({ error: err})
			} else {
				//If token is successfully verified, we can send the autorized data
				delete authorizedData.user.password;
				res.json({
					message: 'Successful log in',
					authorizedData
				});
				console.log('SUCCESS: Connected to protected route');
			}
		})
	}
);

module.exports = router;