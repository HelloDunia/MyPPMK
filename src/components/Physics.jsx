export const graphPhysicsOptions = {
  enabled: true, // Enable physics simulation
  barnesHut: {
    gravitationalConstant: -10000, // Reduced repulsion for smoother, less aggressive movement
    springConstant: 0.02, // Softer springs for more fluid connections
    springLength: 100, // Slightly longer springs to allow more movement
    damping: 0.1, // Increased damping to make movement smoother and less erratic, like in water
    centralGravity: 0.3, // Reduced central gravity to allow more spread and subtle drift
    avoidOverlap: 0.5, // Helps prevent nodes from overlapping too much, contributing to a more natural flow
  },
  // Disable stabilization to allow continuous, subtle movement
  stabilization: {
    enabled: true, // Crucial for continuous movement
    iterations: 10, // No iterations needed if disabled
  },
};