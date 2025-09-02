import inquirer from "inquirer";

console.log("fetch quiz data and calculate score a\n");

//fetching quiz data, allowing the user to answer questions, 
 //and calculating and displaying their score at the end.

//fetch data from url

//pass api url
const apilink : string = 
    "https://opentdb.com/api.php?amount=4&category=18&difficulty=medium&type=multiple";

let fetchData = async (data :string) => {
    //let fetchQuiz : any = await fetch(data);
    let fetchQuiz: Response = await fetch(data);
    let res = await fetchQuiz.json();
    return res;
}

//let data = await fetchData(apilink); 

let startQuiz = async()=> {
    let scrore:number =0
   
    //Get user's name
    let name = await inquirer.prompt([
        {
        type : "input",
        name :  "username",
        message : "Enter Name"
        }
    ])
   
    let data = await fetchData(apilink); 

     // for (let i = 1; i < 4; i++) { //merage answers
    //     let answers = [...data[i].incorrect_answers, data[i].correct_answer];

    for (let i=1; i<data.results.length; i++){   //merage answers

        let answers = [
            ...data.results[i].incorrect_answers, 
            data.results[i].correct_answer
        ];

        let useranswer = await inquirer.prompt([
            {
            type : "list",
            name : "quiz",
             //message: data[i].question,  //
            message : data.results[i].question,
            choices : answers.map((val : any)=> val)
            }
        ]);

        if(useranswer.quiz === data.results[i].correct_answer){
            ++scrore
            console.log(`Correct`)
        }
        else{
            console.log(`Correct answer is ${data.results[i].correct_answer}`)
        }
    }
    console.log(`Total score is ${scrore}`)
}

startQuiz()

//1- Corrected the loop condition to use data.results.length.
//2- Ensured the correct types are used, e.g., Response for fetchQuiz.
//3- Updated comparison of user's answer with the correct answer to use === for strict equality.
//4- Improved code formatting and added comments for clarity.
 








