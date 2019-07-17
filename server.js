const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

var history = require('connect-history-api-fallback');

var connect = require('connect');

var app = connect()
  .use(history())
  .listen(3000);

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const voyagesRouter = require('./routes/voyages');
const usersRouter = require('./routes/users');
app.use('/voyages', voyagesRouter);
app.use('/api', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});