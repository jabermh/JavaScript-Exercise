const students = [
    { name: "Jaber", cgpa: 3.80 },
    { name: "Rahim", cgpa: 3.40 },
    { name: "Karim", cgpa: 3.70 },
    { name: "Ali", cgpa: 3.20 }
];

const result = students
    .filter(student => student.cgpa >= 3.5)
    .map(student => student.name);

console.log(result);