import inquirer from "inquirer";
import { faker } from "@faker-js/faker";
console.log("ATM Machine (Dynamic 3 Users, use faker)");
//create dynamic users
const creatUsers3 = () => {
    let users3 = [];
    for (let i = 0; i < 3; i++) {
        let user3 = {
            id: i,
            pin: 1000 + i,
            name: faker.person.fullName(),
            accountNumber: Math.floor(1000 * Math.random() * 9000),
            balance: 10000 * i,
        };
        users3.push(user3);
    } // for end
    return users3;
};
//atm machine
const atmMachine3 = async (users3) => {
    const userPin3 = await inquirer.prompt({
        type: "number",
        name: "pincheck",
        message: "Insert Pin Code"
    });
    console.log(userPin3);
    const currentUser3 = users3.find(pinChecker3 => pinChecker3.pin == userPin3.pincheck);
    if (currentUser3) {
        console.log(`Welcome ${currentUser3.name}`);
        //run the atm meachine functionality
        atmFunction3(currentUser3);
        return;
    }
    else {
        console.log("Invalid Pin");
    }
    //return currentUser3;
};
//atm functionality
const atmFunction3 = async (currentUser3) => {
    do {
        const typeInput3 = await inquirer.prompt([
            {
                type: "list",
                name: "transactionType",
                message: "Select Options",
                choices: ["Withdraw", "Fast Cash", "Deposit", "Blance Inquiry", "Exit"]
            },
            {
                type: "number",
                name: "withdrawAmount",
                message: "Enter Withdraw Amount",
                when(currentUser3) {
                    return currentUser3.transactionType == "Withdraw";
                },
            },
            {
                type: "list",
                name: "fastCashAmount",
                message: "Select Amount",
                choices: [1000, 2000, 5000, 10000],
                when(currentUser3) {
                    return currentUser3.transactionType == "Fast Cash";
                },
            },
            {
                type: "number",
                name: "deposit",
                message: "Enter Deposit Amount",
                when(currentUser3) {
                    return currentUser3.transactionType == "Deposit";
                },
            }
        ]);
        console.log(typeInput3);
        //const enterAmount3 = typeInput3.withdrawAmount
        // const balance = Math.floor(Math.random()*100000);
        // console.log("Blance", balance);
        const currentBalance3 = currentUser3.balance;
        console.log("Balance Before Transaction", currentBalance3);
        if (currentBalance3 > (typeInput3.withdrawAmount || typeInput3.fastCashAmount)) {
            const remainingAmount3 = currentBalance3 - (typeInput3.withdrawAmount || typeInput3.fastCashAmount);
            console.log("Remaining Balance : ", remainingAmount3);
        }
        else if (currentBalance3 < (typeInput3.withdrawAmount || typeInput3.fastCashAmount)) {
            console.log("Insufficient Balance");
        }
        else if (typeInput3.withdrawAmount >= 10000) {
            return console.log("Can't Withdraw more than Rs 10,000");
        }
        else if (typeInput3.transactionType == "Deposit") {
            const depositAmount = typeInput3.deposit;
            const blanceAfterDeposit = typeInput3.deposit + currentUser3.balance;
            console.log(`Deposit Amount : ${depositAmount} `);
            console.log(`Balance After Deposite : ${blanceAfterDeposit}`);
        }
        else if (typeInput3.transactionType == "Blance Inquiry") {
            const currentBalance3 = currentUser3.balance;
            console.log(`Total Blance ${currentBalance3}`);
        }
        else if (typeInput3.transactionType == "Exit") {
            return console.log("Thanks for using ATM");
        }
    } while (true);
}; //atm function
let dynamicUsesList = creatUsers3();
//console.log(dynamicUsesList);
let userList = atmMachine3(dynamicUsesList);
