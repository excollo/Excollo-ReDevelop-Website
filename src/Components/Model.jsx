import React from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";

const Model = () => {
  const { scene } = useGLTF("/models/eLogo.glb"); // Hooks must be called at the top level

  return (
    <Canvas
      camera={{ position: [10, 10, 5], fov: 100 }}
      style={{ width: "100%", height: "600px" }} // Increase height here
    >
      <ambientLight intensity={1} />
      <directionalLight position={[10, 10, 10]} />
      <OrbitControls />
      <primitive object={scene} />
    </Canvas>
  );
};

// Ensure GLTF model is preloaded to avoid async issues
useGLTF.preload("/models/eLogo.glb");

export default Model;
