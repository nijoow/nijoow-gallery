"use client";
import React, { RefObject, useRef } from "react";
import { Canvas, useFrame, useThree } from "react-three-fiber";
import { BufferGeometry, Material, Mesh, NormalBufferAttributes } from "three";

const CameraControl = () => {
  const { camera } = useThree();
  camera.lookAt(0, 0, 0);

  return null;
};
const ThreeDGallery = () => {
  return (
    <div className="w-screen h-screen bg-violet-200">
      <Canvas
        camera={{
          left: -window.innerWidth / 2,
          right: window.innerWidth / 2,
          top: window.innerHeight / 2,
          bottom: -window.innerHeight / 2,
          near: 0.1,
          far: 1000,
          position: [10, 10, 10],
          zoom: 3,
        }}
        orthographic
      >
        <CameraControl />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box />
      </Canvas>
    </div>
  );
};

export default ThreeDGallery;
