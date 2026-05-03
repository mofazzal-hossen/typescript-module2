//Type Assertion

interface User {
  id: number;
  name: string;
}

const fetchData = async () => {
  const response = await fetch("https://api.example.com/user/1");
  const data = await response.json();

  // এখানে Assertion ব্যবহার করা হয়েছে
  const user = data as User; 
  console.log(user.name);
};
