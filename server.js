const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bodyParser = require('body-parser');

// Create express app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'news_app',
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL!');
});

// Register Route
app.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
  db.query(query, [name, email, hashedPassword], (err, result) => {
    if (err) return res.status(500).json({ error: 'Database error' });

    res.status(200).json({ message: 'User registered successfully' });
  });
});


// Login Route
// Login Route
app.post('/login', (req, res) => {
    const { email, password } = req.body;
  
    const query = 'SELECT * FROM users WHERE email = ?';
    db.query(query, [email], async (err, result) => {
      if (err || result.length === 0) {
        return res.status(400).json({ error: 'User not found' });
      }
  
      const user = result[0];
      const isValidPassword = await bcrypt.compare(password, user.password);
  
      if (!isValidPassword) {
        return res.status(400).json({ error: 'Invalid password' });
      }
  
      // Generate JWT token and return username
      const token = jwt.sign({ id: user.id, email: user.email }, 'your_secret_key', {
        expiresIn: '1h',
      });
  
      res.status(200).json({ token, userName: user.name }); // Include username in response
    });
  });
  


// Feedback Route (Requires Authentication)
// Feedback Route (Requires Authentication)
app.post('/feedback', (req, res) => {
  const { name, email, message } = req.body;

  // Validation
  if (!name || !email || !message) {
      return res.status(400).json({ error: 'Please provide all required fields.' });
  }

  try {
      // SQL query to insert feedback
      const query = 'INSERT INTO feedback (name, email, message) VALUES (?, ?, ?)';
      db.query(query, [name, email, message], (err, result) => {
          if (err) {
              console.error('Database error:', err);
              return res.status(500).json({ error: 'Failed to submit feedback.' });
          }

          res.status(200).json({ message: 'Feedback submitted successfully.' });
      });
  } catch (err) {
      console.error('Error:', err);
      res.status(500).json({ error: 'An unexpected error occurred.' });
  }
});

// Start the server
app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
