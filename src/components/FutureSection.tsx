import React, { useRef, useState, useCallback } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  AmbientLight,
  DirectionalLight,
  PerspectiveCamera,
} from '@react-three/drei';
import * as THREE from 'three';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import { DestinationProps } from '@/types';
import './FutureSection.css';

interface FutureSectionProps {}

const FutureSection: React.FC<FutureSectionProps> = () => {
  const { animatedValue } = useScrollAnimation({
    initialOpacity: 0,
    initialY: 50,
    finalOpacity: 1,
    finalY: 0,
  });

  const [selectedDestination, setSelectedDestination] = useState<number | null>(
    null
  );
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);
  const isTransitioning = useRef(false);

  const destinations: DestinationProps[] = [
    {
      id: 1,
      name: 'Mountains',
      description: 'Majestic mountain views and fresh air.',
      imagePath: '/images/mountains.jpg',
      position: { x: -3, y: 1, z: 0 },
    },
    {
      id: 2,
      name: 'Beach',
      description: 'Relax on the sandy beach with ocean waves.',
      imagePath: '/images/beach.jpg',
      position: { x: 3, y: 1, z: 0 },
    },
    {
      id: 3,
      name: 'City',
      description: 'Explore vibrant city life and cultural landmarks.',
      imagePath: '/images/city.jpg',
      position: { x: 0, y: 1, z: -3 },
    },
  ];

  const handleDestinationClick = useCallback(
    (destinationId: number) => {
      if (isTransitioning.current || !cameraRef.current) return;

      isTransitioning.current = true;
      setSelectedDestination(destinationId);

      const destination = destinations.find(d => d.id === destinationId);
      if (!destination) {
        console.error(`Destination with id ${destinationId} not found.`);
        isTransitioning.current = false;
        return;
      }

      const newPosition = new THREE.Vector3(
        destination.position.x,
        destination.position.y + 2,
        destination.position.z + 5
      );
      const newLookAt = new THREE.Vector3(
        destination.position.x,
        destination.position.y,
        destination.position.z
      );

      const initialPosition = cameraRef.current.position.clone();
      const initialQuaternion = cameraRef.current.quaternion.clone();
      const targetQuaternion = new THREE.Quaternion();
      cameraRef.current.lookAt(newLookAt);
      targetQuaternion.copy(cameraRef.current.quaternion);
      cameraRef.current.position.copy(initialPosition);
      cameraRef.current.quaternion.copy(initialQuaternion);

      const startTime = performance.now();
      const duration = 1000;

      function animate() {
        const currentTime = performance.now();
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);

        const interpolatedPosition = new THREE.Vector3().lerpVectors(
          initialPosition,
          newPosition,
          progress
        );
        cameraRef.current!.position.copy(interpolatedPosition);
        cameraRef.current!.quaternion.slerp(targetQuaternion, progress);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          isTransitioning.current = false;
        }
      }
      animate();
    },
    [destinations]
  );

  const TextComponent = ({
    text,
    position,
    onClick,
  }: {
    text: string;
    position: [number, number, number];
    onClick?: () => void;
  }) => {
    const textProps: any = {
      font: '/Baloo2-Regular.ttf',
      fontSize: 0.3,
      color: 'black',
      anchorX: 'center',
      anchorY: 'middle',
    };

    return (
      <mesh
        position={position}
        onClick={onClick}
        onPointerOver={(e) => {
          e.stopPropagation();
        }}
        aria-label={`${text} label`}
      >
        <textGeometry args={[text, textProps]} />
        <meshBasicMaterial color="black" />
      </mesh>
    );
  };

  const Balloon = () => {
    return (
      <mesh aria-label="Hot Air Balloon">
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#FFDAB9" />
      </mesh>
    );
  };

  const DestinationMarker = ({ destination }: { destination: DestinationProps }) => {
    const handleClick = () => {
      handleDestinationClick(destination.id);
    };
    return (
      <group position={[destination.position.x, destination.position.y, destination.position.z]} aria-label={`${destination.name} Marker`}>
        <mesh aria-label={`${destination.name} Destination`} onClick={handleClick} >
          <boxGeometry args={[0.5, 0.5, 0.5]} />
          <meshStandardMaterial color="#98FB98" />
        </mesh>
        <TextComponent text={destination.name} position={[0, 1, 0]} onClick={handleClick} />
      </group>
    );
  };

  return (
    <div
      className="future-section-container"
      aria-label="Future Section"
      style={{
        opacity: animatedValue.opacity,
        transform: `translateY(${animatedValue.y}px)`,
      }}
    >
      <Canvas style={{ width: '100%', height: '500px' }}>
        <color attach="background" args={['#87CEEB']} />
        <AmbientLight intensity={0.5} />
        <DirectionalLight position={[10, 10, 5]} intensity={0.7} />
        <PerspectiveCamera
          ref={cameraRef}
          makeDefault
          position={[0, 3, 5]}
          fov={50}
        />
        <Balloon />
        {destinations.map(destination => (
          <DestinationMarker
            key={destination.id}
            destination={destination}
          />
        ))}
      </Canvas>
    </div>
  );
};

export default FutureSection;