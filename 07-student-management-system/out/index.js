console.log("Student Management System\n");
//operations enroll, view balance, pay tuition fees, show status
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
class Course {
    course;
    constructor(course) {
        this.course = course;
    }
}
class Student extends Course {
    id;
    name;
    enrolled;
    fee;
    balance;
    constructor(id, name, enrolled, balance, course, fee) {
        super(course);
        this.id = id || this.generateUniqueId();
        this.name = name;
        this.enrolled = enrolled;
        this.fee = fee;
        this.balance = balance;
    }
    // Function to generate a 5-digit unique student ID
    generateUniqueId() {
        const randomId = Math.floor(10000 + Math.random() * 90000);
        return randomId.toString();
    }
}
let objinstitude1 = new institude("Piaic Karachi");
let objinstitude2 = new institude("Piaic Islamabad");
let objStud1 = new Student("", "Ali", true, "non", "Quater 1", 4500);
let objStud2 = new Student("", "Asma", true, "500", "Quater 2", 4000);
let objStud3 = new Student("", "Chaman", true, "non", "Quater 3", 4500);
let objStud4 = new Student("", "Mike", true, "1000", "Quater 4", 3500);
objinstitude1.addStudent(objStud1);
objinstitude1.addStudent(objStud2);
objinstitude1.addStudent(objStud3);
objinstitude2.addStudent(objStud4);
console.log(objinstitude1);
console.log(objinstitude2);
export {};
