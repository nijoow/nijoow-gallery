"use client";
import React from "react";
import { Canvas } from "react-three-fiber";
import * as THREE from "three";

const ThreeDGallery = () => {
  return (
    <div className="w-screen h-screen">
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
      </Canvas>
    </div>
  );
};

export default ThreeDGallery;
