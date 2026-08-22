const textInput = document.getElementById("textInput");
const countDisplay = document.getElementById("count");

textInput.addEventListener("input", function () {
    const characterCount = textInput.value.length;

    countDisplay.textContent = `${characterCount} characters`;
});