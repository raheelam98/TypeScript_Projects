import inquirer from "inquirer";
console.log("ATM Machine (Hard coded one user)\n");
// Hard coded user
let user = {
    pin: 1001,
    name: "Ali Akbar",
    balance: 9000
};
const atmMachine1 = async () => {
    const pinInput = await inquirer.prompt([
        {
            type: "password",
            name: "pin",
            message: "Enter Your Pin "
        }
    ]);
    do {
        if (Number(pinInput.pin) !== user.pin) {
            console.log("Invalid Input ");
        }
        else {
            //console.log(`Welcome ${name}`)
            const typeInput = await inquirer.prompt([
                {
                    type: "list",
                    name: "transactionType",
                    message: "Select Options",
                    choices: ["Withdraw", "Fast Cash", "Deposit", "Balance Inquiry", "Exit"]
                },
                {
                    name: "amount",
                    message: "Select Amount",
                    type: "list",
                    choices: [1000, 2000, 3000, 5000, 10000],
                    when(pinInput2) {
                        return pinInput2.transactionType == "Fast Cash";
                    },
                },
                {
                    name: "amount",
                    message: "Select Withdraw Amount  ",
                    type: "number",
                    when(pinInput2) {
                        return pinInput2.transactionType == "Withdraw";
                    },
                },
                {
                    type: "number",
                    name: "deposit",
                    message: "Enter Deposit Amount",
                    when(user) {
                        return user.transactionType == "Deposit";
                    },
                }
            ]);
            console.log("Transaction Detail ", typeInput);
            const currentBlance = user.balance;
            // console.log("Blance Before Transaction ", user.balance);
            if (typeInput.transactionType == "Withdraw") {
                if (user.balance < typeInput.amount) {
                    console.log(`Insufficient Balance ....`);
                }
                else {
                    const currentBlance = user.balance = user.balance - typeInput.amount;
                    console.log(`Blance After Transaction is ${user.balance}`);
                }
            }
            if (typeInput.transactionType == "Fast Cash") {
                if (user.balance < typeInput.amount) {
                    console.log(`Insufficient Balance ....`);
                }
                else {
                    const currentBlance = user.balance = user.balance - typeInput.amount;
                    console.log(`Blance After Transaction is ${user.balance}`);
                }
            }
            else if (typeInput.transactionType == "Deposit") {
                const currentBlance = user.balance = user.balance = user.balance + typeInput.deposit;
                console.log(`Depsoited Amount is ${user.balance}`);
            }
            else if (typeInput.transactionType == "Balance Inquiry") {
                const currentBlance = user.balance;
                console.log(`Your Blance is ${user.balance}`);
            }
            else if (typeInput.transactionType == "Exit") {
                return console.log("Thanks for using ATM");
            }
        }
    } while (true);
};
atmMachine1();
