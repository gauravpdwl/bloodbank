const mongoose=require('mongoose');

mongoose.connect('mongodb://0.0.0.0:27017/bloodbankdb');

// aquire the connection to db
const db=mongoose.connection;

db.on('error', console.error.bind(console, 'Error connecting to db'));

db.once('open', function(){
    console.log("Successfully connected to database");
});
