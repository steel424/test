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

app.post('/submit', (req, res) => {
    const { favoriteColor, favoriteFood } = req.body;

    if (!favoriteColor || !favoriteFood) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    // For now, we'll just log the data to the console
    console.log('Favorite Color:', favoriteColor);
    console.log('Favorite Food:', favoriteFood);

    // Respond with a success message
    res.status(200).json({ message: 'Survey submitted successfully' });
});

const cors = require('cors');

// Enable CORS
app.use(cors());
