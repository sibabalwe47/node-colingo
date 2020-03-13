const express = require('express');
const dotenv = require('dotenv')

dotenv.config({path: './config/config.env'})

const app = express()

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send('GET ROUTE')
})

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))