const multer = require("multer");
const path = require('path');

function multerFn() {
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, path.join(__dirname, '..', 'uploads'));
        },
        filename: function (req, file, cb) {
            cb(null, Date.now() + '-' + file.originalname);
        }
    })

    return multer({ storage: storage })
}

module.exports = { multerFn }