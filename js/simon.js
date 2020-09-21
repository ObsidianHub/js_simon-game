let order = [],
  playerOrder = [],
  flash,
  turn,
  good,
  compTurn,
  intervalId,
  strict = false,
  noise = true,
  on = false,
  win;

const turnCounter = document.querySelector("#turn"),
  topLeft = document.querySelector("#topleft"),
  topRight = document.querySelector("#topright"),
  bottomLeft = document.querySelector("#bottomleft"),
  bottomRight = document.querySelector("#bottomright"),
  strictButton = document.querySelector("#strict"),
  onButton = document.querySelector("#on"),
  startButton = document.querySelector("#start");

strictButton.addEventListener("click", (event) => {
  if (strictButton.checked == true) {
    strict = true;
  } else {
    strict = false;
  }
});
