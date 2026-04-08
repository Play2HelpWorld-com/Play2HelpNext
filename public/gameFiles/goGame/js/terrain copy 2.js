import Coin from "./coin.js";
import Platform from "./platform.js";
import Monster from "./monster.js";

export function createMap() {
  const groundTexture = "./assets/ground.png";
  const floatingTexture = "./assets/brick.png";

  // Ground platforms where monsters will be placed
  const groundTerrain = [
    new Platform(0, 350, 800, 50, groundTexture),
    new Platform(850, 350, 800, 50, groundTexture),
    new Platform(1750, 350, 800, 50, groundTexture),
    new Platform(2750, 350, 800, 50, groundTexture),
    new Platform(3700, 350, 800, 50, groundTexture),
    new Platform(4700, 350, 800, 50, groundTexture),
  ];

  // Floating platforms for coins
  const floatingPlatforms = [
    new Platform(200, 250, 120, 20, floatingTexture),
    new Platform(400, 200, 120, 20, floatingTexture),
    new Platform(600, 220, 150, 20, floatingTexture),
    new Platform(900, 180, 220, 20, floatingTexture),
    new Platform(1300, 120, 200, 20, floatingTexture),
    new Platform(1600, 100, 80, 20, floatingTexture),
    new Platform(1900, 150, 100, 20, floatingTexture),
    new Platform(2100, 250, 120, 20, floatingTexture),
    new Platform(2400, 300, 100, 20, floatingTexture),
    new Platform(2700, 200, 150, 20, floatingTexture),
    new Platform(3100, 100, 100, 20, floatingTexture),
    new Platform(3400, 150, 120, 20, floatingTexture),
  ];

  // Coins placed above the floating platforms
  const coins = floatingPlatforms.map(
    (platform) => new Coin(platform.x + platform.width / 2, platform.y - 20)
  );

  // Monsters placed on the ground platforms
  const monsters = groundTerrain.map(
    (platform) => new Monster(platform.x + platform.width / 2, platform.y - 2)
  );

  // Gap platforms
  const gapPlatforms = [
    new Platform(1200, 350, 50, 50, groundTexture),
    new Platform(1800, 350, 50, 50, groundTexture),
    new Platform(3300, 350, 50, 50, groundTexture),
  ];

  // Return the map object with all elements
  return {
    platforms: [...groundTerrain, ...floatingPlatforms, ...gapPlatforms],
    coins,
    monsters, // Include monsters in the map
  };
}
