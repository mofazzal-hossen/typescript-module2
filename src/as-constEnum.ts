// ১. Enum এর বদলে 'as const' অবজেক্ট
const UserRoles = {
    Admin: "Admin",
    Editor: "Editor",
    Viewer: "Viewer"
} as const;

// ২. অবজেক্ট থেকে Union Type তৈরি করা
type UserRole = typeof UserRoles[keyof typeof UserRoles]; 
// এটি তৈরি করবে: "Admin" | "Editor" | "Viewer"

// ৩. ফাংশন আপডেট (Parameter type এখন UserRole)
const canEdit = (role: UserRole) => {
    if (role === UserRoles.Admin || role === UserRoles.Editor) {
        return true;
    } 
    return false;
};

// ৪. ব্যবহার
const isEdit = canEdit(UserRoles.Admin); // true
const canView = canEdit("Viewer");       // false (সরাসরি স্ট্রিং দিলেও কাজ করবে)