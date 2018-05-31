var shapes;
var currentShape;
function setup() {
  // put setup code here
  createCanvas(1280, 720, "WebGL");
  // noCursor();
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
  currentShape.move(mouseX, mouseY);
  currentShape.draw();
}

function mouseClicked() {
  shapes.push(currentShape);
  var tmp = currentShape;
  if (temp.type === 1 || currentShape.type === undefined) {
    currentShape = new Circle(mouseX, mouseY, 50, [random(0, 255), random(0, 255), random(0, 255)]);
  } else {
    currentShape = new Square(mouseX, mouseY, 50, [random(0, 255), random(0, 255), random(0, 255)]);
  }
}

function keyTyped() {
  if (key === 'z' && shapes.length > 0) {
    currentShape = shapes.pop();
  } else if (key === 'x') {
    temp = currentShape;
    if (temp.type == 1) {
      currentShape = new Circle(temp.x, temp.y, temp.size, temp.rgb);
    } else {
      currentShape = new Square(temp.x, temp.y, temp.size, temp.rgb);
    }
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