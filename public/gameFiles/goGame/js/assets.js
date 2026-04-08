// Preload and store assets here for easy reference in other parts of the game
export const assets = {
  backgroundSky: new Image(),
  groundPlatform: new Image(),
  floatingPlatform: new Image(),
  tree: new Image(),
  bush: new Image(),
  plant: new Image(),
  terrain: new Image(),
  fullBackground: new Image(),
};

// Set the source of each image (use appropriate paths for your images)
assets.groundPlatform.src = "./assets/ground.png"; // Ground platform texture
assets.floatingPlatform.src = "./assets/brick.png"; // Brick platform texture
assets.backgroundSky.src = "../assets/sky.png"; // Sky background
assets.tree.src = "./assets/tree.png"; // Tree
assets.bush.src = "./assets/bush.png"; // Bush
assets.plant.src = "./assets/plant.png"; // Plant
assets.terrain.src = "./assets/terrain.png"; // Terrain texture
assets.fullBackground.src = "./assets/full-background.png"; // Full background image
