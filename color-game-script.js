const colors = ["red", "blue", "green", "yellow", "purple", "orange"];
let targetColor;
let score = 0;

const colorBox = document.getElementById("colorBox");
const optionsContainer = document.getElementById("options");
const gameStatus = document.getElementById("gameStatus");
const scoreDisplay = document.getElementById("score");
const newGameButton = document.getElementById("newGameButton");

// Function to start a new game
function startGame() {
    // Pick a random color
    targetColor = colors[Math.floor(Math.random() * colors.length)];
    colorBox.style.backgroundColor = targetColor;
    
    // Clear previous options
    optionsContainer.innerHTML = "";

    // Create 6 color buttons
    colors.forEach(color => {
        const btn = document.createElement("button");
        btn.style.backgroundColor = color;
        btn.setAttribute("data-testid", "colorOption");
        btn.addEventListener("click", () => checkGuess(color));
        optionsContainer.appendChild(btn);
    });

    // Reset status message
    gameStatus.textContent = "Make a guess!";
}

// Function to check if the guess is correct
function checkGuess(selectedColor) {
    if (selectedColor === targetColor) {
        gameStatus.textContent = "Correct! ✅👏🏻";
        gameStatus.classList.add("correct");
        score++;
    } else {
        gameStatus.textContent = "Wrong! Try again.";
        gameStatus.classList.add("wrong");
    }

    // Update score
    scoreDisplay.textContent = score;

    // Remove animation class after a short delay
    setTimeout(() => {
        gameStatus.classList.remove("correct", "wrong");
    }, 500);
}

// Event listener for new game button
newGameButton.addEventListener("click", startGame);

// Start the game on page load
startGame();
