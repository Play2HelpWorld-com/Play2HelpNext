import Coin from "./coin.js";
import Platform from "./platform.js";
import Monster from "./monster.js";
import { groundTerrain, floatingPlatforms } from "./contentData.js";

export function createMap() {
  const groundTexture = "./assets/ground.png";
  const monsterTexture = "./assets/monster.png";

  // Get the canvas and calculate the y-coordinate for ground platforms
  const canvas = document.getElementById("gameCanvas");
  const groundY = canvas.height - 50; // 50 is the height of the ground platform

  // Coins placed above the floating platforms
  const coins = floatingPlatforms(groundY).map(
    (platform) => new Coin(platform.x + platform.width / 2, platform.y - 20)
  );

  // Monsters placed on the ground platforms
  const monsters = groundTerrain(groundY).map(
    (platform) =>
      new Monster(
        platform.x + platform.width / 2,
        platform.y - 2,
        monsterTexture
      )
  );

  // Gap platforms
  const gapPlatforms = [
    new Platform(1200, groundY, 50, 50, groundTexture),
    new Platform(1800, groundY, 50, 50, groundTexture),
    new Platform(3300, groundY, 50, 50, groundTexture),
  ];

  // Return the map object with all elements
  return {
    platforms: [
      ...groundTerrain(groundY),
      ...floatingPlatforms(groundY),
      ...gapPlatforms,
    ],
    coins,
    monsters, // Include monsters in the map
  };
}
