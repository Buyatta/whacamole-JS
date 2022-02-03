//incoporating all squares
const squares = document.querySelectorAll(".square");
//store the mole in a variable
const mole = document.querySelector(".mole");
//store the  timeleft in an element
const timeLeft = document.querySelector("#time-left");
//store the score in an element
const score = document.querySelector("#score");
//when to stop timer
let currentTime = 10;

let result = "";
let timerId = null;

let hitPosition;

//The whacmole to appear randomly will use a function and foreach
function randomSquare() {
  squares.forEach((square) => {
    square.classList.remove("mole");
  });
  //for the mole to appear randomly
  let randomSquare = squares[Math.floor(Math.random() * 9)];
  randomSquare.classList.add("mole");
  //to target id
  hitPosition = randomSquare.id;
}
//to hit a score when square is hit by mouse
squares.forEach((square) => {
  square.addEventListener("mousedown", () => {
    if (square.id == hitPosition) {
      result++;
      //display score
      score.textContent = result;
      hitPosition = null;
    }
  });
});

// set a timer for the randomsquare
function moveMole() {
  timerId = setInterval(randomSquare, 500);
}
//call function
moveMole();

//to stop time and display timeleft
function countDown() {
  currentTime--;
  timeLeft.textContent = currentTime;
  //notification use if
  if (currentTime == 0) {
    clearInterval(countDownTimerId);
    clearInterval(timerId);
    alert("game over" + result);
  }
}
let countDownTimerId = setInterval(countDown, 1000);
