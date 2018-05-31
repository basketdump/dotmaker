var shapes;
var currentShape;
function setup() {
  // put setup code here
  createCanvas(1280, 720, "WebGL");
  shapes = []
  currentShape = new Circle(mouseX, mouseY, 50, [random(0, 255), random(0, 255), random(0, 255)]);
  currentType = 0;
}

function draw() {
  // put drawing code here
  background(0);
  for (var i = 0; i < shapes.length; i++) {
    shapes[i].draw();
  }
  currentShape.move(lerp(currentShape.x, mouseX, 0.1), lerp(currentShape.y, mouseY, 0.1));
  currentShape.draw();
}

function mouseClicked() {
  shapes.push(currentShape);
  var tmp = currentShape;
  if (tmp.type === 0) {
    currentShape = new Circle(mouseX, mouseY, tmp.size, [random(0, 255), random(0, 255), random(0, 255)]);
  } else if (tmp.type == 1) {
    currentShape = new Square(mouseX, mouseY, tmp.size, [random(0, 255), random(0, 255), random(0, 255)]);
  }
  else {
    currentShape = new Circle(mouseX, mouseY, 50, [random(0, 255), random(0, 255), random(0, 255)]);
  }
}

function keyTyped() {
  if (key === 'z' && shapes.length > 0) {
    currentShape = shapes.pop();
  } else if (key === 'x') {
    tmp = currentShape;
    if (tmp.type == 1) {
      currentShape = new Circle(tmp.x, tmp.y, tmp.size, tmp.rgb);
    } else {
      currentShape = new Square(tmp.x, tmp.y, tmp.size, tmp.rgb);
    }
  }
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    currentShape.size += 5;
  } else if (keyCode === DOWN_ARROW) {
    currentShape.size -= 5;
  }
}

class Entity {
  // TYPES:
    // CIRCLE: 0
    // SQUARE: 1
  constructor(x, y, type) {
    this.x = x;
    this.y = y;
    this.type = type;
  }

move(x, y) {
  this.x = x;
  this.y = y;
  }
}

class Circle extends Entity {
  constructor(x, y, size, rgb) {
    super(x, y, 0);
    this.size = size;
    this.rgb = rgb;
  }

  draw() {
    fill(this.rgb[0], this.rgb[1], this.rgb[2]);
    ellipse(this.x, this.y, this.size, this.size);
  }
}

class Square extends Entity {
  constructor(x, y, size, rgb) {
    super(x - (size / 2), y - (size / 2), 1);
    this.size = size;
    this.rgb = rgb;
  }

  draw() {
    fill(this.rgb[0], this.rgb[1], this.rgb[2]);
    rect(this.x, this.y, this.size, this.size)
  }

  move(x, y) {
    this.x = x - this.size / 2;
    this.y = y - this.size / 2;
  }
}

class Triangle extends Entity {
  
}