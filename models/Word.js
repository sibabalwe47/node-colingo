const mongoose = require('mongoose')


const WordSchema = new mongoose.Schema({
    alphabet: {
        type: String,
   },

    // English 

    word: {
        type: String
    },

    // Translated into Second Language
    wordTranslated: {
        type: String
    },

    // Definition of translated word
    definition: {
        type: String
    },
    translated: {
        type: Boolean
    }
    // similar: []
});


module.exports = mongoose.model('Words', WordSchema)