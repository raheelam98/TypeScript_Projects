//import inquirer from "inquirer";
console.log("fetches data from an API\n");
//fetch data from url
const apilink = "https://opentdb.com/api.php?amount=4&category=18&difficulty=medium&type=multiple";
let fetchData1 = async (data) => {
    let fetchQuiz = await fetch(data);
    let res = await fetchQuiz.json();
    return res;
};
let start = (async () => {
    let data = await fetchData1(apilink); // wrap in async function 
    //for (let i=1; i<4; i++){   //merage answers
    //let answers = [...data[i].incorrect_answers, data[i].correct_answer]
    for (let i = 0; i < data.results.length; i++) {
        let answers = [...data.results[i].incorrect_answers, data.results[i].correct_answer];
        console.log(answers);
    }
});
start();
export {};
// 1-  loop condition to use data.results.length : to fetch data 
// for (let i = 0; i < data.results.length; i++)
//2- fetched questions and answers :-  data.results[i]
