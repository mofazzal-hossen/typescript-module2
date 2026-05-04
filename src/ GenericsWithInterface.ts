//Generics with interface



///with out generics . The problem

interface ProductResponse {
    data: product;
    status: number;


}

interface UsertResponse {

    data: User;
    status: number;

}

///Note here, everything is the same except data. Writing code like this increases duplication.



////The solution 

interface ResponseWrapper<T> {
    success: boolean;
    data: T; //Here T is a placeholder, In Data.
    message: string;
}


////Now when using it, we will tell what will go in place of T:

const pResponse: ResponseWrapper<{ id: number, title: string }> = {
    success: true,
    data: { id: 201, title: "iphone 17" },
    message: "User logged in"
}

const uResponse: ResponseWrapper<{ name: string, email: string }> = {
    success: true,
    data: { name: "munna", email: "lazycoder420@gmail.com" },
    message: "user logged in"
}






