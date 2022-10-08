const express = require('express');
const methodOverride = require('method-override')
const app = express();
const path = require('path');
const Joi = require('joi');     // DONE: Do the Joi checking 
const bcrypt = require('bcrypt');
const session = require('express-session')
const cookieParser = require('cookie-parser');

//Database imports
const mongoose = require('mongoose');
const Product = require('./models/products');
const User = require('./models/user');

const wrapAsync = require('./utils/wrapAsync');
const ExpressError = require('./utils/ExpressError');
const { productSchema, userSchema } = require('./schemas.js');

mongoose.connect('mongodb://localhost:27017/auctionSystem')
    .then(() => {
        console.log("Mongo CONNECTION OPEN");
    })
    .catch((err) => {
        console.log(`error ${err}`);
    })

//To parse form data in POST request body:
app.use(express.urlencoded({ extended: true }))

// To parse incoming JSON in POST request body:
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))
app.use(methodOverride('_method'))
app.set('views', path.join(__dirname, 'views'))

app.use(session({
    secret: 'notagoodsecret',
    resave: false,
    saveUninitialized: true
}))
