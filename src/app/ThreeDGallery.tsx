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
      </Canvas>
    </div>
  );
};

export default ThreeDGallery;
