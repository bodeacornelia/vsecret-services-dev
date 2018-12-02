const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

const app = express();
dotenv.config();

const port = process.env.PORT 

app.use(cors({
  origin: process.env.CLIENT_URL,
  optionsSuccessStatus: 200,
}));

app.listen(port);
console.log('VClothes RESTful API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const modules = require('../modules');
modules.init(app);
