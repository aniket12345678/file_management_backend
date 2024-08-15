const { model } = require("mongoose");
const { userSchema } = require("./user.model");
const { fileManagerSchema } = require("./fileManager.model");

const UserModel = model('tbl_user', userSchema, 'tbl_user');
const FileManagerModel = model('tbl_file_manager', fileManagerSchema, 'tbl_file_manager');

module.exports = { UserModel, FileManagerModel };