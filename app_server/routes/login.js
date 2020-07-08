const express = require('express');
const login = express.Router();

login.get('/',(req,res)=>{
    res.sendFile('C:\\Users\\Usuario\\nodeProjects\\practica\\app_server\\views\\login.html');
});

login.get('/crear',(req,res)=>{
    res.sendFile('C:\\Users\\Usuario\\nodeProjects\\practica\\app_server\\views\\loginCrear.html');
});

module.exports = login;
