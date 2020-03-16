const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config({path: './config.env'})

const conn = async () => {
    const db = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    });

    console.log('DB connected')
}


module.exports = conn;