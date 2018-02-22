// MOVEMENT CONTROLS FOR SHIP
  
  // declare & initialize movement variables
  var xPosition = 100;
  var yPosition = 100;
  var xSpeed = 1;
  var ySpeed = 0;
  var maxSpeed = 5;
  
  // declare & initialize controller variables
  var upPressed = 0;
  var downPressed = 0;
  var leftPressed = 0;
  var rightPressed = 0;
  
  
  function keyDown(playerKeyPress)
  {
    var keyPressed = playerKeyPress.which;
    if (keyPressed == 38)
      upPressed = 1;
    if (keyPressed == 40)
      downPressed = 1;
    if (keyPressed == 37)
      leftPressed = 1;
    if (keyPressed == 39)
      rightPressed = 1;
  }
  
  function keyUp(playerKeyPress)
  {
    var keyPressed = playerKeyPress.which;
    if (keyPressed == 38)
      upPressed = 0;
    if (keyPressed == 40)
      downPressed = 0;
    if (keyPressed == 37)
      leftPressed = 0;
    if (keyPressed == 39)
      rightPressed = 0;
  }
  
  function slowDownX()
  {
    if (xSpeed > 0)
      xSpeed = xSpeed - 1;
    if (xSpeed < 0)
      xSpeed = xSpeed + 1;
  }
  
  function slowDownY()
  {
    if (ySpeed > 0)
      ySpeed = ySpeed - 1;
    if (ySpeed < 0)
      ySpeed = ySpeed + 1;
  }
  
  
  
  var shipHealth = 1000;
  var loopCounter = 0;
  var asteroidCounter = 0;
  