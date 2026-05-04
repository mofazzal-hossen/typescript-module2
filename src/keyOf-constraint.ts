// i dont understandtype Student 





type Student = {
    id: number;
    name: string;
    email: string;
};

// T এখানে পুরো অবজেক্ট (Student)
// K extends keyof T এখানে K হলো Student এর যেকোনো একটি Key ("id" | "name" | "email")
function getStudentProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}