const express = require('express');
const dotenv = require('dotenv');
const db = require('./config/db');

dotenv.config({path: './config/config.env'});

//Database connection

db();

// Init Express

const app = express()

// PORT Number

const PORT = process.env.PORT || 5000


// Routes

app.use('/api/alphabets', require('./routes/api/alphabet'))




// Listen on PORT


app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))