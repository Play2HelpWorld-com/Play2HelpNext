// terrain.js
import Platform from "./platform.js";

// Helper function to create ground platforms in a row
function createGround(startX, numPlatforms, width, height, spacing) {
  const ground = [];
  for (let i = 0; i < numPlatforms; i++) {
    ground.push(
      new Platform(startX + i * (width + spacing), 350, width, height)
    );
  }
  return ground;
}

// Helper function to create floating platforms at varying heights and positions
function createFloatingPlatforms(platformsData) {
  return platformsData.map(
    (data) => new Platform(data.x, data.y, data.width, data.height)
  );
}

// Helper function to create gap platforms for challenges
function createGapPlatforms(gapData) {
  return gapData.map(
    (data) => new Platform(data.x, 350, data.width, data.height)
  );
}

export function createMap() {
  // Create the main ground with configurable number of platforms
  const groundTerrain = createGround(0, 5, 800, 50, 50);

  // Define floating platforms with data for easy adjustments
  const floatingPlatformData = [
    { x: 200, y: 250, width: 100, height: 20 },
    { x: 400, y: 180, width: 120, height: 20 },
    { x: 600, y: 200, width: 150, height: 20 },
    { x: 900, y: 150, width: 100, height: 20 },
    { x: 1300, y: 250, width: 200, height: 20 },
    { x: 1600, y: 100, width: 80, height: 20 },
    { x: 1900, y: 200, width: 100, height: 20 },
    { x: 2100, y: 300, width: 120, height: 20 },
    { x: 2400, y: 180, width: 100, height: 20 },
    { x: 2700, y: 250, width: 150, height: 20 },
    { x: 3100, y: 150, width: 100, height: 20 },
    { x: 3400, y: 220, width: 120, height: 20 },
  ];
  const floatingPlatforms = createFloatingPlatforms(floatingPlatformData);

  // Define gap platforms for additional challenges
  const gapData = [
    { x: 1200, width: 50, height: 50 },
    { x: 1800, width: 50, height: 50 },
    { x: 3300, width: 50, height: 50 },
  ];
  const gapPlatforms = createGapPlatforms(gapData);

  return [...groundTerrain, ...floatingPlatforms, ...gapPlatforms];
}
