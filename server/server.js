if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

// connect with MongoDB
mongoose.connect(process.env.MONGO_URI);
const db = mongoose.connection;
db.on('error', error => console.error(error));
db.once('open', () => console.log('Connected to MongoDB...'));

// use route
app.use(require('./routes/index'));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));