function parseUserInput(text) {
    try {
        return JSON.parse(text);
    } catch (error) {
        return "Invalid JSON. Please enter valid JSON text.";
    }
}

const userInput = '{name: Jaber}';

console.log(parseUserInput(userInput));