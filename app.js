const express = require('express')
const morgan = require('morgan')

// Creating an Express Application
const app = express();

// For accessing body parameters
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

if(process.env.environment === 'developement'){
    app.use(morgan('tiny'));
}

// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// })

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})

// Route Files ....
// const auth = require('./routes/auth.route');
const transaction = require('./routes/transaction.route')
const category = require('./routes/category.route')

// app.use('/', auth);
app.use('/category', category);
app.use('/transaction', transaction);

module.exports = app