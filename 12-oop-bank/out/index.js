import inquirer from "inquirer";
console.log("Opps - Bank System\n");
//customer class
class Customer {
    firstName;
    lastName;
    mobileNum;
    accountNum;
    constructor(fName, lName, mobNum, accNum) {
        this.firstName = fName;
        this.lastName = lName;
        this.mobileNum = mobNum;
        this.accountNum = accNum; // acc
    }
}
//class Bank (to add many cusomters and accouts)
class Bank {
    customer = [];
    account = [];
    //method to add customer 
    addCutomer(obj) {
        this.customer.push(obj);
    }
    //method to add account
    addAccountNumber(obj) {
        this.account.push(obj);
    }
    //method to update transection (after withdraw) (1:01)
    transection(obj) {
        let newAccounts = this.account.filter((val) => val.accNumber !== obj.accNumber);
        //update account     
        this.account = [...newAccounts, obj];
        //this.account = 
    }
}
let objBank = new Bank();
for (let i = 1; i <= 1; i++) {
    //add one customer at a time 
    let objCustomer = new Customer("Ali", "Azhar", 3332224444, 1001);
    objBank.addCutomer(objCustomer);
    // add account number  (coming object)
    objBank.addAccountNumber({ accNumber: objCustomer.accountNum, balance: 1000 * i });
}
//console.log(objBank);
//Bank Funtionality
async function bankService(bank) {
    do {
        let service = await inquirer.prompt({
            type: "list",
            name: "select",
            message: "Select The Service ",
            choices: ["Blance Inquiry", "Cash Withdraw", "Cash Deposit", "Exit"]
        });
        //view blance
        if (service.select == "Blance Inquiry") {
            let response = await inquirer.prompt({
                type: "input",
                name: "balance",
                message: "Enter Account Number "
            });
            let account = objBank.account.find((objBank) => objBank.accNumber == response.balance);
            if (!account) {
                console.log("Invalid Account Number");
            }
            if (account) {
                let name = objBank.customer.find((item) => item.accountNum == account?.accNumber);
                console.log(`${(name?.firstName)} ${(name?.lastName)} Your Account Blance is Rs ${(account.balance)} `);
            }
        }
        //cash withdraw
        if (service.select == "Cash Withdraw") {
            let response = await inquirer.prompt({
                type: "input",
                name: "num",
                message: "Enter Account Number "
            });
            let account = objBank.account.find((objBank) => objBank.accNumber == response.num);
            if (!account) {
                console.log("Invalid Account Number");
            }
            if (account) {
                let response = await inquirer.prompt({
                    type: "number",
                    name: "num",
                    message: "Enter Amount "
                });
                if (response.num > account.balance) {
                    console.log("Insufficient Balance! ");
                }
                let newBalance = account.balance - response.num;
                //transection method to update the blance 
                //  bank.transection({accNumber:account,balance:newBalance}) // MISTAKE
                bank.transection({ accNumber: account.accNumber, balance: newBalance });
                //console.log(newBalance);
            }
        }
        //cash deposit
        if (service.select == "Cash Deposit") {
            let response = await inquirer.prompt({
                type: "input",
                name: "num",
                message: "Enter Account Number "
            });
            let account = objBank.account.find((objBank) => objBank.accNumber == response.num);
            if (!account) {
                console.log("Invalid Account Number");
            }
            if (account) {
                let response = await inquirer.prompt({
                    type: "number",
                    name: "num",
                    message: "Enter Amount "
                });
                let newBalance = account.balance + response.num;
                //transection method to update the blance 
                //  bank.transection({accNumber:account,balance:newBalance}) // MISTAKE
                bank.transection({ accNumber: account.accNumber, balance: newBalance });
                //console.log(newBalance);
            }
            // console.log("Cash Deposit Completed")
        }
        if (service.select == "Exit") {
            return;
        }
    } while (true);
}
bankService(objBank);
