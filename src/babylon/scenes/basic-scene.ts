import { FreeCamera } from "@babylonjs/core/Cameras/freeCamera";
import { Vector3 } from "@babylonjs/core/Maths/math.vector";
import { Scene } from "@babylonjs/core/scene";
import { BaseScene } from "../lib";

export class BasicScene extends BaseScene {
  camera?: FreeCamera;

  createScene = (engine = this.engine) => {
    const scene = new Scene(engine);

    this.camera = this.createCamera(scene);

    return scene;
  };

  createCamera = (scene: Scene) => {
    const cameraPosition = new Vector3(0, 0, 0);
    const camera = new FreeCamera("camera", cameraPosition, scene);
    camera.attachControl();

    return camera;
  };
}
