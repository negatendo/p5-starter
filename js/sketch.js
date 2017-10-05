// for example content
var emojiImageDimension = 23;
var booped = false;

function setup() {
  // fullscreen draw area
  var canvas = createCanvas(windowWidth,windowHeight);
  // utilize html container for placement
  canvas.parent('container');
  background('black');
}

// use this to keep it fullscreen... er, fullbrowser
function windowResized() { resizeCanvas(windowWidth, windowHeight); }

function preload() {
  soundFormats('wav');
  // load sample sound
  snd = loadSound("template-assets/nanoloop-samples/NL23_LR13.wav");
  // load sample image
  img = loadImage("template-assets/docomo-emoji/0157.png");

}

function draw() {
  if (booped) {
    return;
  } else {
    doBoop();
  }
}

// example function that places image and plays sound
function doBoop() {
  var centerX = (windowWidth/2) + (emojiImageDimension/2);
  var centerY = (windowHeight/2) + (emojiImageDimension/2);
  image(img, centerX, centerY);
  snd.setVolume(0.1);
  snd.play();
  booped = true;
}

