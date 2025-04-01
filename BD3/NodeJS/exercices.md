# Exercices
## Modules
### Exercice 1 - création d'un module ES6 simple
Développez un module ES6 permettant de calculer la somme des éléments d'un tableau numérique.
1. Implémentez une fonction nommée sumArray qui :
- Prend en paramètre un tableau arr contenant des nombres.
- Itère sur les éléments du tableau afin de calculer la somme totale.
- Retourne la somme totale ou 0 si le tableau est vide.
2. La fonction sera testée à l'aide d'un second fichier utilisant iport pour vérifier son bon fonctionnement.
### Exercice 2 - création d'un projet ES6
Initialisez le projet NPM avec :  
```sh
npm init
```
Démarrez le serveur avec :  
```sh
node index.js
```
  
Lecture et affichage d'un fichier HTML via un serveur NodeJS.  
Créer un serveur HTTP en NodeJS qui lit et renvoie le contenu d'un fichier HTML index.html lorsqu'un client en fait la requête.  
1. Utiliser le module http pour créer un serveur.
2. Lire le fichier index.html à l'aide du module fs.
3. Utiliser fs.readFileSync pour lire le fichier.
4. Lancer le serveur sur le port 4000 et afficher un message dans la console indiquant l'IRL d'accès.
### Exercice 3 - lancement d'un projet avec nodemon
Pour actualiser le serveur lors d'une modification, il est nécessaire d'utiliser **nodemon**.  
Installez nodemon avec :
```sh
npm install nodemon
```
Et rajoutez dans package.json le lancement du projet avec nodemon :
```json
"scripts": {
"test": "echo \"Error: no test specified\" && exit 1",
"start": "nodemon index.js"
},
```
### Exercice 4 - Gestion CRUD
Installez :
```sh
npm install
```
## Routing
### Exercice 1 : Routes paramètre dynamique
Dans server.js, gèrer deux routes :
GET / → renvoie “Page d’accueil”.
GET /user/:id → renvoie “Bonjour user id: (id saisi)”.
Toute autre route → renvoie “404 Not Found”.
### Exercice 2 : Création d'un serveur avec Express.js
Créer un serveur Node.js en utilisant le framework Express.js.
Objectifs :
1. Initialiser un serveur Express écoutant sur le port 3000.
2. Implémenter un middleware pour afficher dans la console les requêtes reçues
(méthode + URL).
3. Créer différentes routes :
1. / : Affiche le message "Bienvenue sur notre serveur Express !"
2. /utilisateur/:nom : Affiche un message personnalisé contenant le nom passé en
paramètre (/utilisateur/John -> "Bonjour, John !").
4. Gérer les erreurs 404 en envoyant un message "Désolé, contenu introuvable !".
5. Démarrer le serveur et afficher "Serveur démarré sur le port 3000" dans la console.
### Exercice 3 : Création d’une API REST avec Express
Objectif :
• Utiliser Express pour gérer des routes API.
• Implémenter les routes suivantes pour une liste de produits :
o GET /produits → renvoie tous les produits.
o GET /produits /:id → renvoie un produit par son id.
o POST /produits → ajoute un produit (données envoyées en JSON).
o PUT /produits/:id → met à jour un produit existant.
o DELETE /produits/:id → supprime un produit.
Instructions :
1. Installez Express avec npm install express.
2. Créez un fichier server.js et implémentez les routes.
3. Démarrez le serveur sur le port 4000.
4. Testez avec Postman ou cURL.