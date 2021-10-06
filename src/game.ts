// Create an entity for the main scene model
const baseScene = new Entity();
// Give it a component for the model itself
baseScene.addComponent(new GLTFShape("models/scene.glb"));

// Add it to the engine for rendering
engine.addEntity(baseScene);
baseScene.addComponent(
  new OnPointerDown((e) => {
    log("myEntity was clicked", e)
  })
)

