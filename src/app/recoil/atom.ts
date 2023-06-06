import { atom } from "recoil";
import { Vector2, Vector3 } from "three";

export const targetPositionAtom = atom({
  key: "TargetPosition",
  default: new Vector3(),
});
