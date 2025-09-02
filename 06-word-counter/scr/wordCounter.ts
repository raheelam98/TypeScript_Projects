import inquirer from "inquirer";

async function getSentence(){
    const answer : {  sentence : string
    } = await  inquirer.prompt([
        {
            type : "input",
            name : "sentence",
            message : "Enter sentence to count words"
        }
    ]);
    console.log(`Counted word in sentence is  ${wordCount(answer.sentence.trim())} `)
}

function wordCount(sent : string) : number {
    if(sent.length>0){
        const words = sent.split(" ");
        console.log(words);
        return words.length;
    } else {
        return 0;
    }
}

async function startLoop(){
    do{
        await getSentence();
        var again = await inquirer.prompt([
            {
                type : "list",
                name : "loop",
                choices : ["Yes", "No"],
                message: "Do you want to continue : "
            }
        ]);
    }
    while(again.loop == "Yes")
}

startLoop();


