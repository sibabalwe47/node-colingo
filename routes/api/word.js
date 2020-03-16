const express = require('express')
const router = express();
const Words = require('../../models/Word')

router.get('/:alphabet', async (req, res) => {
    const alphabet = req.params.alphabet.toUpperCase();

    try {
        const words= await Words.find({ alphabet })

        if(!words) return res.status(400).json({
            success: false,
            msg: 'No words added'
        });

        res.json(words)

    } catch (error) {
        console.log(error)
        res.status(500).send('Server Error')
    }

    res.send(alphabet)
})



module.exports = router;