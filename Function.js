let body = document.querySelector("body");
let button = document.querySelector(".theme-button");
let start = document.querySelector(".start");
let uptext = document.querySelector(".header");
let button2 = document.querySelector(".input1");
let bg = 0;
let user_score = 0;
let comp_score = 0;

let comp_board = document.querySelector(".comp");
let uu = document.querySelector(".uu");

const choice = document.querySelectorAll(".img");
const msg = document.querySelector(".noti");

const choice_comp = () => {
  const list = ["rock", "paper", "scissors"];
  return list[Math.floor(Math.random() * 3)];
};

const drawGame = () => {
  msg.innerText = "Game was Draw. Play again.";
  msg.style.backgroundColor = "grey";
};

const showWinner = (userWin, userChoice, choice_comp) => {
  if (userWin === "Win") {
    let user_board = document.querySelector(".user");
    user_score++;
    user_board.innerText = user_score;
    msg.innerText = `You win! Your ${userChoice} beats ${choice_comp}`;
    msg.style.backgroundColor = "green";
  } else if (userWin === "Lose") {
    comp_score++;
    comp_board.innerText = comp_score;
    msg.innerText = `You lost. ${choice_comp} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  } else if (userWin === "Draw") {
    msg.innerText = `Game was Draw as Both of You Choose ${choice_comp}.Play again.`;
    msg.style.backgroundColor = "yellow";
  }
};

const gamePlay = (user_Choice, compChoice) => {
  let userWin = "Win";
  if (user_Choice == compChoice) {
    userWin = "Draw";
  } else {
    if (user_Choice === "rock") {
      if (compChoice === "paper") {
        userWin = "Lose";
      }
    } else if (user_Choice === "paper") {
      if (compChoice === "scissors") {
        userWin = "Lose";
      }
    } else {
      if (compChoice === "rock") {
        userWin = "Lose";
      }
    }
  }
  showWinner(userWin, user_Choice, compChoice);
};

choice.forEach((choices) => {
  choices.addEventListener("click", () => {
    const userChoice = choices.getAttribute("id");
    console.log(userChoice);
    comp_choice = choice_comp();
    console.log(comp_choice);
    gamePlay(userChoice, comp_choice);
  });
});

start.addEventListener("click", () => {
  let name = document.querySelector("input").value;
  uu.innerHTML = `${name} : <div class="user">${user_score}</div> `;
});

let user_board = document.querySelector(".user");
let mag1 = document.querySelector(".mag1");
let mag2 = document.querySelector(".mag2");

button.onclick = () => {
  if (bg === 0) {
    bg = 1;
    body.style.backgroundColor = "black";
    button.style.background = "black";
    body.style.color = "white";
    uptext.style.color = "white";
    button.innerHTML = "<i class='fa-solid fa-sun'></i>";
    button.style.border = "2px solid white";
    button.style.color = "white";
    msg.style.color = "white";
    user_board.style.color = "white";
    comp_board.style.color = "white";
    mag1.style.color = "white";
    mag2.style.color = "white";
    start.style.color = "white";
    start.style.background = "black";
    button2.style.background = "black";
    button2.style.color = "white";
  } else {
    bg = 0;
    body.style.backgroundColor = "white";
    button.style.background = "white";
    body.style.background = "white";
    uptext.style.color = "black";
    button.style.color = "black";
    button.innerHTML = "<i class='fa-solid fa-moon'></i>";
    button.style.border = "2px solid black";
    button.style.color = "black";
    msg.style.color = "black";
    user_board.style.color = "black";
    comp_board.style.color = "black";
    mag1.style.color = "black";
    mag2.style.color = "black";
    start.style.color = "black";
    start.style.background = "white";
    button2.style.background = "white";
    button2.style.color = "black";
  }
};
