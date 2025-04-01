# Exercices
## Exercice 1 - création d'un module ES6 simple
Développez un module ES6 permettant de calculer la somme des éléments d'un tableau numérique.
1. Implémentez une fonction nommée sumArray qui :
- Prend en paramètre un tableau arr contenant des nombres.
- Itère sur les éléments du tableau afin de calculer la somme totale.
- Retourne la somme totale ou 0 si le tableau est vide.
2. La fonction sera testée à l'aide d'un second fichier utilisant iport pour vérifier son bon fonctionnement.
## Exercice 2 - création d'un projet ES6
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
## Exercice 3 - lancement d'un projet avec nodemon
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