import { differenceInSeconds } from "date-fns";
import inquirer from "inquirer"


console.log("Time Setting\n")

//1 second = 1000 milliseconds.
//setInterval() method calls a function at specified intervals (in milliseconds).
//setInterval() method helps us to repeatedly execute a function after a fixed delay
//It returns a unique interval ID which can later be used by the clearInterval() method 
//which stops further repeated execution of the function. 

//syntax:- const intervalId = setInterval(func, [delay, arg1, agr2, ..., argN])


function startTime(val:number){
        const initialTime = new Date().setSeconds(new Date().getSeconds()+ val);
        const intervalTime = new Date(initialTime);
    //setInterval(()=>{},1000)
    setInterval(()=>{
        const currentTime = new Date();
        // calculate time difference
        const timeDiff = differenceInSeconds(intervalTime, currentTime)
        //condition if time is <= 0 time expire
        if(timeDiff <= 0){
            console.log("Time has expired !")
            process.exit();    //terminate the process 
        }

        //for minute
        const min = Math.floor((timeDiff%(3600*24))/3600)
        //for seconds
        const sec = Math.floor(timeDiff % 60)
        //console.log(`${min}:${sec}`)
        //formatting: convert min and second in string, 
    //string.padStart(targetLength, padString) :- string with "0" until it reaches the length 2:
    console.log(`${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`)   // output:- 00:03
    },1000);
}

//startTime require input 
startTime(5)  

//function fire every second
// function startTime(val:number){
//     setInterval(()=>{},1000)
// }
// startTime(1)  //hang


//Find out time
console.log("\nSetting Time in ")

//set current second :- new Date().setSeconds()
//add 1 (or parameter value) in current second

const initialTime = new Date().setSeconds(new Date().getSeconds()+1);
console.log("Initial Time : ",initialTime)   //output : 1698903476954

//convert initialTime into data format
const intervalTime = new Date(initialTime);
console.log("Interval Time : ", intervalTime)  //output : 2023-11-02T05:37:56.954Z

const currentTime = new Date();  // give current date
console.log("Today Date : ", currentTime)   //ouput:   2023-11-02T05:37:55.956Z

// calculate time difference
const timeDiff = differenceInSeconds(intervalTime, currentTime)
console.log("Time Difference : ", timeDiff)

//for minute
const min = Math.floor((timeDiff%(3600*24))/3600)
console.log("Time in Minute : ", min)
//for seconds
const sec = Math.floor(timeDiff % 60)
console.log("Time in Second : ", sec)

    

export{}