const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({path:'./config.env'});

dbpath = process.env.DATABASE;

mongoose.connect(dbpath,{

}).then(()=>{
    console.log('Database connection established');
}).catch((err)=>{
    console.log(err);
})