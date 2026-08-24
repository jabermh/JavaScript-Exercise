const jokeBtn = document.getElementById("jokeBtn");
const jokeDisplay = document.getElementById("joke");
const status = document.getElementById("status");

async function getJoke() {
    status.textContent = "Loading...";
    jokeDisplay.textContent = "";

    try {
        const response = await fetch(
            "https://official-joke-api.appspot.com/random_joke"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch joke");
        }

        const data = await response.json();

        jokeDisplay.textContent =
            `${data.setup} ${data.punchline}`;

        status.textContent = "";

    } catch (error) {
        jokeDisplay.textContent = "";
        status.textContent =
            "Something went wrong. Please try again.";
    }
}

jokeBtn.addEventListener("click", getJoke);