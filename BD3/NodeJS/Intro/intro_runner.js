import { diviser } from './intro_module.js';

// console.log("Je commande une pizza");

// setTimeout( function(){
//     console.log("Pizza livrée")
// }, 5000);

// console.log("Je fais autre chose");

function function_somme(a, b){
    return a + b;
};

const const_somme= (a, b) => a + b;

console.log("Function somme(1,4) : ", function_somme(1,4));
console.log("Constant somme(1,5) : ", const_somme(1,5));
console.log(`Constant somme(2,4) bracket : ${const_somme(2,4)}`);

const res = diviser(10, 2);

console.log(`Result of diviser(10,2) function : ${res}`);

console.log("Testing error handling with diviser(10,0) :");
try {
    const res = diviser(10, 0);
    console.log(`This will not appeard ${res}`);
} catch (error) {
    console.error(error.message);
}