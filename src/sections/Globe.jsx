import { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// A dotted planet with satellites on tilted orbits. Nods to OrbitAI and the
// Student Satellite Club. Follows the pointer gently.

function Planet() {
  const ref = useRef();
  const { positions, colors } = useMemo(() => {
    const n = 3200;
    const pos = new Float32Array(n * 3);
    const col = new Float32Array(n * 3);
    const golden = Math.PI * (3 - Math.sqrt(5));
    const warm = new THREE.Color('#ff5a1f');
    const cool = new THREE.Color('#ece8e1');
    for (let i = 0; i < n; i++) {
      const y = 1 - (i / (n - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const t = golden * i;
      const x = Math.cos(t) * r;
      const z = Math.sin(t) * r;
      pos.set([x * 1.5, y * 1.5, z * 1.5], i * 3);
      // Pseudo "continents": a few smooth bands get the warm colour.
      const land = Math.sin(x * 3.1 + y * 1.7) * Math.cos(z * 2.6 - y * 2.2) + Math.sin(y * 5.0) * 0.35;
      const c = land > 0.42 ? warm : cool;
      const a = land > 0.42 ? 1 : 0.32;
      col.set([c.r * a, c.g * a, c.b * a], i * 3);
    }
    return { positions: pos, colors: col };
  }, []);

  useFrame((_, d) => {
    if (ref.current) ref.current.rotation.y += d * 0.06;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.018} vertexColors sizeAttenuation transparent opacity={0.95} depthWrite={false} />
    </points>
  );
}

function Orbit({ radius, tilt, speed, phase, color }) {
  const sat = useRef();
  const trail = useRef();
  const ringGeo = useMemo(() => {
    const pts = [];
    for (let i = 0; i <= 128; i++) {
      const a = (i / 128) * Math.PI * 2;
      pts.push(new THREE.Vector3(Math.cos(a) * radius, 0, Math.sin(a) * radius));
    }
    return new THREE.BufferGeometry().setFromPoints(pts);
  }, [radius]);

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime() * speed + phase;
    if (sat.current) sat.current.position.set(Math.cos(a) * radius, 0, Math.sin(a) * radius);
    if (trail.current) trail.current.rotation.y = -a;
  });

  return (
    <group rotation={tilt}>
      <line geometry={ringGeo}>
        <lineBasicMaterial color="#ece8e1" transparent opacity={0.12} />
      </line>
      <mesh ref={sat}>
        <sphereGeometry args={[0.035, 16, 16]} />
        <meshBasicMaterial color={color} />
        <mesh>
          <sphereGeometry args={[0.09, 16, 16]} />
          <meshBasicMaterial color={color} transparent opacity={0.18} />
        </mesh>
      </mesh>
      {/* Short comet trail behind the satellite */}
      <mesh ref={trail} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[radius - 0.006, radius + 0.006, 64, 1, 0, 0.9]} />
        <meshBasicMaterial color={color} transparent opacity={0.55} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}

function Rig({ children }) {
  const g = useRef();
  useFrame(({ pointer }, d) => {
    if (!g.current) return;
    g.current.rotation.x = THREE.MathUtils.damp(g.current.rotation.x, 0.25 - pointer.y * 0.25, 3, d);
    g.current.rotation.y = THREE.MathUtils.damp(g.current.rotation.y, pointer.x * 0.4, 3, d);
  });
  return <group ref={g}>{children}</group>;
}

export default function Globe() {
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 5.2], fov: 45 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      style={{ background: 'transparent' }}
    >
      <Rig>
        <Planet />
        <Orbit radius={2.05} tilt={[0.35, 0, 0.18]} speed={0.42} phase={0} color="#ff5a1f" />
        <Orbit radius={2.45} tilt={[-0.6, 0, -0.32]} speed={-0.3} phase={2} color="#8fd3ff" />
        <Orbit radius={2.85} tilt={[1.15, 0.2, 0.5]} speed={0.22} phase={4} color="#ece8e1" />
      </Rig>
    </Canvas>
  );
}
