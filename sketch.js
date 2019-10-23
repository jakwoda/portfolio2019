let w = document.documentElement.clientWidth;
let h = 10000;
function setup() {
  createCanvas(w, h);
}
function draw() {
  if (mouseIsPressed) {
    fill(0);
    rect(mouseX, mouseY, 25, 25);
  }
}

function doubleClicked() {
  background(255);
}
