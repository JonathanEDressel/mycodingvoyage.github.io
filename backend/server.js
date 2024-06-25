require('dotenv').config();

var PORT = process.env.PORT;
var URI = process.env.MONGO_URI;

const express = require('express');
const mongoose = require('mongoose');
const stockRoutes = require('./routes/stocks');
const app = express();

//middleware
app.use(express.json()); //checks if there is data attached to the request

app.use(function(req, res, next) {
    console.log(req.path, req.method);
    next();
});

// routes
app.use('/api/stocks', stockRoutes);

//connect to db
mongoose.connect(URI).then(function() {
    console.log('conected to database');
        // * wait until we've connected to the db before taking in requests
        // * nodemon server.js || npm run dev
        // * listen for requests
        app.listen(PORT, function() {
            console.log('listening on port', PORT);
        });
    }).catch(function (error) {
        console.log('DB Error:', error)
    });