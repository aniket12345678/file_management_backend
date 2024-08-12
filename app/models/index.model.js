const { model } = require("mongoose");
const { userSchema } = require("./user.model");

const UserModel = model('tbl_user', userSchema, 'tbl_user');

module.exports = { UserModel };