import { diviser } from './function.js';

// console.log("Je commande une pizza");

// setTimeout( function(){
//     console.log("Pizza livrée")
// }, 5000);

// console.log("Je fais autre chose");

function function_somme(a, b){
    return a + b;
};

const const_somme= (a, b) => a + b;

console.log("Function somme : ", function_somme(1,4));
console.log("Constant somme : ", const_somme(1,4));
console.log(`Constant somme bracket : ${const_somme(1,4)}`);

const res = diviser(10, 2);
console.log(`Imported diviser function : ${res}`);