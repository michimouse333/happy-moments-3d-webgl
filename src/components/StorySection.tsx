import React from 'react';
import { Canvas } from '@react-three/fiber';
import {
  AmbientLight,
  DirectionalLight,
  PerspectiveCamera,
} from '@react-three/drei';
import * as THREE from 'three';
import useScrollAnimation from '@/hooks/useScrollAnimation';
import { IslandProps } from '@/types';
import './StorySection.css';

interface StorySectionProps {}

const StorySection: React.FC<StorySectionProps> = () => {
  const { animatedValue } = useScrollAnimation({
    initialOpacity: 0,
    initialY: 50,
    finalOpacity: 1,
    finalY: 0,
  });

  const islands: IslandProps[] = [
    {
      id: 1,
      title: 'First Date',
      description: 'Our unforgettable first date at the cozy little cafe.',
    },
    {
      id: 2,
      title: 'Moving In Together',
      description: 'The exciting day we moved in together and started our home.',
    },
    {
      id: 3,
      title: 'Engagement',
      description: 'The magical moment when we decided to spend our lives together.',
    },
  ];

  const Island = ({ island }: { island: IslandProps }) => {
    return (
      <group position={[0, 0, 0]}>
        <mesh>
          <boxGeometry args={[2, 0.5, 2]} />
          <meshStandardMaterial color="#FFDAB9" />
        </mesh>
        <TextComponent text={island.title} position={[0, 1, 0]} />
        <TextComponent text={island.description} position={[0, -1, 0]} />
      </group>
    );
  };

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
      <mesh position={position}>
        <textGeometry args={[text, textProps]} />
        <meshBasicMaterial color="black" />
      </mesh>
    );
  };

  return (
    <div
      className="story-section-container"
      aria-label="Story Section"
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
        {islands.map(island => (
          <Island key={island.id} island={island} />
        ))}
      </Canvas>
    </div>
  );
};

export default StorySection;