const express = require('express');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Basic route to test the server
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
