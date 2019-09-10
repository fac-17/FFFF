const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const exphbs = require('express-handlebars');
require('dotenv').config();
   
const app = express();

app.set('port', process.env.PORT || 3000);

module.exports = app;

