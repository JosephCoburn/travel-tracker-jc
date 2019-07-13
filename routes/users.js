const router = require('express').Router();
const User = require('../models/user.model');
const usersCtrl = require('../controllers/users');


/*---------- Public Routes ----------*/
router.post('/users/signup', usersCtrl.signup);
router.post('/users/login', usersCtrl.login);


/*---------- Protected Routes ----------*/




module.exports = router;