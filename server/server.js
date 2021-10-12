if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
// const router = express.Router();

app.use(cors());
app.use(express.json());

// connect with MongoDB
mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on('error', error => console.error(error));
db.once('open', () => console.log('Connected to Mongoose'));

// use route
app.use(require('./routes/index'));

app.listen(process.env.PORT || 3000);

// export const start = () => {
//   app.listen(PORT, () => {
//     console.log('Listening on port: ${PORT}');
//   });
// }

// export const stop = () => {
//   app.close(PORT, () => {
//     console.log('Shut down on port: ${PORT}');
//   });
// }