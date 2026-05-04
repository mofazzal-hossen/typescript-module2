



///////Suppose you want a function that will return whatever is given as input, inside an object.

const CreateObject = <T>(value: T) => {
    return { data: value };
};

const userObj = CreateObject({ name: "munna", age: 22 });




async function fetchData<T>(url: string): promise<T> {
    const response = await fetch(url);
    const data = await response.json();
    return data as T;
}


////useTime

const product = await fetchData<product[]>("api/product");
const userInfo = await fetchDta<user>("api/user/profile");

