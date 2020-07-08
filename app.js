const express = require('express');
const path = require('path');

/* App config */
const app = express();
const port = process.env.port || 5000;

/* Views config */
app.set('views',path.join(__dirname,'app_server','views'));
app.set('view engine','ejs');

/* Routes */
const routes = require('./app_server/routes/index');
app.use('/',routes);

const login = require('./app_server/routes/login');
app.use('/login',login);

const cart = require('./app_server/routes/cart');
app.use('/cart',cart);



/* Static Files */
app.use(express.static(path.join(__dirname,'public')));

/* Run app */
app.listen(port,()=>{
    console.log(`Server running at localhost:${port}`);
});