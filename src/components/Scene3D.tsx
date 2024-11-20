import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Stars, useProgress, Float } from '@react-three/drei';
import { DroneModel } from './DroneModel';
import { Suspense } from 'react';
import { EffectComposer, Bloom, ChromaticAberration } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';
import { Vector2 } from 'three';

function Loader() {
  const { progress } = useProgress();
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black/90 z-10">
      <div className="text-center">
        <div className="w-32 h-1 bg-gray-800 rounded-full mb-4">
          <div 
            className="h-full bg-gradient-to-r from-blue-500 to-cyan-300 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="text-blue-400 text-xl font-bold">
          {progress.toFixed(0)}%
        </div>
        <div className="text-blue-400/80 text-sm mt-2 animate-pulse">
          Initializing Atom8ic Model...
        </div>
      </div>
    </div>
  );
}

function GridFloor() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]} receiveShadow>
      <planeGeometry args={[50, 50, 50, 50]} />
      <meshStandardMaterial
        color="#4facfe"
        metalness={0.8}
        roughness={0.2}
        wireframe
        transparent
        opacity={0.15}
        emissive="#4facfe"
        emissiveIntensity={0.1}
      />
    </mesh>
  );
}

function Lights() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight 
        position={[10, 10, 10]} 
        intensity={1.5} 
        color="#4facfe" 
        castShadow
      />
      <pointLight 
        position={[-10, -10, -10]} 
        intensity={1} 
        color="#00f2fe" 
      />
      <spotLight
        position={[0, 10, 0]}
        intensity={1}
        angle={0.6}
        penumbra={1}
        color="#ffffff"
        castShadow
      />
      <hemisphereLight
        intensity={0.4}
        color="#4facfe"
        groundColor="#000000"
      />
    </>
  );
}

export function Scene3D() {
  return (
    <div className="relative">
      <div className="h-[600px] w-full relative rounded-xl overflow-hidden bg-gray-900 border border-gray-800">
        <Canvas shadows camera={{ position: [0, 2, 6], fov: 45 }}>
          <color attach="background" args={['#0a0a0f']} />
          
          <OrbitControls
            enableZoom={true}
            enablePan={false}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 2.2}
            minDistance={4}
            maxDistance={8}
            autoRotate
            autoRotateSpeed={0.5}
          />

          <Suspense fallback={null}>
            <Environment preset="warehouse" />
            <Lights />
            
            <Float
              speed={2}
              rotationIntensity={0.5}
              floatIntensity={0.5}
            >
              <DroneModel />
            </Float>

            <GridFloor />
            
            <Stars 
              radius={50} 
              depth={50} 
              count={5000} 
              factor={4} 
              saturation={0.5} 
              fade 
              speed={1}
            />
          </Suspense>

          <EffectComposer>
            <Bloom 
              intensity={1.5}
              luminanceThreshold={0.1}
              luminanceSmoothing={0.9}
              mipmapBlur
            />
            <ChromaticAberration
              offset={new Vector2(0.0005, 0.0005)}
              radialModulation={true}
              modulationOffset={0.3}
              blendFunction={BlendFunction.NORMAL}
            />
          </EffectComposer>

          <fog attach="fog" args={['#000', 8, 30]} />
        </Canvas>

        <Suspense fallback={<Loader />}>
          <div className="absolute bottom-4 left-4 text-sm">
            <div className="flex items-center space-x-4 text-gray-400">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                <span>Drag to rotate</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                <span>Scroll to zoom</span>
              </div>
            </div>
          </div>
        </Suspense>
      </div>
    </div>
  );
}