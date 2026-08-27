const students = [
    { name: "Jaber", cgpa: 3.75 },
    { name: "Rahim", cgpa: 3.40 },
    { name: "Karim", cgpa: 3.90 },
    { name: "Ali", cgpa: 3.55 }
];

students.sort((a, b) => b.cgpa - a.cgpa);

console.log(students);