import { sumArray } from './ex1_modules.js';

let TestArrayForSumArrayModule = [69, 78, 23, 45];

console.log(`Testing sumArray module with array: ${TestArrayForSumArrayModule}`);
let result;
let expectedResult = 215; // 69 + 78 + 23 + 45 = 215

try {
    result = sumArray(TestArrayForSumArrayModule);
    console.log("sumArray test module passed");
    console.log("Expected: ", expectedResult);
    console.log("Received: ", result);
} catch (error) {
    console.error("sumArray test module failed: ", error.message);
    console.log("Expected: ", expectedResult);
    console.log("Received: ", result);
}