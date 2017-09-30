function setup() {
  createCanvas(300, 300);
  background(255, 0, 200);
  img = loadImage("assets/poop.svg");
}

function draw() {
  image(img, 0, 0)
}
