const express = require('express');
const dotenv = require('dotenv');
const app = express();


dotenv.config({path:'./config.env'})

const port = process.env.PORT

app.use(express.json());
app.use(require('./router/routing'));

// app.get('/', (req,res)=>{
//     res.send("Hello World");
// });

app.get('/about', (req,res)=>{
    res.send("Hello About");
});

app.get('/contact', (req,res)=>{
    res.send("Hello Contact");
});

app.get('/login', (req,res)=>{
    res.send("Hello Login");
});

app.get('/register', (req,res)=>{
    res.send("Hello Register");
});

app.listen(port, () => {
    console.log(`Listening at port ${port}`);
})