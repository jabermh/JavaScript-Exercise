const student = {
    name: "Muzahidul Haque Jaber",
    dept: "CSE",
    semester: "6th",
    skills: ["JavaScript", "Java", "C++", "Python"],

    describe() {
        return `My name is ${this.name}. I study in ${this.dept}, and I am currently in the ${this.semester} semester.`;
    }
};

console.log(student.describe());