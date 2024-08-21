const { Schema } = require("mongoose");

const userDetailsSchema = new Schema({
    user_name: {
        type: String,
        required: true
    },
    user_address: {
        type: String,
        required: true
    },
    user_img: {
        type: String,
        required: true
    }
});

module.exports = { userDetailsSchema };