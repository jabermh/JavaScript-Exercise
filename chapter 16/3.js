const queue = [];

queue.push("Patient 1");
queue.push("Patient 2");
queue.push("Patient 3");
queue.push("Patient 4");
queue.push("Patient 5");

console.log("Dequeued:", queue.shift());
console.log("Dequeued:", queue.shift());

console.log("Remaining patients:", queue);