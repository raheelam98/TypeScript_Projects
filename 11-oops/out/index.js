import inquirer from "inquirer";
console.log("Opps Project\n");
class Student {
    name;
    constructor(n) {
        this.name = n;
    }
}
class Person {
    students = [];
    addStudent(obj) {
        this.students.push(obj);
    }
}
const persons = new Person(); //initiate person
console.log(persons);
//create funciton
const programStart = async (persons) => {
    do {
        console.log("Hi ! ");
        //user input
        const answer = await inquirer.prompt([
            {
                type: "list",
                name: "selectOpt",
                message: "Whom would you like to speak! ",
                choices: ["self", "student"]
            }
        ]);
        //create option for choices
        if (answer.selectOpt == "self") {
            console.log("Hi! I am here by myself");
            console.log("At the moment, doing self study.");
        }
        if (answer.selectOpt == "student") {
            const ans = await inquirer.prompt([
                {
                    type: "input",
                    name: "student",
                    message: "Which student would like to speak "
                }
            ]);
            //check student name in the list
            //persons from fun, students-array from Person class
            const student = persons.students.find(val => val.name == ans.student);
            //if student name is empty, than push given student name
            if (!student) {
                const name = new Student(ans.student); //create obj of student
                persons.addStudent(name); // add in persons list
                console.log(`Hi I am  ${name.name} , new student learning TypeScript`);
                console.log("List : ", persons.students); // show the array of students 
            }
            //if student name in the list
            if (student) {
                console.log(`Hi I am  ${student.name}, old student working on project `);
                console.log("List : ", persons.students); // show the array of students 
            }
        }
    } while (true);
};
programStart(persons); //pass persons array as arguent
