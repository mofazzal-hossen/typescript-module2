interface ApiResponse<T> {
  success: boolean;
  data: T; // এখানে T হতে পারে Product, User বা অন্য কিছু
  message: string;
}

// প্রোডাক্টের জন্য ব্যবহার
type Product = { id: number; title: string };
const productRes: ApiResponse<Product[]> = {
  success: true,
  data: [{ id: 1, title: "Summer Shirt" }],
  message: "Fetched"
};








type DataTable<T> = {
  items: T[];
  totalRecords: number;
};

// কাস্টমার টেবিল
const customers: DataTable<{ name: string }> = {
  items: [{ name: "Arif" }],
  totalRecords: 1
};












function useStorage<T>(key: string) {
  // লোকাল স্টোরেজ থেকে ডেটা নিয়ে আসা এবং টাইপ কাস্ট করা
  const item = localStorage.getItem(key);
  return item ? (JSON.parse(item) as T) : null;
}

const user = useStorage<{id: number}>("user_info");











// এই ফাংশনটি শুধু সেই অবজেক্ট নিবে যেটির 'id' প্রপার্টি আছে
function getID<T extends { id: number }>(obj: T) {
  return obj.id;
}

getID({ id: 101, name: "Liza" }); // সঠিক
// getID({ name: "Liza" }); // Error: 'id' missing