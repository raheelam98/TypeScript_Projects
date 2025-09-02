console.log("Student Management System\n")

class School{
    schName:string;
    //students:Student = [];    //error 
    students:Student[] = [];
    teachers:Teacher[] = [];

    //literl Type:- exact values for variables or properties
    //method to register data of students
    addStudent(stuObj:Student){
        this.students.push(stuObj)
    }

    //method to register data of teachers
    addTeacher(teaObj:Teacher){
        this.teachers.push(teaObj);
    }

    constructor(schname:string){
        this.schName = schname;
    }
}

class Student{
    name:string;
    age:number;
    schoolName:string;

    constructor(stname:string, age:number, sname:string){
        this.name=stname;
        this.age=age;
        this.schoolName=sname;
    }
}

class Teacher extends Student{
    // name:string;
    // age:number;
    // schoolName:string;

    // constructor(stname:string, age:number, tname:string){
    //     this.name=stname;
    //     this.age=age;
    //     this.schoolName=tname;
    // }
}

let objSchool1 = new School("City School")
let objSchool2 = new School("Fatima School")

let objStu1 = new Student("Ali",15,objSchool1.schName);
let objStu2 = new Student("Akbar",20,objSchool2.schName);
let objStu3 = new Student("Ahmed",25,objSchool2.schName);

let objtea1 = new Teacher("Ratan",30,objSchool1.schName);
let objtea2 = new Teacher("Chaman",35,objSchool2.schName);
let objtea3 = new Teacher("lal",35,objSchool2.schName);

//add students :- to register students in school (method addStudent from school class)
objSchool1.addStudent(objStu1);
objSchool2.addStudent(objStu2);
objSchool2.addStudent(objStu3);

//add teachers :- to register teachers in school (method addTeacher from school class)
objSchool1.addTeacher(objtea1);
objSchool2.addTeacher(objtea2);
objSchool2.addTeacher(objtea3);



console.log(objSchool1);
console.log(objSchool2);

export{}

