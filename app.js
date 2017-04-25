'use strict';

// pull in required modules and routes
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes/');
const cors = require('cors')

const app = express();

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

// establishes root and uses routes
app.use('/api', routes)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// this will handle errors as we test and develop
if (app.get('env') === 'development' || app.get('env') === 'test') {
  app.use((err, req, res, next) => {
    console.log('ERROR! : ', err);
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err

    })
  })
}


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port} in env: ${process.env.NODE_ENV}`);
});


// export app for testing env
module.exports = app;
