export const displayGameOver = (resetGame, ctx, canvas, score) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.font = "30px Arial";
  ctx.fillStyle = "red";
  ctx.textAlign = "center";
  ctx.fillText("Game Over", canvas.width / 2, canvas.height / 2);

  ctx.font = "20px Arial";
  ctx.fillStyle = "white";
  ctx.fillText(`Final Score: ${score}`, canvas.width / 2, canvas.height / 2 + 40);

  ctx.fillStyle = "blue";
  ctx.fillRect(canvas.width / 2 - 50, canvas.height / 2 + 80, 100, 30);
  ctx.fillStyle = "white";
  ctx.font= "15px Arial";
  ctx.fillText("Restart", canvas.width / 2, canvas.height / 2 + 100);

  ctx.fillStyle = "blue";
  ctx.fillRect(canvas.width / 2 - 50, canvas.height / 2 + 120, 100, 30);
  ctx.fillStyle = "white";
  ctx.font= "15px Arial";
  ctx.fillText("Back to Main", canvas.width / 2, canvas.height / 2 + 140);

  canvas.addEventListener('click', ((event) => handleGameOverClick(event, resetGame, ctx, canvas) ) );
}

const handleGameOverClick = (event, resetGame, ctx, canvas) => {
  const x = event.offsetX;
  const y = event.offsetY;

  if (x > canvas.width / 2 - 50 && x < canvas.width / 2 + 50 && y > canvas.height / 2 + 80 && y < canvas.height / 2 + 110) {
    restartGame(resetGame, ctx, canvas);
  }
  if (x > canvas.width /2 -50  && x < canvas.width /2 + 50 && y > canvas.height /2 + 120 && y < canvas.height /2 + 220) { 
    window.location.href = "/";
  }
}


const restartGame = (resetGame, ctx, canvas) => {
  resetGame();
  console.log("Restarting game...");
}