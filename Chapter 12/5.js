const sentence = "hello world hello javascript world hello";

const words = sentence.split(" ");

const wordCount = new Map();

for (const word of words) {
    wordCount.set(word, (wordCount.get(word) || 0) + 1);
}

console.log(wordCount);