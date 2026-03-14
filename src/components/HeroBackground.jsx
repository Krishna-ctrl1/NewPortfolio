import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';

const QuantumParticles = () => {
  const pointsRef = useRef();
  
  // Generate 5000 particles in a sphere using standard trigonometry
  const particlesPosition = useMemo(() => {
    const count = 5000;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 1.5 * Math.cbrt(Math.random());
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);     // x
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta); // y
      positions[i * 3 + 2] = r * Math.cos(phi);                   // z
    }
    return positions;
  }, []);

  // Animate the rotation on every frame
  useFrame((state, delta) => {
    pointsRef.current.rotation.x -= delta / 10;
    pointsRef.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={pointsRef} positions={particlesPosition} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#8b5cf6" // Deep tech purple (you can change this hex code!)
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const HeroBackground = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-screen z-0 bg-black">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <QuantumParticles />
      </Canvas>
    </div>
  );
};

export default HeroBackground;