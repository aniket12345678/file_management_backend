const { model } = require("mongoose");
const { userSchema } = require("./user.model");
const { fileManagerSchema } = require("./fileManager.model");
const { userDetailsSchema } = require("./userDetails.model");

const UserModel = model('tbl_user', userSchema, 'tbl_user');
const UserDetailsModel = model('tbl_user_details', userDetailsSchema, 'tbl_user_details');
const FileManagerModel = model('tbl_file_manager', fileManagerSchema, 'tbl_file_manager');

module.exports = { UserModel, FileManagerModel, UserDetailsModel };