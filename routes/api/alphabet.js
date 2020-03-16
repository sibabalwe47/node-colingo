const express = require('express')
const router = express.Router();
const Alphabets = require('../../models/Alphabets')


router.get('/', async (req, res) => {
    try {
        const alphabets = await Alphabets.find().sort({alphabet: 1});

        if(!alphabets) return res.status(400).json({
            msg: 'Alphabets are not loaded'
        });

        res.json(alphabets)

    } catch (error) {
        res.status(500).send('Server Error')
    }
})



module.exports = router