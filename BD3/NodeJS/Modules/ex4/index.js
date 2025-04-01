const readlineSync = require('readline-sync');

let produits = [];

function ajouterProduit() {
    const nom = readlineSync.question('Entrez le nom du produit : ');
    const prix = parseFloat(readlineSync.question('Entrez le prix du produit : '));
    const quantite = parseInt(readlineSync.question('Entrez la quantite en stock : '));

    produits.push({ nom, prix, quantite });
    console.log('Produit ajoute avec succes!\n');
}

function supprimerProduit() {
    const nom = readlineSync.question('Entrez le nom du produit a supprimer : ');
    const index = produits.findIndex(p => p.nom.toLowerCase() === nom.toLowerCase());
    
    if (index !== -1) {
        produits.splice(index, 1);
        console.log('Produit supprime avec succes!\n');
    } else {
        console.log('Produit non trouve.\n');
    }
}

function mettreAJourProduit() {
    const nom = readlineSync.question('Entrez le nom du produit a mettre a jour : ');
    const produit = produits.find(p => p.nom.toLowerCase() === nom.toLowerCase());
    
    if (produit) {
        const choix = readlineSync.question('Que voulez-vous mettre a jour ? (1: Prix, 2: Quantite) : ');
        
        if (choix === '1') {
            produit.prix = parseFloat(readlineSync.question('Entrez le nouveau prix : '));
            console.log('Prix mis a jour avec succes!\n');
        } else if (choix === '2') {
            produit.quantite = parseInt(readlineSync.question('Entrez la nouvelle quantite : '));
            console.log('Quantite mise a jour avec succes!\n');
        } else {
            console.log('Choix invalide.\n');
        }
    } else {
        console.log('Produit non trouve.\n');
    }
}

function afficherProduits() {
    if (produits.length === 0) {
        console.log('Aucun produit en stock.\n');
        return;
    }
    
    console.log('\nListe des produits :');
    console.log('-------------------');
    produits.forEach(p => {
        console.log(`Nom: ${p.nom}`);
        console.log(`Prix: ${p.prix}€`);
        console.log(`Quantite: ${p.quantite}`);
        console.log('-------------------');
    });
    console.log();
}

function menuPrincipal() {
    while (true) {
        console.log('Menu:');
        console.log('1. Ajouter un produit');
        console.log('2. Supprimer un produit');
        console.log('3. Mettre a jour un produit');
        console.log('4. Afficher tous les produits');
        console.log('5. Quitter');
        
        const choix = readlineSync.question('Choisissez une option (1-5) : ');
        
        switch (choix) {
            case '1':
                ajouterProduit();
                break;
            case '2':
                supprimerProduit();
                break;
            case '3':
                mettreAJourProduit();
                break;
            case '4':
                afficherProduits();
                break;
            case '5':
                console.log('Au revoir!');
                process.exit(0);
            default:
                console.log('Option invalide.\n');
        }
    }
}

console.log('Bienvenue dans le gestionnaire de produits!\n');
menuPrincipal();
