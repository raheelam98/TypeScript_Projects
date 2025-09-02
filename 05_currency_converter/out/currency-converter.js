console.log("currency converter");
import inquirer from "inquirer";
let Convertion = {
    "PKR": {
        "USD": 0.0034,
        "GBP": 0.0027,
        "PKR": 1
    },
    "GBP": {
        "USD": 1.25,
        "GBP": 1,
        "PKR": 372.18
    },
    "USD": {
        "USD": 1,
        "GBP": 0.80,
        "PKR": 298.38
    }
};
const answer = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        choices: ["PKR", "USD", "GBP"],
        message: "Select Currency : "
    },
    {
        type: "list",
        name: "to",
        choices: ["PKR", "USD", "GBP"],
        message: "Select Convert Currency :"
    },
    {
        type: "number",
        name: "amount",
        message: "Enter Convertion Amount :"
    },
]);
const { from, to, amount } = answer;
if (from && to && amount) {
    let result = Convertion[from][to] * amount;
    console.log(`Convertion from ${from} to ${to} is ${result}`);
}
else {
    console.log("Invalid Input ");
}
