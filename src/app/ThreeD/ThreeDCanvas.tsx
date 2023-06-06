"use client";
import React, { useRef } from "react";
import { Canvas } from "react-three-fiber";
import { Stats } from "@react-three/drei";
import Floor from "./Floor";
import CameraControl from "./CameraControl";
import Character from "./Character";

const ThreeDCanvas = () => {
  const aspectRatio =
    typeof window !== "undefined" ? window.innerWidth / window.innerHeight : 1;
  const canvasRef = useRef<HTMLCanvasElement>(null);

  return (
    <div className="w-screen h-screen bg-violet-200">
      <Canvas
        ref={canvasRef}
        camera={{
          zoom: 30,
          position: [1, 1, 1],
          left: -1 * aspectRatio,
          right: 1 * aspectRatio,
          top: 1,
          bottom: -1,
          near: -1000,
          far: 1000,
        }}
        shadows
        orthographic
      >
        <Stats />
        <axesHelper />
        <gridHelper />
        <ambientLight />{" "}
        <directionalLight
          visible
          position={[2.5, 8, 5]}
          castShadow
          shadow-mapSize={[2048, 2048]}
        />
        <CameraControl />
        <Floor />
        <Character />
      </Canvas>
    </div>
  );
};

export default ThreeDCanvas;
