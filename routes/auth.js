const express = require('express');
const { signup, signin, signout } = require('../controllers/auth');
const {userSignupValidator} = require('../validators/index');

const router = express.Router();


router.post('/signup', userSignupValidator, signup);
router.post('/signin', signin);

// signout
router.get('/signout', signout);

module.exports = router;
