import logo from './logo.svg';
import styles from './App.module.css';
import { createSignal, onMount, Ref } from 'solid-js';
import * as THREE from 'three';
import { Camera, Renderer, Scene } from 'three';

export const [getScene, setScene] = createSignal<Scene>();
export const [getCamera, setCamera] = createSignal<Camera>();
export const [getRenderer, setRenderer] = createSignal<Renderer>();

function App() {
  let threeRef: Ref<HTMLDivElement | undefined> = undefined;

  onMount(() => {
    boostrap3(threeRef);
    animate();
  })

  return (
    <div class={styles.App}>
      <div class={styles.Scene} ref={threeRef}></div>
      <div class={styles.Controls}>
        <button onClick={() => addBox()}>spawn</button>
      </div>
    </div>
  );
}

/**
 * Create and append the new scene, camera and renderer for three.js
 * @param {Ref} container ref to the container element for the renderer
 */
function boostrap3(container): void {
  const scene = new THREE.Scene();
  setScene(scene);

  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 5;
  setCamera(camera);

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  setRenderer(renderer);

  container.appendChild(renderer.domElement);
}

function animate() {
  const scene = getScene();
  const camera = getCamera();
  const renderer = getRenderer();

  if (scene && camera && renderer) {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }
}

export default App;
