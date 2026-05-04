enum UserRoles {
    Admin = "Admin",
    Editor = "Editor",
    Viewer = "Viewer"
}

const canEdit = (role: UserRoles) => {
    if (role === UserRoles.Admin || role === UserRoles.Editor) {
        return true;

    } else return false;
};

const isEdit = canEdit(UserRoles.Admin)



enum Attendance {
    Present = "PRESENT",
    Absent = "ABSENT",
    Late = "LATE"
}

type Student = {
    id: number;
    name: string;
    status: Attendance; 
};

const student1: Student = {
    id: 420,
    name: "Munna",
    status: Attendance.Present
};

console.log(`${student1.name} is ${student1.status}`); 
