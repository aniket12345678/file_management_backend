const allRoutes = require('express')();

const { authRoutes } = require('./auth.route');
const { fileManagerRoutes } = require('./fileManager.route');

allRoutes.use('/user', authRoutes);
allRoutes.use('/file/manager', fileManagerRoutes);

module.exports = { allRoutes };