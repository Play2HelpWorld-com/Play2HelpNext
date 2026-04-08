let playerSpeed = 20;

export const HandleKeyboardEvents = (player, canvas) => {
  const leftKey = document.getElementById('left');
  const rightKey = document.getElementById('right');
  const topKey = document.getElementById('top');
  const downKey = document.getElementById('down');

  // Move functions
  const startMovingLeft = () => { player.movingLeft = true; };
  const stopMovingLeft = () => { player.movingLeft = false; };

  const startMovingRight = () => { player.movingRight = true; };
  const stopMovingRight = () => { player.movingRight = false; };

  const startMovingUp = () => { player.movingUp = true; };
  const stopMovingUp = () => { player.movingUp = false; };

  const startMovingDown = () => { player.movingDown = true; };
  const stopMovingDown = () => { player.movingDown = false; };

  document.addEventListener('keydown', (event) => {
    switch (event.key) {
      case 'ArrowLeft':
        startMovingLeft();
        break;
      case 'ArrowRight':
        startMovingRight();
        break;
      case 'ArrowUp':
        startMovingUp();
        break;
      case 'ArrowDown':
        startMovingDown();
        break;
    }
  });

  document.addEventListener('keyup', (event) => {
    switch (event.key) {
      case 'ArrowLeft':
        stopMovingLeft();
        break;
      case 'ArrowRight':
        stopMovingRight();
        break;
      case 'ArrowUp':
        stopMovingUp();
        break;
      case 'ArrowDown':
        stopMovingDown();
        break;
    }
  });

  leftKey.addEventListener('touchstart', (event) => { event.preventDefault(); startMovingLeft(); });
  leftKey.addEventListener('touchend', (event) => { event.preventDefault(); stopMovingLeft(); });

  rightKey.addEventListener('touchstart', (event) => { event.preventDefault(); startMovingRight(); });
  rightKey.addEventListener('touchend', (event) => { event.preventDefault(); stopMovingRight(); });

  topKey.addEventListener('touchstart', (event) => {event.preventDefault(); startMovingUp();});
  topKey.addEventListener('touchend', (event) => {event.preventDefault(); stopMovingUp();});

  downKey.addEventListener('touchstart', (event) => {event.preventDefault();startMovingDown();});
  downKey.addEventListener('touchend', (event) => {event.preventDefault(); stopMovingDown();});


  const updatePlayerPosition = () => {
    if (player.movingLeft) {
      moveLeft(player);
    }
    if (player.movingRight) {
      moveRight(player, canvas);
    }
    if (player.movingUp) {
      moveUp(player);
    }
    if (player.movingDown) {
      moveDown(player, canvas);
    }
    requestAnimationFrame(updatePlayerPosition);
  }
  updatePlayerPosition();
}

const moveLeft = (player) => {
  player.positionX = Math.max(player.positionX - player.speed, 0);
}

const moveRight = (player, canvas) => {
  player.positionX = Math.min(player.positionX + player.speed, canvas.width - player.width);
}

const moveUp = (player) => {
  player.positionY = Math.max(player.positionY - player.speed, 0)
}

const moveDown = (player, canvas) => {
  player.positionY = Math.min(player.positionY + player.speed, canvas.height - player.height)
}