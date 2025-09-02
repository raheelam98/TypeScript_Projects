import inquirer from "inquirer";
console.log("to do list 1");
//todos arrays=
//functions=
//operation=
let todos = ["task1", "taskl2"];
async function createTodo1(todos) {
    let ans = await inquirer.prompt({
        type: "list",
        name: "select",
        message: "Select Operation",
        choices: ["Add", "Update", "View", "Delete"]
    });
    if (ans.select == "Add") {
        let addTodo = await inquirer.prompt({
            type: "input",
            name: "todo",
            message: "Add Item ..."
        });
        todos.push(addTodo.todo);
        console.log(todos);
    }
    if (ans.select == "Update") { //selecting update item
        let updateTodo = await inquirer.prompt({
            type: "list",
            name: "todo",
            message: "Select Item for Update",
            choices: todos.map(item => item)
        });
        //add item for updation
        let addTodo = await inquirer.prompt({
            type: "input",
            name: "todo",
            message: "Update Item ..."
        });
        //require new array don't have selected update item
        let newTodos = todos.filter(val => val !== updateTodo.todo);
        //update todos, put new updated item 
        todos = [...newTodos, addTodo.todo];
        console.log(todos);
    }
    if (ans.select == "View") {
        if (todos.length > 0) {
            console.log("ToDo List");
            todos.forEach(todo => {
                console.log(todo);
            });
        }
    }
    //Delete is same as update
    if (ans.select == "Delete") {
        let deleteTodo = await inquirer.prompt({
            type: "list",
            name: "todo",
            message: "Select Item for Delete",
            choices: todos.map(item => item)
        });
        //require new array don't have selected delet item
        let newTodos = todos.filter(val => val !== deleteTodo.todo);
        //update todos, (not include deleted item) 
        todos = [...newTodos];
        console.log(todos);
    }
}
// use do{} while (true) --> Continuous processes
async function startAgain1() {
    do {
        await createTodo1(todos);
        var again = await inquirer.prompt({
            type: "input",
            name: "restart",
            message: "\n Do you want to Continue, Press Y \n"
        });
    } while (again.restart == `y` || again.restart == 'yes' || again.restart == `Y` || again.restart == `YES`);
}
startAgain1();
