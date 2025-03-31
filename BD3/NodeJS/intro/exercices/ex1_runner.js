import { sumArray } from './ex1_modules.js';

let TestArrayForSumArrayModule = [69, 78, 23, 45];

// Testing sumArray module
console.log(`Testing sumArray module with array: ${TestArrayForSumArrayModule}`);
let result = sumArray(TestArrayForSumArrayModule);
console.log(`Result: ${result}`);