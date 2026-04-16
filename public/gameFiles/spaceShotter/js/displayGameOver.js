export const displayGameOver = (resetGame, ctx, canvas, score) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const panelWidth = Math.min(440, canvas.width - 40);
  const panelHeight = 260;
  const panelX = centerX - panelWidth / 2;
  const panelY = centerY - panelHeight / 2;

  const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, "rgba(5, 12, 35, 0.92)");
  gradient.addColorStop(1, "rgba(40, 15, 70, 0.92)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
  ctx.strokeStyle = "rgba(119, 231, 255, 0.9)";
  ctx.lineWidth = 3;
  roundRect(ctx, panelX, panelY, panelWidth, panelHeight, 18);
  ctx.fill();
  ctx.stroke();

  ctx.font = "800 42px Arial";
  ctx.fillStyle = "#ff7b8f";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("Mission Ended", centerX, panelY + 56);

  ctx.font = "800 30px Arial";
  ctx.fillStyle = "white";
  ctx.fillText(`Final Score: ${score}`, centerX, panelY + 108);

  drawButton(ctx, centerX - 120, panelY + 150, 110, 42, "Restart");
  drawButton(ctx, centerX + 10, panelY + 150, 130, 42, "Back");

  ctx.font = "600 14px Arial";
  ctx.fillStyle = "#9ff3ff";
  ctx.fillText("Tap a button to continue", centerX, panelY + 222);

  canvas.addEventListener('click', ((event) => handleGameOverClick(event, resetGame, ctx, canvas) ) );
}

const roundRect = (ctx, x, y, width, height, radius) => {
  const r = Math.min(radius, width / 2, height / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + width - r, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + r);
  ctx.lineTo(x + width, y + height - r);
  ctx.quadraticCurveTo(x + width, y + height, x + width - r, y + height);
  ctx.lineTo(x + r, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
};

const drawButton = (ctx, x, y, width, height, label) => {
  ctx.fillStyle = "#77e7ff";
  roundRect(ctx, x, y, width, height, 10);
  ctx.fill();
  ctx.strokeStyle = "rgba(255, 255, 255, 0.85)";
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.fillStyle = "#071126";
  ctx.font = "800 17px Arial";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(label, x + width / 2, y + height / 2);
};

const handleGameOverClick = (event, resetGame, ctx, canvas) => {
  const x = event.offsetX;
  const y = event.offsetY;

  if (x > canvas.width / 2 - 120 && x < canvas.width / 2 - 10 && y > canvas.height / 2 + 20 && y < canvas.height / 2 + 62) {
    restartGame(resetGame, ctx, canvas);
  }
  if (x > canvas.width / 2 + 10 && x < canvas.width / 2 + 140 && y > canvas.height / 2 + 20 && y < canvas.height / 2 + 62) { 
    window.location.href = "/";
  }
}


const restartGame = (resetGame, ctx, canvas) => {
  resetGame();
  console.log("Restarting game...");
}
