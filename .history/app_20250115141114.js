import express from 'express';
const app = express();
const port = process.env.PORT || 3000;


// Serve static files from the root directory
app.use(express.static(public));

// Serve index.html for the root route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});