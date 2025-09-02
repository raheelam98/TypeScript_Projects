console.log("to do list");
import inquirer from "inquirer";
let todos = [];
let loop = true;
while (loop) {
    const answers = await inquirer.prompt([
        {
            type: "input",
            name: "TODO",
            message: "What do you want to add in ToDo"
        },
        {
            type: "confirm",
            name: "addmore",
            message: "Add more in ToDo",
            default: false,
        }
    ]);
    const { TODO, addmore } = answers;
    console.log(answers);
    loop = addmore;
    if (TODO) {
        todos.push(TODO);
    }
    else {
        console.log("Add Valid Input");
    }
    if (todos.length > 0) {
        console.log("ToDo List");
        todos.forEach(todo => {
            console.log(todo);
        });
    }
    else {
        console.log("No ToDo Found");
    }
}
