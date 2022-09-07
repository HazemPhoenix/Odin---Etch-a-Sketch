let color = "black";

let click = true;
function populateBoard(size) {
  const container = document.querySelector("#container");
  const btn = document.querySelector("#btn");
  const squares = document.querySelectorAll("div");

  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    let square = document.createElement("div");
    square.addEventListener("mouseover", colorSquare);
    square.style.backgroundColor = "white";
    container.appendChild(square);
  }
}

function changeSize(input) {
  if (input >= 2 && input <= 100) {
    populateBoard(input);
  } else {
    console.log("too many squares");
  }
}

function colorSquare() {
  if (click) {
    if (color == "random") {
      this.style.backgroundColor = randomColor();
    } else {
      this.style.backgroundColor = color;
    }
  }
}

function changeColor(colorChoice) {
  color = colorChoice;
}
function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function reset() {
  const textBox = document.querySelector("#text");
  const container = document.querySelector("#container");
  const squares = container.querySelectorAll("div");
  squares.forEach((div) => div.remove());
  textBox.value = null;
}

document.querySelector("body").addEventListener("click", () => {
  click = !click;
});
