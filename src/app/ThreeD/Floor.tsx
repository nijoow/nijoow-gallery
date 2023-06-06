"use client";

import { useState } from "react";
import { useRecoilState } from "recoil";
import { targetPositionAtom } from "../recoil/atom";

const Floor = () => {
  const [isPressed, setIsPressed] = useState(false);
  const [, setTargetPosition] = useRecoilState(targetPositionAtom);
  return (
    <mesh
      rotation-x={-Math.PI / 2}
      receiveShadow
      onPointerDown={(e) => {
        setIsPressed(true);
        setTargetPosition(e.point);
      }}
      onPointerUp={(e) => {
        setIsPressed(false);
      }}
      onPointerMove={(e) => {
        if (isPressed) setTargetPosition(e.point);
      }}
    >
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial />
    </mesh>
  );
};
export default Floor;
