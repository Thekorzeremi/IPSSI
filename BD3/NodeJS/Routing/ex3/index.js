const express = require('express');
const app = express();

app.use(express.json());

let produits = [
    { id: 1, nom: 'Produit 1', prix: 10 },
    { id: 2, nom: 'Produit 2', prix: 20 },
    { id: 3, nom: 'Produit 3', prix: 30 },
];

app.get('/produits', (req, res) => {
    res.json(produits);
});

app.get('/produits/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const produit = produits.find(p => p.id === id);
    if (produit) {
        res.json(produit);
    } else {
        res.status(404).send('Produit non trouvé');
    }
});

app.post('/produits', (req, res) => {
    const nouveauProduit = req.body;
    nouveauProduit.id = produits.length ? produits[produits.length - 1].id + 1 : 1;
    produits.push(nouveauProduit);
    res.status(201).json(nouveauProduit);
});

app.put('/produits/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = produits.findIndex(p => p.id === id);
    if (index !== -1) {
        produits[index] = { ...produits[index], ...req.body };
        res.json(produits[index]);
    } else {
        res.status(404).send('Produit non trouvé');
    }
});

app.delete('/produits/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = produits.findIndex(p => p.id === id);
    if (index !== -1) {
        const produitSupprime = produits.splice(index, 1);
        res.json(produitSupprime);
    } else {
        res.status(404).send('Produit non trouvé');
    }
});

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});