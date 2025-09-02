import inquirer from "inquirer";
console.log("fetch quiz orignial \n");
const apilink = "https://opentdb.com/api.php?amount=4&category=18&difficulty=medium&type=multiple";
let fetchData = async (data) => {
    let fetchQuiz = await fetch(data);
    let res = await fetchQuiz.json();
    return res;
};
let startQuiz = async () => {
    let score = 0;
    // Get user's name
    let name = await inquirer.prompt([
        {
            type: "input",
            name: "username",
            message: "Enter Name",
        },
    ]);
    let data = await fetchData(apilink);
    for (let i = 0; i < data.results.length; i++) {
        let answers = [
            ...data.results[i].incorrect_answers,
            data.results[i].correct_answer,
        ];
        let useranswer = await inquirer.prompt([
            {
                type: "list",
                name: "quiz",
                message: data.results[i].question,
                choices: answers,
            },
        ]);
        if (useranswer.quiz === data.results[i].correct_answer) {
            score++;
            console.log("Correct");
        }
        else {
            console.log(`Correct answer is ${data.results[i].correct_answer}`);
        }
    }
    console.log(`Total score is ${score}`);
};
startQuiz();
