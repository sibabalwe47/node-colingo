const express = require('express')

const app = express()

const PORT = 5000

app.get('/', (req, res) => {
    res.send('GET ROUTE')
})

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`))