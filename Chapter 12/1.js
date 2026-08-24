export function calculateGrade(mark) {
    if (mark >= 80) return "A+";
    if (mark >= 70) return "A";
    if (mark >= 60) return "A-";
    if (mark >= 50) return "B";
    if (mark >= 40) return "C";
    return "F";
}