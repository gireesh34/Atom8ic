import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Text } from '@react-three/drei';

export function DroneModel() {
  const groupRef = useRef<THREE.Group>(null);
  const propellersRef = useRef<THREE.Group[]>([]);
  
  useFrame((state) => {
    if (!groupRef.current) return;
    // Gentle hovering motion
    groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    
    // Rotate propellers
    propellersRef.current.forEach((propeller, index) => {
      if (propeller) {
        propeller.rotation.y = state.clock.elapsedTime * (index % 2 ? -8 : 8);
      }
    });
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]} scale={[0.5, 1, 0.5]}>
      {/* Main body - Agricultural tank */}
      {/* Central Hub */}
      <mesh position={[0, 0.4, 0]} castShadow>
        <cylinderGeometry args={[1.3, 1.5, 0.4, 8]} />
        <meshStandardMaterial
                color="#36454F"
                metalness={0.4}
                roughness={0.5}
        />
      </mesh>

      {/* Top Cover */}
      <mesh position={[0, 0.58, 0]} receiveShadow castShadow>
        <cylinderGeometry args={[0.9, 0.9, 0.3, 8]} />
        <meshStandardMaterial
          color="#000000"
          metalness={0.9}
          roughness={0.4}
        />
      </mesh>

      {/* Frame Arms */}
      {[Math.PI / 4, (3 * Math.PI) / 4, (5 * Math.PI) / 4, (7 * Math.PI) / 4].map((rotation, i) => (
        <group key={i} rotation={[0, rotation, 0]}>
          {/* Main Arm */}
          <mesh position={[2.5, 0.6, 0]} rotation={[0, 0, Math.PI * 0.03]} receiveShadow castShadow>
            <boxGeometry args={[2.5, 0.12, 0.2]} />
            <meshStandardMaterial
                color="#000000"
                metalness={0.9}
                roughness={0.3}
            />
          </mesh>
          
          {/* Arm Support */}
          <mesh position={[1.8, 0.2, 0]} rotation={[0, 0, -Math.PI * 0.1]} receiveShadow castShadow>
            <boxGeometry args={[1.5, 0.06, 0.3]} />
            <meshStandardMaterial
                color="#000000"
                metalness={0.9}
                roughness={0.3}
            />
          </mesh>
        </group>
      ))}
      {/* Camera */}
      <group position={[0, 0.4, 1.3]}>
        <mesh castShadow>
          <boxGeometry args={[0.5, 0.2, 0.3]} />
          <meshStandardMaterial
        color="#1a1a1a"
        metalness={0.9}
        roughness={0.3}
          />
        </mesh>
        <mesh position={[0, 0, 0.1]} rotation={[Math.PI / 2, 0, 0]} castShadow>
          <cylinderGeometry args={[0.05, 0.05, 0.2, 32]} />
          <meshStandardMaterial
                color="#36454F"
                metalness={0.4}
                roughness={0.5}
        />
        </mesh>
      </group>
      {/* Advanced propulsion system */}
      {[[-1, -1], [1, -1], [-1, 1], [1, 1]].map(([x, z], index) => {
        const group = useRef<THREE.Group>(null);
        useEffect(() => {
          propellersRef.current[index] = group.current!;
        }, [group.current]);
        return (
          <group key={`motor-${index}`} position={[x * 2.5, 0.7, z * 2.5]}>
            {/* Motor housing */}
            <mesh castShadow>
              <cylinderGeometry args={[0.3, 0.23, 0.25, 32]} />
              <meshStandardMaterial
                color="#1B1212"
                metalness={0.9}
                roughness={0.3}
              />
            </mesh>

            {/* Propellers */}
            <group ref={group} position={[0, 0.17, 0]}>
              {[0, Math.PI / 2].map((rotation, i) => (
                <mesh key={i} rotation={[0, rotation, 0]} castShadow>
                  <boxGeometry args={[1.4, 0.05, 0.15]} />
                  <meshStandardMaterial
                    color="#000000"
                    metalness={0.7}
                    roughness={0.3}
                  />
                </mesh>
              ))}
            </group>

            {/* Propeller guards */}
            <mesh position={[0, 0.2, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow>
              <torusGeometry args={[0.9, 0.05, 8, 8]} />
              <meshStandardMaterial
                color="#36454F"
                metalness={0.4}
                roughness={0.5}
              />
            </mesh>
          </group>
        );
      })}

      {/* Sensor array */}
      <group position={[0, 0.6, 0]}>
        {[0, Math.PI / 2, Math.PI, -Math.PI / 2].map((angle, index) => (
          <mesh
            key={`sensor-${index}`}
            position={[
              Math.cos(angle) * 1.1,
              0,
              Math.sin(angle) * 1.1
            ]}
            castShadow
          >
            <boxGeometry args={[0.15, 0.08, 0.15]} />
            <meshStandardMaterial
              color="#1a1a1a"
              metalness={0.9}
              roughness={0.1}
            />
          </mesh>
        ))}
      </group>

      {/* Atom8ic Branding */}
      <group position={[0, 0.74, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <Text
          color="#00ff88"
          fontSize={0.26}
          maxWidth={2}
          lineHeight={2}
          letterSpacing={0.18}
          textAlign="center"
          font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
          anchorX="center"
          anchorY="middle"
        >
          ATOM8IC
        </Text>
      </group>
    </group>
  );
}

export default DroneModel;
