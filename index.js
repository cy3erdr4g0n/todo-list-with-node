const express = require('express');
const app = express();
require('dotenv').config();
const ejs = require('ejs');
app.set('view engine', 'ejs');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
const userRouter = require('./routes/users.route')
const mongoose = require('mongoose')
const PORT = process.env.PORT;
const URI = process.env.MONGO_URL;

app.use('/user',userRouter)

app.get('/',(req,res)=>{
    res.render('land')
})


mongoose.connect(URI, {useNewUrlParser: true,useUnifiedTopology: true}).then(()=>{
    console.log("mongodb is connected");
}).catch((error)=>{
    console.log("mondb not connected");
});



app.listen(PORT,(req,res)=>{
    console.log(`app is listen on PORT : ${PORT}`)
})