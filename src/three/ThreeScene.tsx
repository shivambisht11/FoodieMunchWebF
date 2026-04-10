import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Canvas } from '@react-three/fiber';

interface ThreeSceneProps {
  children: React.ReactNode;
}

const ThreeScene: React.FC<ThreeSceneProps> = ({ children }) => {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 10, 5]} intensity={1.5} castShadow />
        <Suspense fallback={null}>
          <Environment preset="sunset" />
          {children}
          <ContactShadows position={[0, -1.8, 0]} opacity={0.4} scale={10} blur={2.5} far={4} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ThreeScene;
