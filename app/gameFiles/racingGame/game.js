const gameArea = document.getElementById('gameArea');
const playerCar = new Image();
playerCar.src = 'assets/car2.png';
const ctx = gameArea.getContext('2d');


let playerX = 125;
let playerY = 380;
const obstacleCars = [];

const obstacleCarImages = ['obsCar1.png', 'obsCar2.png', 'obsTruck.png', 'obsVan1.png'].map(src => {
    const img = new Image();
    img.src = `assets/${src}`;
    return img
})

const createObstacle = () => {
    obstacleCarImages.forEach((image) => {
        const obstacle = {
            img: image,
            x: Math.floor(Math.random() * (gameArea.width - image.width)),
            y: -image.height,
        }
        obstacleCars.push(obstacle);
    })
}

const drawPlayerCar = () => {
    ctx.drawImage(playerCar, playerX, playerY, 100, 100);
}

const drawObstacles = () => {
    obstacleCars.forEach((obstacleCar) => {
        if (obstacleCar.y > gameArea.height) {
            obstacleCar.y = -car.y
            obstacleCar.x = Math.floor(Math.random() * (gameArea.width - car.width))
        }
        ctx.drawImage(obstacleCar.img, obstacleCar.x, obstacleCar.y, obstacleCar.img.width, obstacleCar.img.height)
    })
}

const gameLoop = () => {
    ctx.clearRect(0, 0, gameArea.width, gameArea.height);
    drawPlayerCar();
    drawObstacles();
    requestAnimationFrame(gameLoop);
}

document.addEventListener('keydown', (event) => {
    const gameWidth = gameArea.width;

    if (event.key === 'ArrowLeft' && playerX > 0) {
        playerX -= 10;
    } else if (event.key === 'ArrowRight' && playerX < gameWidth - 100) {
        playerX += 10;
    }
});

playerCar.onload = () => {
    createObstacle();
    gameLoop();
}