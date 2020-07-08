const express = require('express');

const cart = express.Router();

cart.get('/',(req,res)=>{
    res.send('<h1>OK</h1>')
});

module.exports = cart;