if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// routes
const athletes = require('./routes/api/athletes');

const app = express();

// connect with MongoDB
mongoose.connect(process.env.MONGO_URI);
const db = mongoose.connection;
db.on('error', error => console.error(error));
db.once('open', () => console.log('Connected to MongoDB...'));

// cors
app.use(cors({ origin: '*', credentials: true }));

// Init middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello World! I am Server!'));

// use Routes
app.use('/api/athletes', athletes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));