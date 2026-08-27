function isBalanced(text) {
    const stack = [];
    const pairs = {
        ")": "(",
        "]": "[",
        "}": "{"
    };

    for (const char of text) {
        if (char === "(" || char === "[" || char === "{") {
            stack.push(char);
        } else if (char === ")" || char === "]" || char === "}") {
            if (stack.pop() !== pairs[char]) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

const code = `
function test() {
    if (arr[0] === "{") {
        return (true);
    }
}
`;

console.log(isBalanced(code));