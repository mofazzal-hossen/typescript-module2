type Student ={
    id: number;
    name: string;
    email: string;
};


const enrollStudent = <T extends Student>(student: T): T=>{
    return student

}


const student1={
    id:2,
    name:"munna",
    email:"lazycoder420@gmail.com "
};

const student2 = {
    id: 2,
    name: "Arif",
    email: "arif@example.com",
    dept: "Computer Science"
};

const student3 = {
    id: 3,
    name: "Liza",
    email: "liza@test.com",
    hasScholarship: true
};

