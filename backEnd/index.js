const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const userRoute = require('./routes/user')
const authRoute = require('./routes/auth')
const postRoute = require('./routes/post')

dotenv.config()

// { useNewUrlParser: true, useUnifiedTopology:true },

mongoose.connect(process.env.MONGO_URL, 
    ()=> {
    console.log("Connected To MongoDB");
})


app.use(express.json());
app.use(helmet());
app.use(morgan('common'));

app.use("/", userRoute);
app.use("/auth", authRoute);
app.use("/post", postRoute)

app.listen(4000,()=>{
    console.log("backend server is running");
})


