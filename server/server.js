const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const createRouter = require('./helpers/create_router');
const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017', {useUnifiedTopology:true})
    .then((client) => {})
    .catch(console.error);

app.listen(5000);