
var r = 100;
var g = 50;
var b=255;




function setup(){
noStroke();
  createCanvas(1200,400);
}

function draw() {
    background(100,47,38);
    let x1 = map(mouseX, 0, width, 25, 75);
    ellipse(x1, 25, 25, 25);
    let x2 = map(mouseX, 0, width, 0, 100, true);
    ellipse(x2, 75, 25, 25);
  }