import { Engine } from "@babylonjs/core/Engines/engine";
import { HemisphericLight } from "@babylonjs/core/Lights/hemisphericLight";
import { Vector3 } from "@babylonjs/core/Maths/math.vector";
import { MeshBuilder } from "@babylonjs/core/Meshes/meshBuilder";
import { Scene } from "@babylonjs/core/scene";
import { BaseScene } from "../lib";
import { FreeCamera } from "@babylonjs/core/Cameras/freeCamera";

export class BasicScene extends BaseScene {
  createScene = (engine: Engine) => {
    const scene = new Scene(engine);

    this.createCamera(scene);

    return scene;
  };

  createCamera = (scene: Scene) => {
    const camera = new FreeCamera("camera", new Vector3(0, 0, -20), scene);
    camera.attachControl();

    return camera;
  };

  createEnvironment = async (scene: Scene) => {
    // add light
    const light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);

    // add a box to the scene
    const box = MeshBuilder.CreateBox("box", { size: 5 }, this.scene);
    box.position = new Vector3(0, 0, 0);

    // add a sphere to the scene
    const sphere = MeshBuilder.CreateSphere(
      "sphere",
      { diameter: 5 },
      this.scene
    );
    sphere.position = new Vector3(-10, 0, 0);

    // add a torus know to the scene
    const torusKnot = MeshBuilder.CreateTorusKnot(
      "torusknot",
      { radius: 3 },
      this.scene
    );
    torusKnot.position = new Vector3(10, 0, 0);
  };
}
