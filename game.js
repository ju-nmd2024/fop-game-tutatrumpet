let x = 200;
let y = 200;
let characterX = 200;
let characterY = 100;
let startX = 230;
let startY = 150;
let rectX = 240;
let rectY = 300;
let rectWidth = 200;
let rectHeight = 100;

//scale landing
let s = 0.5;

//game logic
let velocityY = 1.5;
let gravity = 5;
let acceleration = 0.1;

//game state variables
let gamesState = true;

function setup() {
  createCanvas(700, 600);
  background(255);
}

//background
function gameBackground() {
  push();
  noStroke();
  fill(173, 216, 230);
  rect(0, 0, 700, 500);

  fill(0, 150, 50);
  rect(0, 500, 700, 100);
  pop();
}

//clouds
function clouds(x, y) {
  push();
  fill(255);
  noStroke();
  ellipse(x + 10, y - 10, 80, 80);
  ellipse(x + 70, y - 40, 80, 80);
  ellipse(x + 130, y - 10, 80, 80);

  rect(x + 14, y - 20, 120, 50);
  pop();
}

//flower
function landing(x, y) {
  push();
  strokeWeight(15 * s);
  stroke(0, 100, 0);
  line(x * s + 115 * s, y * s, x * s + 100 * s, y * s + 400 * s);

  noStroke();
  //pettals
  fill(255, 0, 255);
  ellipse(x * s + 70 * s, y * s - 50 * s, 90 * s, 130 * s);

  //pettals
  push();
  translate(x * s + 157 * s, y * s - 50 * s);
  rotate(0.2);
  fill(255, 0, 255);
  ellipse(0 * s, 0 * s, 90 * s, 130 * s);
  pop();

  //pettals
  push();
  translate(x * s + 210 * s, y * s - 10 * s);
  rotate(1.2);
  ellipse(0 * s, 0 * s, 90 * s, 140 * s);
  pop();

  //pettals
  push();
  translate(x * s + 210 * s, y * s + 40 * s);
  rotate(1.8);
  ellipse(0 * s, 0 * s, 90 * s, 140 * s);
  pop();

  //pettals
  push();
  translate(x * s + 140 * s, y * s + 60 * s);
  rotate(2.7);
  ellipse(0 * s, 0 * s, 90 * s, 140 * s);
  pop();

  //pettals
  push();
  translate(x * s + 70 * s, y * s + 60 * s);
  rotate(3.5);
  ellipse(0 * s, 0 * s, 90 * s, 140 * s);
  pop();

  //pettals
  push();
  translate(x * s + 10 * s, y * s + 30 * s);
  rotate(4.2);
  ellipse(0 * s, 0 * s, 90 * s, 140 * s);
  pop();

  //pettals
  push();
  translate(x * s, y * s - 20 * s);
  rotate(-1.0);
  ellipse(0 * s, 0 * s, 90 * s, 140 * s);
  pop();

  //center
  fill(255, 255, 0);
  ellipse(x * s + 110 * s, y * s + 5 * s, 230 * s, 90 * s);
  pop();
}

//bee
function character(x, y) {
  //right wing
  push();
  fill(255, 255, 255);
  translate(x + 10, y - 50);
  rotate(1.9);
  ellipse(0, 0, 53, 33);
  pop();

  //body
  fill(255, 225, 0);
  ellipse(x, y, 100, 70);

  //stripes
  push();
  strokeWeight(10);
  line(x + 20, y - 27, x + 20, y + 27);
  line(x - 5, y - 30, x - 5, y + 30);
  line(x - 30, y - 23, x - 30, y + 23);
  pop();

  //left wing
  push();
  fill(255, 255, 255);
  translate(x - 20, y - 50);
  rotate(1.0);
  ellipse(0, 0, 55, 35);
  pop();

  //eyes
  fill(0, 0, 0);
  ellipse(x + 34, y, 5, 10);
  ellipse(x + 42, y, 5, 10);
}

function ground() {
  push();
  noStroke();
  fill(0, 128, 0);
  rect(0, 550, 700, 200);
  pop();
}

