const { Schema } = require("mongoose");

const userSchema = new Schema({
    parent_id: {
        type: Number,
        required: true
    },
    media_type: {
        type: String,
        required: true
    },
    media_name: {
        type: String,
        required: true
    },
    is_deleted: {
        type: String,
        required: true
    }
});

module.exports = { userSchema };