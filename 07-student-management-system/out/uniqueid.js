class Institute {
    insName;
    students = [];
    // Method to register a student
    addStudent(objStudent) {
        this.students.push(objStudent);
    }
    constructor(insName) {
        this.insName = insName;
    }
}
class Student {
    id;
    name;
    constructor(id, stname) {
        this.id = id || this.generateUniqueId();
        this.name = stname;
    }
    // Function to generate a 5-digit unique student ID
    generateUniqueId() {
        const randomId = Math.floor(10000 + Math.random() * 90000);
        return randomId.toString();
    }
}
const objstu1 = new Student("", "Akbar");
const objstu2 = new Student("", "Asma");
console.log(objstu1);
console.log(objstu2);
export {};
// function customUniqueIdGenerator(id: number) {
//     const stuid1 = ("" + Math.random()).substring(2, 7);
//     return id + stuid1;
// }
// const objstu3 = new Student(customUniqueIdGenerator(12345), "John");
// console.log(objstu3);
