import inquirer from "inquirer";
import chalk from "chalk";
console.log("Adventure Game\n");
//classes player 
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncrease() {
        let fuel = this.fuel = 100;
    }
}
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecrease() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
let player = await inquirer.prompt({
    type: "input",
    name: "name",
    message: "Please Enter Your Name"
});
let opponent = await inquirer.prompt({
    type: "list",
    name: "select",
    message: "Please Select Your opponent",
    choices: ["Assassin", "Zombie", "Big man"]
});
//Gather data
let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);
do {
    //Assassin
    if (opponent.select == "Assassin") {
        let ask = await inquirer.prompt({
            type: "list",
            name: "Opt",
            message: "Please Select Your opponent",
            choices: ["Attack", "Drink Portion", "Run for your Life.."]
        });
        if (ask.Opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.blue(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic(`You Loose, Better Luck Next Time`));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.blue(`${o1.name} fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.yellowBright.bold.italic(`You Win`));
                    process.exit();
                }
            }
        }
        if (ask.Opt == "Drink Portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.greenBright(`You Drink Health Portion Your fuel is ${p1.fuel} `));
        }
        if (ask.Opt == "Run for your Life.. ") {
            console.log(chalk.red.bold.italic(`You Loose, Better Luck Next Time`));
            process.exit();
        }
    }
    //Zombie
    if (opponent.select == "Zombie") {
        let ask = await inquirer.prompt({
            type: "list",
            name: "Opt",
            message: "Please Select Your opponent",
            choices: ["Attack", "Drink Portion", "Run for your Life.."]
        });
        if (ask.Opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.blue(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic(`You Loose, Better Luck Next Time`));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.blue(`${o1.name} fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.yellowBright.bold.italic(`You Win`));
                    process.exit();
                }
            }
        }
        if (ask.Opt == "Drink Portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.greenBright(`You Drink Health Portion Your fuel is ${p1.fuel} `));
        }
        if (ask.Opt == "Run for your Life.. ") {
            console.log(chalk.red.bold.italic(`You Loose, Better Luck Next Time`));
            process.exit();
        }
    }
    //Big Man
    if (opponent.select == "Big man") {
        let ask = await inquirer.prompt({
            type: "list",
            name: "Opt",
            message: "Please Select Your opponent",
            choices: ["Attack", "Drink Portion", "Run for your Life.."]
        });
        if (ask.Opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                p1.fuelDecrease();
                console.log(chalk.bold.blue(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold.italic(`You Loose, Better Luck Next Time`));
                    process.exit();
                }
            }
            if (num <= 0) {
                o1.fuelDecrease();
                console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
                console.log(chalk.bold.blue(`${o1.name} fuel is ${o1.fuel}`));
                if (o1.fuel <= 0) {
                    console.log(chalk.yellowBright.bold.italic(`You Win`));
                    process.exit();
                }
            }
        }
        if (ask.Opt == "Drink Portion") {
            p1.fuelIncrease();
            console.log(chalk.bold.italic.greenBright(`You Drink Health Portion Your fuel is ${p1.fuel} `));
        }
        if (ask.Opt == "Run for your Life.. ") {
            console.log(chalk.red.bold.italic(`You Loose, Better Luck Next Time`));
            process.exit();
        }
    }
} while (true);
