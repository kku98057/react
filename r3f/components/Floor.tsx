import React, { forwardRef, MutableRefObject, useEffect, useRef } from "react";

function Floor() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshNormalMaterial />
    </mesh>
  );
}

export default Floor;
