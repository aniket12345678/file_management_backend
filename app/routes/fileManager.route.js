const fileManagerRoutes = require('express')();

const { multerFn } = require('../middleware/middleware');
const { uploadMedia, findAllMedia, fetchImage } = require('../controllers/fileManager.controller');

const upload = multerFn();

fileManagerRoutes.post('/add', upload.array('attachments'), uploadMedia);
fileManagerRoutes.post('/find/all', findAllMedia);
fileManagerRoutes.get('/find/image/:id', fetchImage);

module.exports = { fileManagerRoutes };