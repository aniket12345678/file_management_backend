const { Schema } = require("mongoose");

const fileManagerSchema = new Schema({
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
        default: false
    }
});

module.exports = { fileManagerSchema };