const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log(`Requête reçue : ${req.method} ${req.url}`);
    next();
});

app.get('/', (req, res) => {
    res.send('Bienvenue sur notre serveur Express !');
});

app.get('/utilisateur/:nom', (req, res) => {
    const nom = req.params.nom;
    res.send(`Bonjour, ${nom} !`);
});

app.use((req, res) => {
    res.status(404).send('Désolé, contenu introuvable !');
});

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});