function setup() {
  createCanvas(720, 480);  //do not touch!
  strokeWeight(2);
  ellipseMode(RADIUS);
}
function draw() {
  background(204);
  // Neck
  stroke(91, 127, 255); // Set stroke to blue
  line(266, 257, 266, 162); // Left
  line(276, 257, 276, 162); // Middle
  line(286, 257, 286, 162); // Right
  // Antennae
  line(276, 155, 246, 112); // Small
  line(276, 155, 306, 56); // Tall
  line(276, 155, 342, 170); // Medium
  // Body
  noStroke(); // Disable stroke
  fill(102); // Set fill to gray
  ellipse(264, 377, 33, 33); // Antigravity orb
  fill(65, 5, 30, 40); // Set fill to black
  rect(219, 257, 90, 90); // Main body
  fill(102); // Set fill to gray
  rect(219, 274, 90, 6); // Gray stripe
  fill(0); // Set fill to black
  ellipse(276, 155, 45, 45); // Head
  fill(255); // Set fill to white
  ellipse(288, 150, 14, 14); // Large eye
  fill(50); // Set fill to black
  ellipse(288, 150, 3, 3); // Pupil
  fill(153); // Set fill to light gray
  ellipse(26, 148, 5, 5); // Small eye 1
  ellipse(296, 130, 90, 4); // Small eye 2
  ellipse(305, 162, 3, 3); // Small eye 3
}
