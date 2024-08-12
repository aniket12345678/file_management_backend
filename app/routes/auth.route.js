const authRoutes = require('express')();

const { signUp, logIn } = require('../controllers/auth.controller');

authRoutes.post('/login', logIn);
authRoutes.post('/signup', signUp);

module.exports = { authRoutes };