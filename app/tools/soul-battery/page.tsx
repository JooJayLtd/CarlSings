'use client';

import { BatteryDisplay } from '@/components/soul-battery/battery-display';
import { useSoulBattery } from '@/lib/hooks/useSoulBattery';
import { getRandomMessage } from '@/lib/data/soul-battery-messages';
import { useMemo } from 'react';

export default function SoulBatteryPage() {
  const { percentage, color, label, mood, isLoading } = useSoulBattery();

  // Get a random message for the current mood (memoized to avoid changing on every render)
  const message = useMemo(() => getRandomMessage(mood), [mood]);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <p className="text-center text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4 font-pixel" style={{ color: 'var(--pixel-blue)' }}>
          Dead Soul Battery
        </h1>
        <p className="text-center text-muted-foreground mb-8">
          Watch your soul battery deplete during work hours
        </p>

        {/* Battery Display */}
        <div className="pixel-card p-6">
          <BatteryDisplay percentage={percentage} color={color} mood={mood} />

          {/* Message */}
          <div className="mt-6 text-center">
            <p className="text-base font-pixel" style={{ color }}>
              {message}
            </p>
          </div>
        </div>

        {/* Info */}
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>Work hours: 9 AM - 6 PM (depletes to 0%)</p>
          <p>Recharge: 12 AM - 9 AM (recharges to 100%)</p>
        </div>
      </div>
    </div>
  );
}
