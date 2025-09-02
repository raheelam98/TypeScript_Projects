class Person {
    name;
    age;
    address;
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    eat(raita) {
        console.log("Biryani + ", raita);
    }
}
class Teacher extends Person {
    constructor(name, age, address) {
        super(name, age, address);
    }
}
class Student extends Person {
    constructor(name, age, address) {
        super(name, age, address);
    }
    eat() {
        console.log("Burger");
        super.eat(false);
    }
}
console.log("teacher1");
let teacher1 = new Teacher('john', 20, 'USA');
teacher1.eat(true);
console.log("\nstudent1");
let student1 = new Student("ali", 30, "PAK");
student1.eat();
//=========== update ===========
console.log("\nupdate");
class Person2 {
    name = "okasha";
}
class Teacher2 extends Person2 {
    updateName() {
        this.name = "hamza";
    }
    displayName() {
        return this.name;
    }
}
let teacher2 = new Teacher2();
teacher2.updateName();
console.log(teacher2.displayName());
//=========== static ===========
console.log("\nstatic");
class Student3 {
    name;
    rollNo;
    static serialNo = 0;
    constructor(name, rollNo) {
        this.name = name;
        this.rollNo = rollNo;
        Student3.serialNo += 1;
    }
}
let student2 = new Student3("ali", "12345");
let student3 = new Student3("ali", "12345");
let student4 = new Student3("ali", "12345");
let student5 = new Student3("ali", "12345");
let student6 = new Student3("ali", "12345");
console.log(Student3.serialNo);
export {};
