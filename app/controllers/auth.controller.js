const { UserModel } = require("../models/index.model");

const signUp = (req, res) => {
    try {
        UserModel.create()
        console.log('this is a signup function');
        console.log('req.body:- ', req.body);
    } catch (error) {
        console.log('error:- ', error);
    }
}

const logIn = (req, res) => {
    try {
        console.log('this is a logIn function');
        console.log('req.body:- ', req.body);
    } catch (error) {
        console.log('error:- ', error);
    }
}

module.exports = { signUp, logIn };