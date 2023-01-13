import { OrbitControls, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useEffect } from "react";
import Floor from "../components/Floor";
import Model from "../components/Model";
import styles from "../styles/home.module.css";
function Models() {
  return (
    <div className="webgl" style={{ height: "300vh" }}>
      <div className={styles.scene} id="canvas-container">
        <Canvas
          shadows={true}
          className={styles.canvas}
          camera={{
            position: [-6, 7, 7],
          }}
        >
          <Floor />
          <Suspense>
            <Model />
            <Stars />
            {/* <OrbitControls /> */}
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}

export default Models;
