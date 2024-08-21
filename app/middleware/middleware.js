const path = require('path');
const multer = require("multer");
const jwt = require('jsonwebtoken');

const operationHandler = {
    handleSuccess: (res, data, message) => {
        return res.status(200).send({
            message: message,
            data: data,
            code: 200
        });
    },
    handleError: (res, error, message) => {
        console.log(`${message}:- ${error}`);
        return res.status(500).send({
            message: message,
            code: 500
        })
    }
}

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

const verifyToken = (req, res, next) => {
    try {
        const { authorization } = req.headers;

        if (!authorization) {
            throw { message: 'Auth token is missing', code: 401 };
        }
        if (!authorization.includes('Bearer')) {
            throw { message: 'Invalid auth token', code: 401 };
        }
        const mainToken = authorization.split(' ');
        const decoded = jwt.verify(mainToken[1], process.env.JWTKEY);
        next();
    } catch (error) {
        console.log('error:- ', error);
        return res.status(401).send(error)
    }
}

// const joiMiddleware = (schema) => {
//     try {
//         return async (req, res, next) => {
//             const { error } = schema.validate(req.body);
//             if (error) {
//                 const joiErrMessage = error.details.map((x) => x.message);
//                 operationHandler.handleError(res, error, 'Validation error');
//             }
//             else {
//                 next();
//             }
//         }
//     } catch (error) {
//         operationHandler.handleError(res, error, 'some error occured')
//     }
// }

module.exports = { multerFn }