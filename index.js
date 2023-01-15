let randomNumber = Math.floor(Math.random() * 100) + 1;
let guesses = document.querySelector(".guesses");
let lastResult = document.querySelector(".lastResult");
let lowOrHigh = document.querySelector(".lowOrHigh");
let guessSubmit = document.querySelector(".guessSubmit");
let guessField = document.querySelector(".guessField");
let guessCount = 1;
let resetButton;

function checkGuess() {
  let userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = "Anda Memasukan : ";
  }

  guesses.textContent += userGuess + " ";

  if (userGuess === randomNumber) {
    lastResult.textContent = "SELAMAT! Tebakan Anda Benar!";
    lastResult.style.backgroundColor = "green";
    lowOrHigh.textContent = "";
    setGameOver();
  } else if (guessCount === 3) {
    lastResult.textContent = "Yahh kamu gagal terus nih. Ayo coba lagi!";
    lowOrHigh.textContent = "";
    setGameOver();
  } else {
    lastResult.textContent = "Ups Salah!";
    lastResult.style.backgroundColor = "red";
    if (userGuess < randomNumber) {
      lowOrHigh.textContent = "Angka yang anda masukan Terlalu Rendah!";
    } else if (userGuess > randomNumber) {
      lowOrHigh.textContent = "Angka yang anda masukan Terlalu Tinggi!";
    }
  }

  guessCount++;
  guessField.value = "";
}

guessSubmit.addEventListener("click", checkGuess);

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement("button");
  resetButton.textContent = "Mulai lagi";
  document.body.appendChild(resetButton);
  resetButton.addEventListener("click", resetGame);
}

function resetGame() {
  guessCount = 1;
  let resetSession = document.querySelectorAll(".resultSection p");
  for (let i = 0; i < resetSession.length; i++) {
    resetSession[i].textContent = "";
  }

  resetButton.parentNode.removeChild(resetButton);
  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = "";
  guessField.focus();
  lastResult.style.backgroundColor = "white";
  randomNumber = Math.floor(Math.random() * 100) + 1;
}
