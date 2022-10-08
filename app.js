const express = require('express');
const methodOverride = require('method-override')
const app = express();
const path = require('path');
// const Joi = require('joi');  
// const bcrypt = require('bcrypt');
// const session = require('express-session')
// const cookieParser = require('cookie-parser');

//Database imports
const mongoose = require('mongoose');

// const wrapAsync = require('./utils/wrapAsync');
// const ExpressError = require('./utils/ExpressError');
// const { productSchema, userSchema } = require('./schemas.js');

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
// app.use(express.json())
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


// get routes for all the webpages

app.get("/", (req, res) => {
    const page = {
        title: "Home",
        css: "css/home.css",
        js: "js/home.js"
    }
    res.render('home', { page });
})

app.get("/register", (req, res) => {
    const page = {
        title: "Register",
        css: "css/register.css",
        js: "js/register.js"
    }
    res.render('register', { page });
})

app.get("/login", (req, res) => {
    const page = {
        title: "Login",
        css: "css/login.css",
        js: "js/login.js"
    }
    res.render('login', { page });
})

app.get("/admin", (req, res) => {
    const page = {
        title: "Admin",
        css: "css/admin.css",
        js: "js/admin.js"
    }
    res.render('admin', { page });
})

app.get("/distributor", (req, res) => {
    const page = {
        title: "Distributor",
        css: "css/distributor.css",
        js: "js/distributor.js"
    }
    res.render('distributor', { page });
})

app.get("/tracking", (req, res) => {
    const page = {
        title: "Tracking",
        css: "css/tracking.css",
        js: "js/tracking.js"
    }
    res.render('Tracking', { page });
})

app.get("/main", (req, res) => {
    res.render('MainPage_digiChambers');
})

app.get("/main2", (req, res) => {
    res.render('MainPage_distr');
})

app.get("/menu", (req, res) => {
    res.render('MainPage_manu');
})

app.get("/retail", (req, res) => {
    res.render('MainPage_retail');
})

app.get("/tracking", (req, res) => {
    res.render('Tracking');
})


// To start the server 
app.listen(5000, () => {
    console.log("LISTENING ON PORT 5000")
})

// To handle all the remaining path errors
// app.all('*', (req, res, next) => {
    
//     next(new ExpressError('Page not found', 404));
// })

app.use((err, req, res, next) => {
    const {statusCode = 500, message = 'Something went wrong'}  = err;
    res.status(statusCode).send(message);
    // res.send("Something went wrong :(");
})
