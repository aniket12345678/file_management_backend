const fileManagerRoutes = require('express')();

const { uploadMedia } = require('../controllers/fileManager.controller');

fileManagerRoutes.post('/add', uploadMedia);

module.exports = { fileManagerRoutes };