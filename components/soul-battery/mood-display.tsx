'use client';

import Lottie from 'lottie-react';
import beeAnimation from '@/public/animations/bee.json';
import giraffeAnimation from '@/public/animations/giraffe.json';
import frogAnimation from '@/public/animations/frog.json';
import catAnimation from '@/public/animations/cat.json';
import { MoodType } from '@/lib/types/soul-battery';

interface MoodDisplayProps {
  mood: MoodType;
}

export function MoodDisplay({ mood }: MoodDisplayProps) {
  // Select animation based on mood
  let animationData = null;
  const size = "w-48 h-48"; // default size

  switch (mood) {
    case 'happy':
      animationData = beeAnimation;
      break;
    case 'neutral':
      animationData = giraffeAnimation;
      break;
    case 'sad':
      animationData = frogAnimation;
      break;
    case 'dead':
      animationData = catAnimation;
      break;
  }

  return (
    <div className={size}>
      <Lottie
        animationData={animationData}
        loop={true}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
}
