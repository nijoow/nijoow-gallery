"use client";
import gsap from "gsap";
import React, { useRef } from "react";
import { useFrame, useThree } from "react-three-fiber";
import { useRecoilValue } from "recoil";
import { BufferGeometry, Material, Mesh, NormalBufferAttributes } from "three";
import { targetPositionAtom } from "../recoil/atom";

const Character = () => {
  const meshRef =
    useRef<Mesh<BufferGeometry<NormalBufferAttributes>, Material | Material[]>>(
      null
    );
  const targetPosition = useRecoilValue(targetPositionAtom);

  const { camera } = useThree();
  useFrame(({ mouse }) => {
    if (meshRef.current) {
      gsap.to(meshRef.current.position, {
        x: targetPosition.x,
        y: targetPosition.y,
        z: targetPosition.z,
        duration: 1,
      });
    }
  });

  return (
    <mesh ref={meshRef} castShadow>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color={"red"} />
    </mesh>
  );
};

export default Character;
