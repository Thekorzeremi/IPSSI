import { sumArray } from "./ex1_module.js";
import chalk from 'chalk';

const testArray = [69, 78, 23, 45];
const result = sumArray(testArray);

switch (true) {
    case result <= 0:
        console.log(chalk.red(`Received: ${result}`));
        break;
    case result > 0 && result < 5:
        console.log(chalk.orange(`Received: ${result}`));
        break;
    case result >= 5:
        console.log(chalk.green(`Received: ${result}`));
}
            
