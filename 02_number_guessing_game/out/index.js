#! /usr/bin/env node
console.log("Number Guessing Game");
import inquirer from "inquirer";
import chalk from "chalk";
//generating random number from system
const randomNumber = Math.floor((Math.random() * 10) + 1);
console.log(`random number `, randomNumber);
//fix the counter
let remainingChances = 4;
//user input must be number
function validateUserNumber(input1) {
    const number1 = parseFloat(input1);
    if (isNaN(number1)) {
        return "Enter a valid number between 1 to 10 ";
    }
    if (number1 < 0 || number1 > 10) {
        return "Guess a number between 1 to 10 ";
    }
    return true;
}
//user input with functionality
async function askGuess() {
    inquirer.prompt([{
            type: "input",
            name: "guess",
            message: "Guess a number between 1 to 10 : ",
            validate: validateUserNumber, // call function 
        }])
        .then((answers) => {
        const gussedNumber = parseInt(answers.guess);
        if (gussedNumber === randomNumber) {
            console.log(chalk.bgGreen.yellow(`Congratulation! Your guessed the number ${randomNumber} correctly !`));
            process.exit(0);
        }
        else if (gussedNumber < randomNumber) {
            remainingChances--;
            console.log(chalk.bgRed.white(`Too Low, Guess again remaining chance left ${remainingChances}`));
            if (remainingChances == 0) {
                console.log(chalk.green.bgRed(`SORRY! You have missed all your chances correct number is ${remainingChances}`));
                process.exit(0);
            }
            else {
                askGuess();
            }
        }
        else if (gussedNumber > randomNumber) {
            remainingChances--;
            console.log(chalk.bgRed.white(`Too Hight, Guess again remaining chance left ${remainingChances}`));
            if (remainingChances == 0) {
                console.log(chalk.green.bgRed(`SORRY! You have missed all your chances correct number is ${remainingChances}`));
                process.exit(0);
            }
            else {
                askGuess();
            }
        }
    }); // then
} // askGuess
askGuess();
