const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
require('dotenv').config();
//import helpers
const helpers = require('./views/helpers');
const app = express();
const controllers = require('./controllers');
const bodyparser = require('body-parser');
// set up view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine(
    'hbs',
    exphbs({
        extname: 'hbs',
        layoutsDir: path.join(__dirname, 'views', 'layouts'),
        partialsDir: path.join(__dirname, 'views', 'partials'),
        defaultLayout: 'main',
        helpers,
    })
);

app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use(controllers);
module.exports = app;

