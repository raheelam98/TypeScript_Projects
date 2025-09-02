import inquirer from "inquirer";
import chalk from "chalk";
const apiLink = "https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple";
let fetchData = async (data) => {
    let fetchQuiz = await fetch(data);
    let res = await fetchQuiz.json();
    return res.result;
};
let data = await fetchData(apiLink);
let startQuiz = async () => {
    let score = 0;
    // for user name 
    let name = await inquirer.prompt({
        type: "input",
        name: "fname",
        message: "What is your Name?"
    });
    for (let i = 1; i <= 10; i++) {
        let answers = [...data[i].incorrect_answers, data[i].correct_answer];
        let ans = await inquirer.prompt({
            type: "list",
            name: "Quiz",
            message: data[i].question,
            choices: answers.map((val) => val),
        });
        if (ans.Quiz == data[i].correct_answer) {
            ++score;
            console.log(chalk.bold.italic.yellow("Correct"));
        }
        else {
            console.log(`correct answer is ${chalk.bold.italic.redBright("Correct")}`);
        }
    }
    console.log(`Dear ${chalk.green.bold(name.fname)}, your score is ${chalk.blue.bold(score)}out of ${chalk.red.bold('10')}`);
};
startQuiz();
