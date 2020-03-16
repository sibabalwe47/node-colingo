// Modules

const mongoose = require('mongoose');
const dotenv = require('dotenv')
const fs = require('fs')

// Config file

dotenv.config({path: './config/config.env'})

// Load Models

const Alphabets = require('./models/Alphabets')

// Files

const alphabets = JSON.parse(
    fs.readFileSync(`${__dirname}/data/alphabets.json`, 'utf-8')
  );

// Connect to Database

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  });
  

const importData = async () => {
    try {

        await Alphabets.create(alphabets);


        console.log('Data imported')
        process.exit()
    } catch (error) {
        console.log(error)
    }
}

const deleteData = async () => {
    try {
      await Alphabets.deleteMany();
     
      console.log('Data Destroyed...');
      process.exit();
    } catch (err) {
      console.error(err);
    }
  };
  

if (process.argv[2] === '-i') {
    importData();
  } else if (process.argv[2] === '-d') {
    deleteData();
  }
