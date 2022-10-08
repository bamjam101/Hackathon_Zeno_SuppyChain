const express = require('express');
const methodOverride = require('method-override')
const app = express();
const path = require('path');
const Joi = require('joi');  
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

// mongoose.connect('mongodb://localhost:27017/auctionSystem')
//     .then(() => {
//         console.log("Mongo CONNECTION OPEN");
//     })
//     .catch((err) => {
//         console.log(`error ${err}`);
//     })

//To parse form data in POST request body:
app.use(express.urlencoded({ extended: true }))

// To parse incoming JSON in POST request body:
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))
app.use(methodOverride('_method'))
app.set('views', path.join(__dirname, 'views'))

// app.use(session({
//     secret: 'notagoodsecret',
//     resave: false,
//     saveUninitialized: true
// }))

// app.use(cookieParser('asecret'))        // to use signing we use the secret inside the cookieParser

app.set('view engine', 'ejs')





app.use("/", (req, res) => {
    res.render('index');
})




// To start the server 
app.listen(5000, () => {
    console.log("LISTENING ON PORT 5000")
})

// To handle all the remaining path errors
app.all('*', (req, res, next) => {
    
    next(new ExpressError('Page not found', 404));
})

app.use((err, req, res, next) => {
    const {statusCode = 500, message = 'Something went wrong'}  = err;
    res.status(statusCode).send(message);
    // res.send("Something went wrong :(");
})
