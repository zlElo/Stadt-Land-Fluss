let count = 0;

function startGame() {
    // check all parameters
    const questionAmount = document.getElementById("questionAmountInp").value;
    const playerAmount = document.getElementById("playerAmountInp").value;

    if (questionAmount <= 0 || playerAmount <= 0) {
        alert("Es wurden nicht alle Werte richtig eingegeben!");
        return;
    }

    localStorage.setItem("questionAmount", questionAmount);
    localStorage.setItem("playerAmount", playerAmount);
    window.location.href = "game.html";
}

function game() {
    // random number between 1 and 70
    const random = Math.floor(Math.random() * 70) + 1;
    const task = document.getElementById("questionSpan");
    const letter = document.getElementById("letterSpan");

    // random letter from list
    const listLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    const randomLetter = Math.floor(Math.random() * 26) + 1;
    const randomLetterFromList = listLetter[randomLetter - 1];

    // get task from json
    fetch("data/tasks.json")
        .then(response => response.json())
        .then(data => {
            task.innerHTML = data[random];
            letter.innerHTML = randomLetterFromList; // Buchstabe anstelle von Zahl anzeigen
        });
}