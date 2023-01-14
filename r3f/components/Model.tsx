import { useLoader } from "@react-three/fiber";
import React, { Suspense } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { useGLTF } from "@react-three/drei";

function Model(props: any) {
  const gltfloader = useLoader(GLTFLoader, "./models/eff.glb", (loader) => {
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("./draco/");
    loader.setDRACOLoader(dracoLoader);
  });
  return <primitive object={gltfloader.scene} />;
}

export default Model;
