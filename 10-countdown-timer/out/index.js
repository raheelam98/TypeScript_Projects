import inquirer from "inquirer";
import { differenceInSeconds } from "date-fns";
console.log("Countdown Timer\n");
const response = await inquirer.prompt([
    {
        type: "number",
        name: "userInput",
        message: "Enter Second",
        //validate input
        validate: (input) => {
            if (isNaN(input)) {
                return "Enter validate number ";
            }
            else if (input > 60) {
                return "Second must be within 60 ";
            }
            else {
                return true;
            }
        }
    }
]);
let input = response.userInput;
function startTime(val) {
    const initialTime = new Date().setSeconds(new Date().getSeconds() + val);
    const intervalTime = new Date(initialTime);
    //setInterval(()=>{},1000)
    setInterval(() => {
        const currentTime = new Date();
        // calculate time difference
        const timeDiff = differenceInSeconds(intervalTime, currentTime);
        //condition if time is <= 0 time expire
        if (timeDiff <= 0) {
            console.log("Time has expired !");
            process.exit(); //terminate the process 
        }
        //for minute
        const min = Math.floor((timeDiff % (3600 * 24)) / 3600);
        //for seconds
        const sec = Math.floor(timeDiff % 60);
        //console.log(`${min}:${sec}`)
        //formatting: convert min and second in string, 
        //string.padStart(targetLength, padString) :- string with "0" until it reaches the length 2:
        console.log(`${min.toString().padStart(2, "0")}:
                ${sec.toString().padStart(2, "0")}`); // output:- 00:03
    }, 1000);
}
//startTime require input 
startTime(input);
