import * as THREE from "three";
import { OrbitControls } from "https://cdn.jsdelivr.net/npm/three@0.179.1/examples/jsm/controls/OrbitControls.js";

const sceneEl = document.querySelector("#scene");
const loading = document.querySelector("#loading");
const fallback = document.querySelector("#fallback");
const materialSelect = document.querySelector("#material");
const speedInput = document.querySelector("#speed");
const wireframeInput = document.querySelector("#wireframe");
const resetButton = document.querySelector("#reset");

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

let renderer;
let scene;
let camera;
let controls;
let core;
let shell;
let rings;
let nodes = [];
let speed = reducedMotion ? 0 : Number(speedInput.value);
let visible = true;

function showFallback(message) {
  sceneEl.hidden = true;
  fallback.hidden = false;
  loading.hidden = true;
  if (message) fallback.querySelector("p").textContent = message;
}

function init() {
  try {
    if (!("WebGLRenderingContext" in window)) {
      throw new Error("WebGL is not available in this browser.");
    }

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x050c15);

    camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.set(0, 1.2, 7);

    renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance"
    });

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setAnimationLoop(animate);
    sceneEl.appendChild(renderer.domElement);

    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.minDistance = 4;
    controls.maxDistance = 10;

    scene.add(new THREE.HemisphereLight(0x9edfff, 0x080d18, 1.8));

    const key = new THREE.PointLight(0x5ee7ff, 25, 15);
    key.position.set(3, 4, 4);
    scene.add(key);

    const fill = new THREE.PointLight(0x6f7cff, 18, 12);
    fill.position.set(-4, -2, 2);
    scene.add(fill);

    const group = new THREE.Group();
    scene.add(group);

    core = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.25, 4),
      new THREE.MeshStandardMaterial({
        color: 0x5ee7ff,
        metalness: 0.55,
        roughness: 0.24,
        emissive: 0x092d38,
        emissiveIntensity: 0.65
      })
    );
    group.add(core);

    shell = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.65, 2),
      new THREE.MeshPhysicalMaterial({
        color: 0x4265ff,
        transparent: true,
        opacity: 0.16,
        roughness: 0.12,
        metalness: 0.2,
        wireframe: true
      })
    );
    group.add(shell);

    rings = new THREE.Group();

    [1.95, 2.25, 2.55].forEach((radius, i) => {
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(radius, 0.018, 8, 96),
        new THREE.MeshBasicMaterial({
          color: [0x5ee7ff, 0x6f7cff, 0x9a6cff][i],
          transparent: true,
          opacity: 0.8
        })
      );

      ring.rotation.set(i * 0.65, i * 0.9, i * 0.2);
      rings.add(ring);
    });

    group.add(rings);

    const nodeGeometry = new THREE.SphereGeometry(0.07, 12, 12);
    const nodeMaterial = new THREE.MeshBasicMaterial({ color: 0xa8f4ff });

    for (let i = 0; i < 24; i++) {
      const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
      const angle = (i / 24) * Math.PI * 2;
      const radius = 2.15 + (i % 3) * 0.18;

      node.position.set(
        Math.cos(angle) * radius,
        Math.sin(angle * 2) * 0.6,
        Math.sin(angle) * radius
      );

      node.userData = {
        angle,
        radius,
        offset: i * 0.13
      };

      nodes.push(node);
      group.add(node);
    }

    const grid = new THREE.GridHelper(
      12,
      24,
      0x17334a,
      0x0b1d2e
    );

    grid.position.y = -2.2;
    grid.material.transparent = true;
    grid.material.opacity = 0.45;
    scene.add(grid);

    resize();
    window.addEventListener("resize", resize, { passive: true });

    materialSelect.addEventListener("change", updateMaterial);
    speedInput.addEventListener("input", () => {
      speed = Number(speedInput.value);
    });

    wireframeInput.addEventListener("change", () => {
      core.material.wireframe = wireframeInput.checked;
    });

    resetButton.addEventListener("click", resetScene);

    const visibilityObserver = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );

    visibilityObserver.observe(sceneEl);

    loading.hidden = true;
    fallback.hidden = true;
  } catch (error) {
    console.error("3D scene failed to initialize:", error);
    showFallback(
      "The 3D scene could not initialize in this browser. A readable static fallback is shown instead."
    );
  }
}

function resize() {
  if (!renderer || !camera) return;

  const width = sceneEl.clientWidth;
  const height = sceneEl.clientHeight;

  if (!width || !height) return;

  renderer.setSize(width, height, false);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
}

function updateMaterial() {
  const materials = {
    cyan: [0x5ee7ff, 0x092d38],
    violet: [0x9b7cff, 0x241044],
    amber: [0xffbf69, 0x4b2400],
    white: [0xe9f4ff, 0x26384d]
  };

  const [color, emissive] = materials[materialSelect.value];

  core.material.color.setHex(color);
  core.material.emissive.setHex(emissive);
}

function resetScene() {
  camera.position.set(0, 1.2, 7);
  controls.target.set(0, 0, 0);
  controls.update();

  speedInput.value = reducedMotion ? "0" : "0.45";
  speed = Number(speedInput.value);

  materialSelect.value = "cyan";
  updateMaterial();

  core.material.wireframe = false;
  wireframeInput.checked = false;
}

function animate(time) {
  if (!renderer || !visible) return;

  const t = time * 0.001;

  core.rotation.y += 0.002 + speed * 0.002;
  core.rotation.x = Math.sin(t * 0.45) * 0.12;

  shell.rotation.y -= 0.001 + speed * 0.001;

  rings.rotation.y += 0.001 + speed * 0.0015;
  rings.rotation.x = Math.sin(t * 0.25) * 0.12;

  nodes.forEach((node) => {
    const angle =
      node.userData.angle +
      t * (0.12 + speed * 0.22);

    node.position.x =
      Math.cos(angle) * node.userData.radius;

    node.position.z =
      Math.sin(angle) * node.userData.radius;

    node.position.y =
      Math.sin(angle * 2 + node.userData.offset) * 0.65;
  });

  controls.update();
  renderer.render(scene, camera);
}

init();
