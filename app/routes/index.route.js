const allRoutes = require('express')();

const { authRoutes } = require('./auth.route');

allRoutes.use('/user', authRoutes);

module.exports = { allRoutes };