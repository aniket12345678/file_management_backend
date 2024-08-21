const { UserModel } = require("../models/index.model");
const bcrypt = require('bcrypt');

const signUp = async (req, res) => {
    try {
        const store = req.body;
        const checkUser = await UserModel.find({ user_email: store.user_email });
        if (checkUser) {
            return res.status(200).send({
                message: 'User already exists',
                code: 200
            });
        } else {
            const salt = bcrypt.genSaltSync(10);
            store.user_password = bcrypt.hashSync(store.user_password, salt);
            await UserModel.create(store);
            return res.status(200).send({
                message: 'User created successfully',
                code: 200
            });
        }
    } catch (error) {
        console.log('error:- ', error);
        return res.status(200).send({
            message: 'signUp -> error',
            code: 200
        });
    }
}

const logIn = async (req, res) => {
    try {
        const store = req.body;
        const userExists = await UserModel.find({ user_email: store.user_email });
        if (userExists) {
            const checkPassword = bcrypt.compareSync(store.user_password, userExists.user_password);
            if (checkPassword) {
                return res.status(200).send({
                    message: 'Logged in successfully',
                    code: 200
                });
            } else {
                return res.status(200).send({
                    message: 'Password is wrong',
                    code: 200
                });
            }
        }
        else {
            return res.status(200).send({
                message: 'User does not exists',
                code: 200
            });
        }
    } catch (error) {
        console.log('error:- ', error);
        return res.status(200).send({
            message: 'signUp -> error',
            code: 200
        });
    }
}

module.exports = { signUp, logIn };