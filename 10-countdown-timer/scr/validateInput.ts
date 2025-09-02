import inquirer from "inquirer"

const response = await inquirer.prompt([
    {
        type : "number",
        name : "userInput",
        message : "Enter Second",
        //validate input
        validate : (input)=>{
            if (isNaN(input)){
                return "Enter validate number "
            }
            else if (input > 60 ) {
                return "Second must be within 60 "
            }
            else {
                return true
            } 
        }
    }
])