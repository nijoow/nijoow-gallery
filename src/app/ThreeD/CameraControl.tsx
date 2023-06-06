"use client";

import { useThree } from "react-three-fiber";

const CameraControl = () => {
  const { camera } = useThree();
  camera.lookAt(0, 0, 0);
  return null;
};

export default CameraControl;
