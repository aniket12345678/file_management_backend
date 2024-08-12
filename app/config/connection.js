const { default: mongoose } = require("mongoose");

async function newConnection() {
    const output = await mongoose.connect(process.env.CONNECTION_STRING);
    return output;
};

module.exports = { newConnection };