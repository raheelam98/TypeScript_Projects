import inquirer from "inquirer";

//to store input variables
interface ansType {
    menuOpt : string,
    todo : string
}

//define varaibles
let todos : string[] = [];  //store todo list
let loop : boolean = true;   // program end
let answers1 : ansType;
let answers2 : ansType;
let answers3 : ansType;

async function displayManuItem(){

    answers1 = await inquirer.prompt([
        {
            type : "list",
            name : "menuOpt",
            message : "Select Menu Item",
            choices : ["Add", "Delete", "Exit"]
        }
    ]);

    switch (answers1.menuOpt){
        case 'Add' : {
            await addTodo();
            break;
        }
        case 'Delete' : {
            await deleteTodo();
            break;
        }
        default : {
            loop = false;
            console.log("Exit Program");
            break;
        }
    }
}

async function addTodo () {
    answers2 = await inquirer.prompt ([
        {
            type : "input",
            name : "todo",
            message : "Enter ToDo Item "
        }
    ])
    todos.push(answers2.todo);
    console.log(todos);
}

async function deleteTodo(){
    if (todos.length > 0){
        answers3 = await inquirer.prompt([
            {
                type : "list",
                name : "menuOpt",
                choices : todos,
                message : "Delete ToDo Item"
            }
        ]);
        let i = 0;
        do{
            if (todos[i] === answers3.menuOpt){
                todos.splice(i,1);  
                break;
            }
            i++;
         }
        while (i < todos.length)
        console.log(todos);
    } else {
        console.log("No To Do Item To Delete")
    }
}

async function startLoop(){
    while(loop){
        await displayManuItem();
    }
}
startLoop();