//chatGPT
function resetGame() {
  characterX = 200; // Initial horizontal position of the character
  characterY = 100; // Initial vertical position of the character
  velocityY = 1.5; // Initial velocity
  acceleration = 0.1; // Gravity or acceleration reset
  gamesState = true; // Reset game state
}

// the start screen
function startScreen() {
  background(173, 216, 230);

  clouds(260, 220);

  clouds(500, 100);
  clouds(50, 100);
  clouds(260, 350);

  fill(0);
  textSize(35);
  text("START", 273, 200, 100);
  textSize(25);
  text("INSTRUCTIONS", 240, 330, 100);

  fill(10, 10, 200);

  textSize(80);
  text("Sweet Landing", 100, 60, 1000);

  push();
  translate(150, 400);
  rotate(0.3);
  character(0, 0);
  pop();

  ground();
  landing(950, 800);
  landing(300, 1000);
}

// tha instructions screen
function instructionsScreen() {
  background(173, 216, 230);
  clouds(500, 100);
  clouds(50, 100);

  ground();
  landing(950, 800);
  landing(300, 1000);

  push();
  translate(150, 440);
  rotate(0.3);
  character(0, 0);
  pop();

  fill(0);
  textSize(40);
  text("INSTRUCTIONS", 200, 150, 200);

  textSize(25);
  text(
    "Use the arrow keys and help the bee land on the flower.",
    150,
    230,
    400
  );
  text("click anywhere to go back to start", 250, 400, 200);

  fill(255);
  rect(350, 320, 50, 50, 10);
  rect(290, 320, 50, 50, 10);
  rect(410, 320, 50, 50, 10);

  //arrows
  push();
  strokeWeight(5);
  line(375, 340, 375, 360);
  line(375, 340, 365, 350);
  line(375, 340, 385, 350);
  line(305, 348, 325, 348);
  line(305, 348, 315, 340);
  line(305, 348, 315, 356);
  line(425, 348, 445, 348);
  line(445, 348, 435, 340);
  line(445, 348, 435, 357);
  pop();
} //hej

//the result screen
function resultScreen() {
  background(173, 216, 230);

  textSize(80);
  fill(0, 150, 0);
  if (characterY <= 440 && characterX >= 430 && characterX <= 470) {
    text("YOU LANDED!", 80, 230, 600);
  } else {
    fill(255, 0, 0);
    text("GAME OVER!", 100, 230, 1000);
  }
}

//the game
function gameScreen() {
  gameBackground();
  clouds(300, 100);
  clouds(500, 200);
  clouds(70, 200);
  landing(800, 900);

  character(characterX, characterY);
  if (gamesState === true) {
    //landing
    if (characterX >= 450 && characterY >= 440) {
      velocityY = 0;
      acceleration = 0;
      characterY = 430;
      characterX = 450;
      state = "result";
    } else {
      // Movement logic
      characterY = characterY + velocityY;
      velocityY = velocityY + acceleration;

      if (characterY > 580) {
        gamesState = false;
        state = "result";
      }

      if (velocityY > 7) {
        gamesState = false;
        state = "result";
      }

      //gravity logicn
      if (keyIsDown(38)) {
        velocityY = velocityY - 0.7;
      }
    }
    //Horizontal movement
    //left
    if (keyIsDown(37)) {
      characterX -= 3;
    }
    //right
    if (keyIsDown(39)) {
      characterX += 3;
    }
  }
}

let state = "start";

function draw() {
  startScreen();

  if (state === "start") {
    startScreen();
  } else if (state === "game") {
    gameScreen();
  } else if (state === "result") {
    resultScreen();
  } else if (state === "instructions") {
    instructionsScreen();
  }
}

function mouseClicked() {
  if (
    mouseX >= startX &&
    mouseX <= startX + rectWidth &&
    mouseY >= startY &&
    mouseY <= startY + rectHeight
  ) {
    state = "game";
  } else if (
    mouseX >= rectX &&
    mouseX <= rectX + rectWidth &&
    mouseY >= rectY &&
    mouseY <= rectY + rectHeight
  ) {
    state = "instructions";
  } else if (state === "instructions") {
    state = "start";
  } else if (state === "game") {
    state = "result";
  } else if (state === "result") {
    resetGame();
    state = "start";
  }
}
