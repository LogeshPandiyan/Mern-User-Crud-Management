const express = require('express');
require('dotenv').config(); 
const cors = require('cors');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');

const PORT = process.env.PORT || 3000;

const app = express();

// Database connection
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('<p>Welcome User Management TAMIL!</p>');
});

app.use('/api/users', userRoutes)

// Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});