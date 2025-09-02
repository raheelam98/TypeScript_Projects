console.log("Quiz System\n");
import inquirer from "inquirer";
//fetch data from url
//pass api url
const apilink = "https://opentdb.com/api.php?amount=4&category=18&difficulty=medium&type=multiple";
let fetchData = async (data) => {
    //let fetchQuiz : any = await fetch(data);
    let fetchQuiz = await fetch(data);
    let res = await fetchQuiz.json();
    return res;
};
let startQuiz = async () => {
    let scrore = 0;
    //Get user name
    let name = await inquirer.prompt([
        {
            type: "input",
            name: "username",
            message: "Enter Name"
        }
    ]);
    let data = await fetchData(apilink);
    for (let i = 1; i < data.results.length; i++) { //merage answers
        let answers = [
            ...data.results[i].incorrect_answers,
            data.results[i].correct_answer
        ];
        let useranswer = await inquirer.prompt([
            {
                type: "list",
                name: "quiz",
                message: data.results[i].question,
                choices: answers.map((val) => val)
            }
        ]);
        if (useranswer.quiz == data.results[i].correct_answer) {
            ++scrore;
            console.log(`Correct`);
        }
        else {
            console.log(`Correct answer is ${data.results[i].correct_answer}`);
        }
    }
    console.log(`Total score is ${scrore}`);
};
startQuiz();
