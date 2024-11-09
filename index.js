const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Enable CORS for all origins
app.use(cors());

// Parse JSON request bodies
app.use(bodyParser.json());

// Define a simple route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Handle the survey form submission
app.post('/submit', (req, res) => {
    const { favoriteColor, favoriteFood } = req.body;

    if (!favoriteColor || !favoriteFood) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    // Log the data (for now)
    console.log('Favorite Color:', favoriteColor);
    console.log('Favorite Food:', favoriteFood);

    // Respond with a success message
    res.status(200).json({ message: 'Survey submitted successfully' });
});

// Error handler for unhandled errors
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
