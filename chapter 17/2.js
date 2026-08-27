function reverseString(text) {
    if (text.length <= 1) {
        return text;
    }

    return reverseString(text.slice(1)) + text[0];
}

console.log(reverseString("hello"));