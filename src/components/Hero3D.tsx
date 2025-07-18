import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = time * 0.2;
      meshRef.current.rotation.y = time * 0.3;
    }
  });

  return (
    <Float
      speed={1.4}
      rotationIntensity={1}
      floatIntensity={2}
    >
      <Sphere ref={meshRef} args={[1, 100, 200]} scale={2.4}>
        <MeshDistortMaterial
          color="#8b5cf6"
          attach="material"
          distort={0.3}
          speed={1.5}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
}

function ParticleField() {
  const points = useRef<THREE.Points>(null);
  
  const particlesPosition = new Float32Array(5000 * 3);
  
  for (let i = 0; i < 5000; i++) {
    particlesPosition[i * 3] = (Math.random() - 0.5) * 20;
    particlesPosition[i * 3 + 1] = (Math.random() - 0.5) * 20;
    particlesPosition[i * 3 + 2] = (Math.random() - 0.5) * 20;
  }

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (points.current) {
      points.current.rotation.x = time * 0.05;
      points.current.rotation.y = time * 0.075;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.015} color="#00bcd4" />
    </points>
  );
}

export function Hero3D() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{
          position: [0, 0, 5],
          fov: 75,
        }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.2} />
          <directionalLight position={[0, 0, 5]} intensity={0.5} />
          <ParticleField />
          <AnimatedSphere />
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            enableRotate={true}
            autoRotate={true}
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}