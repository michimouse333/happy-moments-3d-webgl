import React, { useRef } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from '@react-three/drei';
import { TextureLoader } from 'three';
import { MemoryBoxProps } from '@/types';
import './MemoryBox.css';

const MemoryBox: React.FC<MemoryBoxProps> = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const enabledOrbitControls = false;
  const modelPath = '/models/memory-box.glb';
  const texturePath = '/textures/wood-texture.jpg';
  const rotationSpeed = 0.005;

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += rotationSpeed;
    }
  });

  interface GLTFResult {
    nodes: {
      Cube: THREE.Mesh;
    };
    materials: {
      [name: string]: THREE.MeshStandardMaterial;
    };
  }

  const gltf = useLoader(GLTFLoader, modelPath) as GLTFResult;

  const woodTexture = new TextureLoader().load(texturePath);

  if (gltf) {
    Object.values(gltf.materials).forEach(material => {
      if (material instanceof THREE.MeshStandardMaterial) {
        material.map = woodTexture;
        material.needsUpdate = true;
      }
    });
  }

  return (
    <group aria-label="Memory Box Container">
      {gltf ? (
        <mesh
          ref={meshRef}
          position={[0, 0, 0]}
          scale={[1, 1, 1]}
          aria-label="Memory Box Model"
          rotation={[0, 0, 0]}
        >
          <primitive object={gltf.scene} dispose={null} />
          {enabledOrbitControls && (
            <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
          )}
        </mesh>
      ) : (
        <mesh ref={meshRef} aria-label="Fallback Memory Box">
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="red" />
        </mesh>
      )}
    </group>
  );
};

export default MemoryBox;