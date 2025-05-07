/**
 * @file src/types.ts
 * @description This file defines shared types and interfaces for the Happy Moments Companion app.
 */

import * as THREE from 'three';

/**
 * @interface MemoryBoxProps
 * @description Defines the props for the MemoryBox component.
 */
export interface MemoryBoxProps {
  /**
   * @property {number} [rotationSpeed=0.5] - The rotation speed of the MemoryBox.
   */
  rotationSpeed?: number;
  /**
   * @property {string} modelPath - The path to the 3D model file.
   */
  modelPath: string;
  /**
   * @property {string} texturePath - The path to the texture file.
   */
  texturePath?: string;
}

/**
 * @typedef ScrollAnimationProps
 * @description Defines the return type for the useScrollAnimation hook.
 */
export type ScrollAnimationProps<T> = {
  /**
   * @property {T} animatedValue - The animated value based on scroll position.
   */
  animatedValue: T;
};

/**
 * @interface IslandProps
 * @description Defines the properties for a story island in the StorySection.
 */
export interface IslandProps {
  /**
   * @property {number} id - The unique identifier for the island.
   */
  id: number;
  /**
   * @property {string} title - The title of the island.
   */
  title: string;
  /**
   * @property {string} description - A brief description of the island.
   */
  description: string;
  /**
   * @property {string} [modelPath] - Optional path to a custom 3D model for the island.
   */
  modelPath?: string;
}

/**
 * @interface HobbyProps
 * @description Defines the properties for a hobby object in the HobbiesSection.
 */
export interface HobbyProps {
  /**
   * @property {string} name - The name of the hobby.
   */
  name: string;
  /**
   * @property {string} modelPath - The path to the 3D model for the hobby.
   */
  modelPath: string;
  /**
   * @property {string} [color='#FFFFFF'] - Optional color for the hobby object.
   */
  color?: string;
}

/**
 * @interface DestinationProps
 * @description Defines the properties for a destination in the FutureSection.
 */
export interface DestinationProps {
  /**
   * @property {number} id - The unique identifier for the destination.
   */
  id: number;
  /**
   * @property {string} name - The name of the destination.
   */
  name: string;
  /**
   * @property {string} description - A brief description of the destination.
   */
  description: string;
  /**
   * @property {string} imagePath - The path to the image for the destination.
   */
  imagePath: string;
  /**
   * @property {{ x: number; y: number; z: number }} position - The 3D position of the destination.
   */
  position: { x: number; y: number; z: number };
}