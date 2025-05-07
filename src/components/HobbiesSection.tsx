import React from 'react';
import { Canvas } from '@react-three/fiber';
import {
  AmbientLight,
  DirectionalLight,
  PerspectiveCamera,
} from '@react-three/drei';
import * as THREE from 'three';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import { HobbyProps } from '@/types';
import './HobbiesSection.css';

interface HobbiesSectionProps {}

const HobbiesSection: React.FC<HobbiesSectionProps> = () => {
  const { animatedValue } = useScrollAnimation({
    initialOpacity: 0,
    initialY: 50,
    finalOpacity: 1,
    finalY: 0,
  });

  // Define hobby objects
  const hobbies: HobbyProps[] = [
    {
      name: 'Painting',
      modelPath: '/models/painting.glb', // Placeholder path
      color: '#FF69B4', // Hot Pink
    },
    {
      name: 'Music',
      modelPath: '/models/music.glb', // Placeholder path
      color: '#98FB98', // Pale Green
    },
    {
      name: 'Gardening',
      modelPath: '/models/gardening.glb', // Placeholder path
      color: '#FFDAB9', // PeachPuff
    },
    {
      name: 'Cooking',
      modelPath: '/models/cooking.glb', // Placeholder path
      color: '#F0E68C', // Khaki
    },
  ];

  // Text component for displaying hobby names
  const TextComponent = ({
    text,
    position,
  }: {
    text: string;
    position: [number, number, number];
  }) => {
    const textProps: any = {
      font: '/Baloo2-Regular.ttf',
      fontSize: 0.3,
      color: 'black',
      anchorX: 'center',
      anchorY: 'middle',
    };

    return (
      <mesh position={position} aria-label={`${text} label`}>
        <textGeometry args={[text, textProps]} />
        <meshBasicMaterial color="black" />
      </mesh>
    );
  };

  // Hobby component to display each hobby as a 3D object
  const Hobby = ({ hobby }: { hobby: HobbyProps }) => {
    try {
      return (
        <group position={[0, 0, 0]} aria-label={`${hobby.name} group`}>
          <mesh aria-label={`${hobby.name} mesh`}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={hobby.color || '#FFFFFF'} />
          </mesh>
          <TextComponent text={hobby.name} position={[0, 1.5, 0]} />
        </group>
      );
    } catch (error) {
      console.error(`Error loading model for ${hobby.name}:`, error);
      return null; // Render nothing if there's an error
    }
  };

  return (
    <div
      className="hobbies-section-container"
      aria-label="Hobbies Section"
      style={{
        opacity: animatedValue.opacity,
        transform: `translateY(${animatedValue.y}px)`,
      }}
    >
      <Canvas style={{ width: '100%', height: '500px' }}>
        <color attach="background" args={['#87CEEB']} />
        <AmbientLight intensity={0.5} />
        <DirectionalLight position={[10, 10, 5]} intensity={0.7} />
        <PerspectiveCamera makeDefault position={[0, 3, 5]} fov={50} />
        {hobbies.map((hobby, index) => (
          <Hobby key={index} hobby={hobby} />
        ))}
      </Canvas>
    </div>
  );
};

export default HobbiesSection;