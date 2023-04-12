function setup() {
  createCanvas(400, 400);
  background("black")
  
  dots = [0];
  
  for (let dotsDrawn = 0; dotsDrawn < 20; dotsDrawn++) {
    let thisX = random(width);
    let thisY = random(height);
    let thisHue = random();
    
    dots[dotsDrawn] = new Dot(thisX, thisY, thisHue);
  }
}

function draw() {
  background("black");
 
  for (let dotsShown = 0; dotsShown < dots.length; dotsShown++) {
    dots[dotsShown].move();
    dots[dotsShown].show();
  }
}

class Dot {
  constructor(x, y, hue) {
    this.x = x;
    this.y = y;
    this.color = "hsla(" + parseInt(hue) + ", 100%, 90%, 1)";
    this.addX = 5;
  }
  move() {
    this.x = this.x + this.addX;
    this.y = this.y;
    let dotIsTooFarLeft = this.x < 0;
    let dotIsTooFarRight = this.x > width;
    if (dotIsTooFarLeft || dotIsTooFarRight) {
      this.addX = -this.addX;
    }
  }
  show() {
    push();
    fill(255);
    noStroke();
    ellipse(this.x, this.y, 50);
    pop();
  }
}
