// Basic Lib Import
const express = require('express');
const router = require('./src/routes/api');

const app = new express(); // Create express object
const bodyParser = require('body-parser');

// Security Middleware Lib Import
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');

// Database Lib Import
const mongoose = require('mongoose');

// Security Middleware Implement

const corsOptions = {
    credentials: true,
    origin: ['https://food-crud-eight.vercel.app'], // Whitelist the domains you want to allow
    methods: ['GET','POST','HEAD','PUT','PATCH','DELETE'],
    allowedHeaders: ['Content-Type'],
    exposedHeaders: ['Content-Type']
};

app.use(cors(corsOptions));
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());

// Body Parser Implement
app.use(bodyParser.json());

// Request Rate Limit
const limiter = rateLimit({windowMs:15*60*1000,max:3000});
app.use(limiter);

// Mongo DB Connection
let URI = "mongodb+srv://monzurmorshedcse:GIbq7VXAzvT3CYJ3@cluster0.mhpu0na.mongodb.net/Item";
let OPTION = {
    user:'',
    pass:'',
    autoIndex:true
};

mongoose.connect(URI, OPTION).then(
    () => { console.log('Connection established successfully.'); },
    err => { console.log('Something went wrong.', err); }
  );

// Routing Implement
app.use('/api/v1',router);

// Undefined Route
app.use('*',(req,res) => {
    res.status(404).json({
        status: 'fail',
        data:'not found'
    })
})

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});


module.exports = app ;