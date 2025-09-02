import inquirer from "inquirer";

let todos : string [] = ["task1", "task2", "task3"];

async function createTodo (todos : string[]) {

    let answers = await inquirer.prompt([
        {
            type : "list",
            name : "select",
            message : "Select Opration",
            choices : ["Add", "Update", "View", "Delete"],
        }, 
        {
            type : "input",
            name : "addtodo",
            message : "Add Item",
            // when (todos){
            //     return todos.select == "Add"
            // }, 
        },  
        {
            type : "input",
            name : "updatetodo",
            message : "Update Item",
            //choices : todos.map ( item => item),
            // when (todos){
            //     return todos.select == "Update Item"
            // },
        }, 
        {
            type : "list",
            name : "deletetodo",
            message : "Delete Item",
            choices : todos.map ( item => item),
            when (todos) {
                return todos.select == "Delete Item"
            }, 
        },  
    ])


   // console.log(answers)
    .then ((answers) => {
        
        if (answers.select === "Add"){
            let additem = todos.push(answers.addtodo);
            let newTodos = todos.filter (value => value !== answers.additem)
             todos = newTodos;
             console.log(todos);     
        }
        else if (answers.select === "Update"){  //not working
            let updateitem = todos.map( item => item)
            let newTodos = todos.filter (value => value !== answers.updateitem)
            todos = [...newTodos, answers.updatetodo]
            console.log(todos);
        } 
        else if (answers.select === "Delete"){
            let deleteitem = todos.map( item => item)
            let newTodos = todos.filter (value => value !== answers.deleteitem)
            todos = [...newTodos]
            console.log(todos);
        }  
     })

} 
    createTodo(todos);

//console.log("\ntodo 3 end")

/* Array.map function allows us to apply the same function to every value
 in an array and produce a new array containing the results.
Each value in the original array maps to 
a corresponding value in the new array.
map() does not change the original array. */