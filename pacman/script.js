var world = [
  // the world is a multi dimensional array
  // 1 represents the brick, 0 represents coin
  // 3 represents empty,
  [1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 1, 0, 0, 1],
  [1, 1, 1, 1, 0, 1, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 1, 1, 0, 1],
  [1, 0, 0, 0, 2, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 0, 1, 0, 1],
  [1, 0, 0, 1, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1],
];

// create a score variable
var score = 0;

// create a pacman object that determines starting position
var pacman = {
  x: 4,
  y: 5,
  direction: "right",
  hasMoved: false,
};

// create a cherry object positioned in pacman's starting position
var cherry = {
  x: 4,
  y: 5,
  // a visible property to track the cherry's visibility
  visible: true,
  // an eaten property to track if the cherry has been eaten
  eaten: false,
};

// create a variable to control cherry visibility timer
var cherryVisibilityTimer = null;
// create a variable to control cherry reappear timer
var cherryReappearTimer = null;

function displayWorld() {
  var output = "";
  // create the world
  // use a nested for loop to make a world grid of
  // rows and columns i is like x, j is like y
  for (var i = 0; i < world.length; i++) {
    // add a row to output
    output += "\n<div class='row'>\n";
    for (var j = 0; j < world[i].length; j++) {
      // if the current value at (i,j) equals 1 then it's brick
      if (world[i][j] === 1) {
        // add a brick at grid value (i,j)
        output += "<div class='brick'></div>";
      }
      // if the current value at (i,j) equals 0 then it's coin
      else if (world[i][j] === 0) {
        // add a coin at grid value (i,j)
        output += "<div class='coin'></div>";
      }
      // if the current value at (i,j) equals 2 then it's an empty space
      else if (world[i][j] === 2) {
        // add an empty space at grid value (i,j)
        output += "<div class='empty'></div>";
      }
    }
    output += "\n</div>";
  }
  //console.log(output);
  document.getElementById("world").innerHTML = output;
}

function displayPacman() {
  // get the pacman image and create a variable so the image can turn
  var pacmanElement = document.getElementById("pacman");
  // initial placement of the image
  pacmanElement.style.top = pacman.y * 20 + "px";
  pacmanElement.style.left = pacman.x * 20 + "px";
  // using direction to rotate the image correctly
  // and scaleX to flip the image (-1) when necessary
  if (pacman.direction === "right") {
    // no rotation
    pacmanElement.style.transform = "rotate(0deg) scaleX(1)";
  } else if (pacman.direction === "left") {
    // no rotation, just flip
    pacmanElement.style.transform = "rotate(0deg) scaleX(-1)";
  } else if (pacman.direction === "up") {
    // rotate, but don't flip
    pacmanElement.style.transform = "rotate(270deg) scaleX(1)";
  } else if (pacman.direction === "down") {
    // rotate, but don't flip
    pacmanElement.style.transform = "rotate(90deg) scaleX(1)";
  }
}

function displayScore() {
  document.getElementById("score").innerHTML = score;
}

// Check if cherry should be visible based on Pacman's position
function updateCherryVisibility() {
  var cherryElement = document.getElementById("cherry");
  
  // Check if Pac-Man is on the cherry's position
  if (pacman.x === cherry.x && pacman.y === cherry.y) {
    // If Pac-Man is on the cherry's position, hide the cherry
    cherryElement.style.display = "none";
    cherry.visible = false;
  } else {
    // If Pac-Man is not on the cherry's position
    if (cherry.eaten) {
      // If cherry has been eaten and is reappearing, wait 3 seconds
      setTimeout(function() {
        cherry.visible = true;
        updateCherryVisibility();
      }, 3000);
    } else if (cherry.visible) {
      // Show the cherry if it’s supposed to be visible
      cherryElement.style.display = "block";
      cherryElement.style.top = cherry.y * 20 + "px";
      cherryElement.style.left = cherry.x * 20 + "px";
    }
  }
}

function startCherryVisibilityTimer() {
  if (cherryVisibilityTimer) {
    clearInterval(cherryVisibilityTimer);
  }
  cherryVisibilityTimer = setInterval(function () {
    if (!cherry.eaten) {
      cherry.visible = !cherry.visible;
      updateCherryVisibility();
    }
  }, 3000);
}

function startCherryReappearTimer() {
  if (cherryReappearTimer) {
    clearTimeout(cherryReappearTimer);
  }
  cherryReappearTimer = setTimeout(function () {
    cherry.eaten = false;
    cherry.visible = true;
    updateCherryVisibility();
  }, 3000);
}

// this function returns positive that the world space given is not a brick
function canMoveTo(x, y) {
  return world[y] && world[y][x] !== 1;
}

// Handle cherry visibility and reappearance
function checkCherryEaten() {
  if (pacman.x === cherry.x && pacman.y === cherry.y) {
    if (cherry.visible && !cherry.eaten) {
      cherry.visible = false;
      cherry.eaten = true;
      score += 50;
      displayScore();
      // Start reappear timer !! but not here because this is started when 
      // pacman lands on the cherry not when pacman has left the cherry
      startCherryReappearTimer(); 
      // I want the cherry timer to start after he has moved off the cherry space
    }
  } else {
    // Cherry will not be visible if Pac-Man is on its position
    updateCherryVisibility();
  }
}

displayWorld();
displayPacman();
displayScore();

// start the cherry visibility timer
startCherryVisibilityTimer();

// get pacman to move

// updated from tutorial as 'keyCode' is depreciated

document.addEventListener("keydown", function (e) {
  var moved = false;

  // key pressed to go left (left arrow or a)
  if (e.key === "ArrowLeft" || e.key === "a") {
    // canMoveTo checks the next space to the left
    if (canMoveTo(pacman.x - 1, pacman.y)) {
      pacman.x -= 1;
      // state the direction pacman is facing
      pacman.direction = "left";
      moved = true;
    }
    // key pressed to go right (right arrow or d)
  } else if (e.key === "ArrowRight" || e.key === "d") {
    // canMoveTo checks the next space to the right
    if (canMoveTo(pacman.x + 1, pacman.y)) {
      pacman.x += 1;
      // state the direction pacman is facing
      pacman.direction = "right";
      moved = true;
    }
    // key pressed to go up (up arrow or w)
  } else if (e.key === "ArrowUp" || e.key === "w") {
    // canMoveTo checks the next space upwards
    if (canMoveTo(pacman.x, pacman.y - 1)) {
      pacman.y -= 1;
      // state the direction pacman is facing
      pacman.direction = "up";
      moved = true;
    }
    // key pressed to go down (down arrow or s)
  } else if (e.key === "ArrowDown" || e.key === "s") {
    // canMoveTo checks the next space downwards
    if (canMoveTo(pacman.x, pacman.y + 1)) {
      pacman.y += 1;
      // state the direction pacman is facing
      pacman.direction = "down";
      moved = true;
    }
  }
  // console.log(e.keyCode); // show the key code value to use for movement

  // if pacman has moved
  if (moved) {
    pacman.hasMoved = true;
    // if the position in the world that pacman is in is equal to is a coin space(0)
    if (world[pacman.y][pacman.x] === 0) {
      // assign it as an empty space (2)d
      world[pacman.y][pacman.x] = 2;
      // and increase score by 10
      score += 10;
      // then update world
      displayWorld();
      // and update score
      displayScore();
    }

    // update pacman at the new position
    displayPacman();
    // check if cherry is eaten
    checkCherryEaten(); 
    // Update cherry visibility based on Pacman's new position
    updateCherryVisibility();
  }
});
