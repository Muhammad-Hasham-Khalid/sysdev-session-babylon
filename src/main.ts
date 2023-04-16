import "./style.css";
import {
  Scene,
  Engine,
  FreeCamera,
  Vector3,
  HemisphericLight,
  MeshBuilder,
} from "@babylonjs/core";

async function main() {
  const canvas = document.querySelector("canvas");
  const engine = new Engine(canvas);

  const scene = new Scene(engine);

  // add camera
  const camera = new FreeCamera("camera", new Vector3(0, 0, -20), scene);
  camera.attachControl();

  // add light
  new HemisphericLight("light", new Vector3(0, 1, 0), scene);

  // add object
  const box = MeshBuilder.CreateBox("box", { size: 5 }, scene);
  box.position = new Vector3(0, 0, 0);

  engine.runRenderLoop(() => {
    scene.render();
  });
}

document.addEventListener("DOMContentLoaded", main);
