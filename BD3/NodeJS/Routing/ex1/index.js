const express = require('express');

const app = express();
const port = 4000;

app.get('/', (req, res) => {
    res.send('Page d’accueil');
});

app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`Bonjour user id: ${userId}`);
});

app.use((req, res) => {
    res.status(404).send('404 Not Found');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});