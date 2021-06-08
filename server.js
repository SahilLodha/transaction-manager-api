// dotenv to read configuration file ...
const dotenv = require('dotenv')
dotenv.config({path: './config.env'})

// Connection with MongoDB
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/expense-manager', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(
    ()=>console.log("Connected to Database...")
);

// App
const app = require('./app')
const PORT = process.env.port;

app.listen(PORT, ()=>{
    console.log(`Application is running on port ${PORT}`);
})
