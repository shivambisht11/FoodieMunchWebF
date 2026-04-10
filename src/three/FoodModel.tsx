import React, { useRef, useLayoutEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useGLTF, Float, Center } from '@react-three/drei';
import * as THREE from 'three';

const FoodModel: React.FC = () => {
  const meshRef = useRef<THREE.Group>(null);
  const { mouse } = useThree();
  
  // Loading the standardized OPTIMIZED high-quality burger model
  const { scene } = useGLTF('/burger_v2_opt.glb', true);

  useLayoutEffect(() => {
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.castShadow = true;
        child.receiveShadow = true;
        
        if (child.material) {
          // Force textures to use sRGB color space for correct color reproduction
          if (child.material.map) {
            child.material.map.colorSpace = THREE.SRGBColorSpace;
          }
          child.material.envMapIntensity = 1.8; // Boost reflections
          child.material.needsUpdate = true;
        }
      }
    });
  }, [scene]);

  useFrame(() => {
    if (!meshRef.current) return;

    // Smooth continuous rotation
    meshRef.current.rotation.y += 0.005;

    // Mouse Parallax (Subtle)
    const targetX = mouse.x * 0.5;
    const targetY = mouse.y * 0.3;
    
    // Scroll movement (Very subtle shift)
    const scrollY = window.scrollY;
    const scrollEffectY = scrollY * 0.0002;
    const scrollEffectX = scrollY * 0.0001;

    meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, targetX + scrollEffectX, 0.05);
    meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, targetY - scrollEffectY, 0.05);
  });

  return (
    <Float
      speed={1.5}
      rotationIntensity={0.5}
      floatIntensity={0.8}
    >
      <Center>
        <primitive 
          ref={meshRef} 
          object={scene} 
          scale={1.2} // Stable scale for background hero
          position={[0, 0, 0]}
          rotation={[0.3, 0, 0]}
        />
      </Center>
    </Float>
  );
};

// Pre-load the optimized model
useGLTF.preload('/burger_v2_opt.glb', true);

export default FoodModel;
