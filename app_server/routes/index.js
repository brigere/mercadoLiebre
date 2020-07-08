const express = require('express');
const router = express.Router();

const homeCtrl = require('../controllers/home');
const productoCtrl = require('../controllers/productos');

/* GET home page */
router.get('/',homeCtrl.index);

/* /producto/:id */
router.get('/productos/:id',productoCtrl.producto);


/* Exports */
module.exports = router;