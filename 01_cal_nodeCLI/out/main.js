#! /usr/bin/env node
import inquirer from "inquirer";
import { Add } from "./calculate.js";
import { Subtract } from "./calculate.js";
import { Multiply } from "./calculate.js";
import { Divide } from "./calculate.js";
async function Calculation1() {
    const answers = await inquirer.prompt([
        //create objects
        {
            type: "list",
            name: "operator",
            message: "Which opration you want to perform ",
            choices: ["Addition", "Subtraction", "Multiplication", "Dividison"]
        },
        {
            type: "number",
            name: "num1",
            message: "Enter First Number :"
        },
        {
            type: "number",
            name: "num2",
            message: "Enter Second Number :"
        }
    ])
        .then((answers) => {
        const { num1, num2, operator } = answers;
        if (num1 && num2 && operator) {
            if (answers.operator == "Addition") {
                const calculateResult = Add(answers.num1, answers.num2);
                console.log(`Answer is  ${calculateResult}`);
            }
            else if (answers.operator == "Subtraction") {
                const calculateResult = Subtract(answers.num1, answers.num2);
                console.log(`Answer is : ${calculateResult}`);
            }
            else if (answers.operator === "Multiplication") {
                const calculateResult = Multiply(answers.num1, answers.num2);
                console.log(`Answer is  ${calculateResult}`);
            }
            else if (answers.operator === "Dividison") {
                const calculateResult = Divide(answers.num1, answers.num2);
                console.log(`Answer is  ${calculateResult}`);
            }
            else {
                console.log(`Not valid input , Enter number`);
            }
        }
    });
}
async function startAgain() {
    do {
        await Calculation1();
        var again = await inquirer.prompt({
            type: "input",
            name: "restart",
            message: "\n Do you want to Continue, Press Y \n"
        });
    } while (again.restart == `y` || again.restart == 'yes' || again.restart == `Y` || again.restart == `YES`);
}
startAgain();
