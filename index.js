require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Routes
const moodRoutes = require('./routes/moodRoutes');
app.use('/api/mood', moodRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the MindMentor+ Pro Backend API');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
