const mongoose = require('mongoose')


const AlphabetSchema = new mongoose.Schema({
    alphabet: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now()
    }
});



module.exports = mongoose.model('Alphabet', AlphabetSchema)