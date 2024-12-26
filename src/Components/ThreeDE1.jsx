import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import { gsap } from "gsap";
const FONT_URL =
  "https://excollo.github.io/Outfit-Font-Strong/Outfit_ExtraBold_Regular.json";
const ThreeDE1 = ({ onComplete }) => {
  const mountRef = useRef(null);
  const textRef = useRef(null);
  useEffect(() => {
    if (!mountRef.current) return;
    const WIDTH = 300;
    const HEIGHT = 600;
    // Scene setup
    const scene = new THREE.Scene();
    scene.background = null;
    const camera = new THREE.PerspectiveCamera(75, WIDTH / HEIGHT, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(WIDTH, HEIGHT);
    mountRef.current.appendChild(renderer.domElement);
    const ambientLight = new THREE.AmbientLight(0x000000, 0.5);
    scene.add(ambientLight);
    const fontLoader = new FontLoader();
    fontLoader.load(
      FONT_URL,
      (font) => {
        const textGeometry = new TextGeometry("e", {
          font: font,
          fontWeight: "900",
          size: 40,
          height: 2,
          bevelEnabled: true,
          bevelThickness: 3,
          bevelSize: 0.05,
          bevelSegments: 5,
        });
        textGeometry.center();
        textGeometry.computeBoundingBox();
        const bbox = textGeometry.boundingBox;
        const size = new THREE.Vector3();
        bbox.getSize(size);
        const uvAttribute = textGeometry.getAttribute("position");
        const uvArray = new Float32Array(uvAttribute.count * 2);
        for (let i = 0; i < uvAttribute.count; i++) {
          const x = uvAttribute.getX(i);
          const y = uvAttribute.getY(i);
          uvArray[i * 2] = (x - bbox.min.x) / size.x;
          uvArray[i * 2 + 1] = (y - bbox.min.y) / size.y;
        }
        textGeometry.setAttribute("uv", new THREE.BufferAttribute(uvArray, 2));
        const shaderMaterial = new THREE.ShaderMaterial({
          uniforms: {
            color1: { value: new THREE.Color(0x0218ff) }, // Start color
            color2: { value: new THREE.Color(0xaa55fe) }, // Middle color
            color3: { value: new THREE.Color(0xdc67ff) }, // End color
            gradientSplit1: { value: 0.6 }, // First split point
            gradientSplit2: { value: 1.0 }, // Second split point
            time: { value: 0.0 }, // For animation (optional, if needed in vertex shader)
          },
          vertexShader: `
              varying vec2 vUv;
              varying vec3 vNormal;
              uniform float time;
              void main() {
                vUv = uv;
                vNormal = normal;
                vec3 displacedPosition = position + normal * sin(time * 1.0) * 0.2;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(displacedPosition, 1.0);
              }
            `,
          fragmentShader: `
              uniform vec3 color1; // Start color (dim)
              uniform vec3 color2; // Middle color
              uniform vec3 color3; // End color (bright)
              uniform float gradientSplit1; // First split point
              uniform float gradientSplit2; // Second split point
              varying vec2 vUv;
              void main() {
                vec3 gradientColor;
                if (vUv.x < gradientSplit1) {
                  // First section: dynamic mix between color1 and color2
                  float t = vUv.x / gradientSplit1;
                  t = 0.5 * (1.0 - cos(3.14159 * t)); // Sinusoidal interpolation
                  gradientColor = mix(color1, color2, t);
                } else if (vUv.x < gradientSplit2) {
                  // Second section: dynamic mix between color2 and color3
                  float t = (vUv.x - gradientSplit1) / (gradientSplit2 - gradientSplit1);
                  t = 0.5 * (1.0 - cos(3.14159 * t)); // Sinusoidal interpolation
                  gradientColor = mix(color2, color3, t);
                } else {
                  // Third section: optional (back to middle color or keep it)
                  float t = (vUv.x - gradientSplit2) / (1.0 - gradientSplit2);
                  t = 0.5 * (1.0 - cos(3.14159 * t)); // Sinusoidal interpolation
                  gradientColor = mix(color3, color2, t); // Back to middle color
                }
                gl_FragColor = vec4(gradientColor, 1.0);
              }
            `,
        });
        const textMesh = new THREE.Mesh(textGeometry, shaderMaterial);
        textRef.current = textMesh;
        scene.add(textMesh);
        const animate = (time) => {
          requestAnimationFrame(animate);
          textMesh.rotation.y += 0.02;
          renderer.render(scene, camera);
        };
        animate();
      },
      undefined,
      (error) => console.error("Error loading font:", error)
    );
    camera.position.z = 50;
    const handleResize = () => {
      const newWidth = mountRef.current.offsetWidth;
      const newHeight = mountRef.current.offsetHeight;
      renderer.setSize(newWidth, newHeight);
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      if (mountRef.current) mountRef.current.removeChild(renderer.domElement);
    };
  }, []);
  useEffect(() => {
    if (textRef.current) {
      textRef.current.position.set(0, 0, 0); // Initial position at the center
      const timeline = gsap.timeline({
        onComplete: () => {
          if (onComplete) onComplete();
        },
      });
      timeline.to(textRef.current.rotation, {
        y: Math.PI * 4,
        duration: 2,
        ease: "power2.inOut",
      });
      timeline.to(textRef.current.position, {
        x: 2, // Move slightly to the right
        duration: 1,
        ease: "power2.out",
      });
    }
  }, [onComplete]);
  return (
    <div
      ref={mountRef}
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000000",
        overflow: "hidden", // Ensure the content does not overflow
      }}
    />
  );
};
export default ThreeDE1;
