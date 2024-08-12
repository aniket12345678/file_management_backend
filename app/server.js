const express = require('express');
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send({ message: 'Welcome to file explorer' });
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});