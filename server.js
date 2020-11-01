require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const quizRoutes = require('./routes/quizzes');
const path = require('path');
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI || process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.once('connected', () => console.log('MongoDB connected'));
db.on('error', error => console.error(error));

app.use(morgan('tiny'));
app.use(express.json());
app.use('/quizzes', quizRoutes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(PORT, () => console.log(`Server up and running on port ${PORT} !`));
