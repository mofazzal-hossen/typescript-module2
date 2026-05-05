

//   Explore mapped types

//A variable or name (like we use in JavaScript).
// keyof T: This returns all the properties or keys (id, name, email) of the Student type as a list.


// map 



//Real-time Case: Product Update System

type Product = {
    id: string;
    title: string;
    price: number;
    description: string;
    category: string;
};

type UpdateProduct<T> = {
    [K in keyof T]?: T[K];
};


const productUpdate = (id: string, updates: UpdateProduct<Product>) => {
    console.log(`Updating product ID: ${id}...`);
    console.log("Applied Updates:", updates);
    
  
    console.table(updates);
};

const priceUpdate: UpdateProduct<Product> = {
    price: 450,
    description: "New summer collection arrival!"
};

productUpdate("sun-101", priceUpdate);







type Student = {
    id: number;
    name: string,
    email: string;
};


type OptionalStudent<T> = {
    [K in keyof T]?: T[K];
};


const student1: OptionalStudent<Student> = {
    id: 12,
    name: "devil",
    email: "onedevil009@gmaol.com "

    //Even if you don't enter your id or email here, you won't get an error.
};


type RequiredStudent<T> = {
    [K in keyof T]-?: T[K];
};

