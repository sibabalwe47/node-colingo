const express = require('express')
const router = express();
const Words = require('../../models/Word')
const { check, validationResult } = require('express-validator')

// GET single word

router.get('/:alphabet', async (req, res) => {
    const alphabet = req.params.alphabet.toUpperCase();

    try {
        const words = await Words.find({ alphabet })

        if (!words) return res.status(400).json({
            success: false,
            msg: 'No words added'
        });

        res.json(words)

    } catch (error) {
        console.log(error)
        res.status(500).send('Server Error')
    }

    res.send(alphabet)
});


// GET all words

router.get('/', async (req, res) => {
    try {
        const words = await Words.find()

        if (!words) return res.status(400).json({
            success: false,
            msg: 'No words added'
        })

        res.json(words)

    } catch (error) {
        console.log(error)
        res.status(500).send('Server Error')
    }
});

// ADD word

router.post('/add', [
    check('word', 'Entry is required').not().isEmpty(),
    //check('wordTranslated', 'Entry is required').not().isEmpty(),
    check('definition').not().isEmpty()
], async (req, res) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() })

    const {
        word,
        wordTranslated,
        definition
    } = req.body

    const newWord = {}

    if (word) newWord.word = word;
    if (wordTranslated) newWord.wordTranslated = wordTranslated;
    if (definition) newWord.definition = definition;
    if (wordTranslated) newWord.translated = true;

    try {

        let singleWord = await Words.findOne({ word });

        if (singleWord) {
            return res.status(400).json({ msg: 'This word already exists' });
        } else {
            // singleWord = new Words({
            //     alphabet: word[0].toUpperCase(),
            //     word,
            //     wordTranslated,
            //     definition,
            //     translated: false
            // })

            singleWord = new Words(newWord)

            await singleWord.save()

            // singleWord = new Words();

            // await Words.save()

            // res.json(singleWord)
            // console.log(2)
            res.json(singleWord)

        }

    } catch (error) {
        console.log(error)
    }
})


module.exports = router;