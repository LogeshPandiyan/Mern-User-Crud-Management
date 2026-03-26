const express = require('express');
require('dotenv').config(); 
const cors = require('cors');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');

const PORT = process.env.PORT || 5001;

const app = express();

// Database connection
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>User Management</title>
      </head>
      <body>
        <p>Welcome User Management</p>
      </body>
    </html>
  `);
});

app.use('/api/v1/users', userRoutes)

// Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});