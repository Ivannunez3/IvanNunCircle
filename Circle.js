// Define a class for the circles
class Circle {
  constructor(x, y, r, color) {
    this.x = x; // x-coordinate
    this.y = y; // y-coordinate
    this.r = r; // radius
    this.color = color; // color
  }

  // Method to draw the circle
  draw() {
    fill(this.color);
    noStroke();
    ellipse(this.x, this.y, this.r * 2);
  }
}

let circles = []; // Array to store circle objects
