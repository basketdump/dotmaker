var circles;
var currentCircle;
function setup() {
  // put setup code here
  createCanvas(1280, 720, "WebGL");
  // noCursor();
  circles = []
  currentCircle = new Circle(mouseX, mouseY, 50, [random(0, 255), random(0, 255), random(0, 255)]);
}

function draw() {
  // put drawing code here
  background(0);
  for (var i = 0; i < circles.length; i++) {
    circles[i].draw();
  }
  currentCircle.move(mouseX, mouseY);
  currentCircle.draw();
}

function mouseClicked() {
  circles.push(currentCircle);
  currentCircle = new Circle(mouseX, mouseY, 50, [random(0, 255), random(0, 255), random(0, 255)]);
}

function keyTyped() {
  if (key === 'z') {
    currentCircle = circles.pop();
  }
}

class Circle {
  constructor(x, y, size, rgb) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.rgb = rgb;
  }

  draw() {
    fill(this.rgb[0], this.rgb[1], this.rgb[2]);
    ellipse(this.x, this.y, this.size, this.size);
  }

  move(x, y) {
    this.x = x;
    this.y = y;
  }
}