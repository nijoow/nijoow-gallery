"use client";
import React from "react";
import { Canvas } from "react-three-fiber";
import * as THREE from "three";

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
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
      </Canvas>
    </div>
  );
};

export default ThreeDGallery;
