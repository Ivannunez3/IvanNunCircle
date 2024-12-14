function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop(); // Stops draw() from looping automatically
  generateCircles(50); // Generate 50 circles
}

function draw() {
  background(220); // Light gray background

  // Loop through the circles and draw each one
  for (let circle of circles) {
    circle.draw();
  }
}

// Function to generate circles with random attributes
function generateCircles(num) {
  for (let i = 0; i < num; i++) {
    let x = random(width); // Random x-coordinate
    let y = random(height); // Random y-coordinate
    let r = random(10, 50); // Random radius between 10 and 50
    let circleColor = color(random(255), random(255), random(255), 150); // Random color with transparency
    circles.push(new Circle(x, y, r, circleColor)); // Add new Circle to the array
  }
}
