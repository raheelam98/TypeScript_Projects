//https://www.typescriptlang.org/docs/handbook/2/classes.html
class institude {
    insName;
    students = [];
    //method to register student
    addStudent(objStuent) {
        this.students.push(objStuent);
    }
    constructor(insName) {
        this.insName = insName;
    }
}
class Student {
    id;
    name;
    constructor(id, stname) {
        this.id = id || this.getId();
        this.name = stname;
    }
    // how to generate a 5 digit unique studentID for each student
    getId() {
        //let stuid1 = ("" + Math.random()).substring(2, 7);
        const randomId = Math.floor(10000 + Math.random() * 90000);
        return randomId.toString();
    }
}
const objstu1 = new Student("", "Akbar");
const objstu2 = new Student("", "Asma");
console.log(objstu1);
console.log(objstu2);
export {};
