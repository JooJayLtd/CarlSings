/**
 * Mental Patrol Pets
 * Pet configurations with distinct personalities and characteristics
 */

import { Pet, PetType } from '@/lib/types/mental-patrol';

/**
 * Luna the Cat
 * Personality: Calm, independent, soothing presence
 * Best for: Those who prefer gentle, non-intrusive support
 */
export const luna: Pet = {
  id: 'cat',
  name: 'Luna the Cat',
  description: 'Calm and wise. Luna provides gentle presence without overwhelming you.',
  personality: {
    energy: 2,
    affection: 'aloof',
    traits: ['independent', 'soothing', 'observant', 'graceful'],
  },
  emoji: '🐱',
};

/**
 * Max the Dog
 * Personality: Loyal, enthusiastic, energizing
 * Best for: Those who need enthusiastic encouragement and motivation
 */
export const max: Pet = {
  id: 'dog',
  name: 'Max the Dog',
  description: 'Loyal and encouraging. Max is always excited to support you.',
  personality: {
    energy: 5,
    affection: 'enthusiastic',
    traits: ['loyal', 'energetic', 'optimistic', 'protective'],
  },
  emoji: '🐶',
};

/**
 * Clover the Bunny
 * Personality: Gentle, nurturing, soft
 * Best for: Those who need tender, compassionate support
 */
export const clover: Pet = {
  id: 'bunny',
  name: 'Clover the Bunny',
  description: 'Gentle and nurturing. Clover offers soft, compassionate care.',
  personality: {
    energy: 3,
    affection: 'moderate',
    traits: ['gentle', 'nurturing', 'peaceful', 'sensitive'],
  },
  emoji: '🐰',
};

/**
 * Pip the Bird
 * Personality: Cheerful, uplifting, light-hearted
 * Best for: Those who need a mood lift and playful energy
 */
export const pip: Pet = {
  id: 'bird',
  name: 'Pip the Bird',
  description: 'Cheerful and uplifting. Pip brings lightness and perspective.',
  personality: {
    energy: 4,
    affection: 'moderate',
    traits: ['cheerful', 'playful', 'free-spirited', 'curious'],
  },
  emoji: '🐦',
};

/**
 * Foxy the Fox
 * Personality: Clever, playful, wise
 * Best for: Those who appreciate wit and intelligent insight
 */
export const foxy: Pet = {
  id: 'fox',
  name: 'Foxy the Fox',
  description: 'Clever and playful. Foxy offers wisdom with a dash of mischief.',
  personality: {
    energy: 4,
    affection: 'moderate',
    traits: ['clever', 'playful', 'wise', 'resourceful'],
  },
  emoji: '🦊',
};

/**
 * All available pets
 */
export const allPets: Pet[] = [luna, max, clover, pip, foxy];

/**
 * Get a pet by its ID
 */
export function getPetById(id: PetType): Pet | undefined {
  return allPets.find((pet) => pet.id === id);
}

/**
 * Get default pet (Luna the Cat)
 */
export function getDefaultPet(): Pet {
  return luna;
}

/**
 * Pet selection guidance based on needs
 */
export const petGuidance = {
  calm: luna,
  energetic: max,
  gentle: clover,
  cheerful: pip,
  wise: foxy,
};
