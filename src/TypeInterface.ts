// interface : object  type: array,  object, function 


interface User {
    id: number;
    name: string;
    email: string;
    isPremium?: boolean;
}

const newUser: User = {
    id: 1,
    name: "Liza",
    email: "liza@example.com"
};




////////////////
interface Person {
    name: string;
}

interface Employee extends Person {
    employeeId: number;
    department: string;
}

const worker: Employee = {
    name: "Arif",
    employeeId: 505,
    department: "IT"
};











///////////////

// interface ButtonProps {
//     label: string;
//     onClick: () => void;
//     color?: string;
// }

// const MyButton = ({ label, onClick, color = "blue" }: ButtonProps) => {
//     return (
//         <button style={{ backgroundColor: color }} onClick={onClick}>
//             {label}
//         </button>
//     );
// };







interface Car {
    readonly brand: string; // এটি পরিবর্তন করা যাবে না
    model: string;
}

const myCar: Car = {
    brand: "Toyota",
    model: "Corolla"
};

myCar.model = "Camry"; // এটা সম্ভব
// myCar.brand = "Honda"; // Error: Cannot assign to 'brand' because it is a read-only property.



///////////unnon pupate 



interface SalaryRecord {
    [employeeName: string]: number; // কী (key) হবে string এবং ভ্যালু হবে number
}

const companyPayroll: SalaryRecord = {
    "Arif": 50000,
    "Liza": 60000,
    "Rahul": 45000,
    // আপনি চাইলে আরও আনলিমিটেড এন্ট্রি করতে পারবেন
};




interface MathFunc {
    (num1: number, num2: number): number;
}

const add: MathFunc = (a, b) => a + b;
const multiply: MathFunc = (a, b) => a * b;