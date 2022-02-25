if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')

connectDB()

const app = express();

// middleware
app.use(cors({ origin: '*', credentials: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routes
app.use('/api/athletes', require('./routes/athletes'));
app.use('/api/forms', require('./routes/forms'));

app.use(errorHandler)

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));