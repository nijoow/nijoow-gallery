"use client";
import React, { RefObject, useRef } from "react";
import { Canvas, useFrame, useThree } from "react-three-fiber";
import THREE, {
  BufferGeometry,
  Material,
  Mesh,
  NormalBufferAttributes,
  Vector3,
} from "three";
import { Stats } from "@react-three/drei";
import { useControls } from "leva";

const CameraControl = () => {
  const { camera } = useThree();
  camera.lookAt(0, 0, 0);
  return null;
};
const Box = () => {
  const meshRef =
    useRef<Mesh<BufferGeometry<NormalBufferAttributes>, Material | Material[]>>(
      null
    );
  useFrame((state, delta, xrFrame) => {
    if (meshRef.current) meshRef.current.rotation.y += 0.004;
  });
  return (
    <mesh ref={meshRef} castShadow>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={"red"} />
    </mesh>
  );
};
const ThreeDGallery = () => {
  const aspectRatio =
    typeof window !== "undefined" ? window.innerWidth / window.innerHeight : 1;
  return (
    <div className="w-screen h-screen bg-violet-200">
      <Canvas
        camera={{
          zoom: 50,
          position: [1, 5, 5],
          left: -1 * aspectRatio,
          right: 1 * aspectRatio,
          top: 1,
          bottom: -1,
          near: 0.1,
          far: 1000,
        }}
        shadows
        orthographic
      >
        <Stats />
        <axesHelper />
        <gridHelper />
        <CameraControl />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box />
        <directionalLight visible position={[1, 1, 1]} castShadow />
      </Canvas>
    </div>
  );
};

export default ThreeDGallery;
