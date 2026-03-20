let userScore = 0;
let compScore = 0;

const userScoreEl = document.getElementById("user-score");
const compScoreEl = document.getElementById("comp-score");
const messageEl = document.querySelector("h2");
const choices = document.querySelectorAll(".choice");
const resetBtn = document.getElementById("reset");

const emojis = {
    rock: "👊",
    paper: "✋",
    scissors: "✌️"
};

function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
}

function playGame(userChoice) {
    const compChoice = getComputerChoice();

    if (userChoice === compChoice) {
        draw(userChoice, compChoice);
    } else if (
        (userChoice === "rock" && compChoice === "scissors") ||
        (userChoice === "paper" && compChoice === "rock") ||
        (userChoice === "scissors" && compChoice === "paper")
    ) {
        win(userChoice, compChoice);
    } else {
        lose(userChoice, compChoice);
    }
}

function win(userChoice, compChoice) {
    userScore++;
    userScoreEl.innerText = userScore;
    messageEl.innerText = `You win🏆 ! ${emojis[userChoice]} beats ${emojis[compChoice]}`;
}

function lose(userChoice, compChoice) {
    compScore++;
    compScoreEl.innerText = compScore;
    messageEl.innerText = `You lose💔 ! ${emojis[compChoice]} beats ${emojis[userChoice]}`;
}

function draw(userChoice, compChoice) {
    messageEl.innerText = `It's a draw! Both chose ${emojis[userChoice]}`;
}

choices.forEach(choice => {
    choice.addEventListener("click", () => {
        playGame(choice.id);
    });
});

resetBtn.addEventListener("click", () => {
    userScore = 0;
    compScore = 0;
    userScoreEl.innerText = "0";
    compScoreEl.innerText = "0";
    messageEl.innerText = "Make your move!!";
});
