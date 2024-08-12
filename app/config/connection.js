const { default: mongoose } = require("mongoose");

async function newConnection() {
    const output = await mongoose.connect('');
    return output;
};

module.exports = { newConnection };