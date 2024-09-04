const angleStep = 137.5;
const diamater = 10;
let angle = 0, distance = diamater;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#FBBC04");
  frameRate(10);
}
function draw() {
  const p = new p5.Vector(cos(radians(angle)) * distance, sin(radians(angle)) * distance);
  push();
  translate(width / 2, height / 2);
  noStroke();
  fill(0);
  circle(p.x, p.y, diamater);
  pop();
  angle += angleStep;
  distance += diamater / 720 * angleStep;
  if (p.x > width / 2 || p.y >= height / 2) { 
    background("#FBBC04");
    angle = distance = diamater;
  }
}
