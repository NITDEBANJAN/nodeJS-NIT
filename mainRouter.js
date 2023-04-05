const express = require('express');
var cors = require('cors');

const mainController = require('./maincontroller.js');
var bodyParser = require('body-parser');

const router = express.Router();
var app = express();

app.use(cors());

router.get('/getEmpDetails',mainController.getEmpDetails);

module.exports = router;