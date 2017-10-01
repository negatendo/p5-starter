// some configurable stuff
var canvasWidth = 1000;
var canvasHeight = 700;
var emojiImageDimension = 23;

// for example content
var booped = false;

function setup() {
  // 1024x768 draw area
  var canvas = createCanvas(1024, 768);
  // utilize html container for placement
  canvas.parent('container');
  background('white');
}

function preload() {
  soundFormats('wav');

  // load sample sounds
  img = loadImage("template-assets/docomo-emoji/0157.png");
  snd = loadSound("template-assets/nanoloop-samples/NL23_LR13.wav");

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
  var centerX = (canvasWidth/2) + (emojiImageDimension/2);
  var centerY = (canvasHeight/2) + (emojiImageDimension/2);
  image(img, centerX, centerY);
  snd.setVolume(0.1);
  snd.play();
  booped = true;
}

