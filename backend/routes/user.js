const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');

// Methode post pour les routes signup et login
router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);

module.exports = router;