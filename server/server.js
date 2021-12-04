const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());

const createRouter = require('./helpers/create_router');

app.listen(5000);