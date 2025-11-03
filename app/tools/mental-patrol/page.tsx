'use client';

import { PetCat } from '@/components/mental-patrol/pet-cat';
import { useState } from 'react';

export default function MentalPatrolPage() {
  const [isClicked, setIsClicked] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const handlePetClick = () => {
    setIsClicked(true);
    setClickCount(prev => prev + 1);

    // Reset click animation after it completes
    setTimeout(() => setIsClicked(false), 500);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4 font-pixel" style={{ color: 'var(--pixel-blue)' }}>
          Mental Patrol
        </h1>
        <p className="text-center text-muted-foreground mb-8">
          Your mental patrol pet is here!
        </p>

        {/* Pet Preview */}
        <div className="pixel-card p-8 text-center">
          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--pixel-purple)' }}>
            Meet Luna the Cat
          </h2>
          <p className="text-sm text-muted-foreground mb-6">
            Calm, independent, and soothing. Click Luna to see her purr!
          </p>

          <div className="flex justify-center mb-6">
            <PetCat onClick={handlePetClick} isClicked={isClicked} />
          </div>

          <div className="space-y-2 text-sm text-muted-foreground">
            <p>Clicks: {clickCount}</p>
            <p className="text-xs">Watch for: blinking, stretching, and looking away (idle animations)</p>
          </div>
        </div>

        {/* Info */}
        <div className="mt-6 p-4 bg-muted rounded-lg text-sm text-muted-foreground">
          <p className="font-semibold mb-2">Luna&apos;s Personality:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Energy Level: 2/5 (Calm)</li>
            <li>Affection: Aloof</li>
            <li>Traits: Independent, soothing, observant, graceful</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
