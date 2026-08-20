const student = {
    name: "Jaber",
    dept: "CSE",
    semester: "6th"
};

const jsonString = JSON.stringify(student);

console.log(jsonString);

const parsedStudent = JSON.parse(jsonString);

console.log(parsedStudent.name);