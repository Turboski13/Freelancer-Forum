const addShapeIntervalId = setInterval(addShape, 1000);
function addShape() {
  if (shapes.length >= maxShapes) {
    clearInterval(addShapeIntervalId);
  }
}
render(); /