'use client';

import { MoodDisplay } from './mood-display';
import { MoodType } from '@/lib/types/soul-battery';

interface BatteryDisplayProps {
  percentage: number;
  color: string;
  mood: MoodType;
}

export function BatteryDisplay({ percentage, color, mood }: BatteryDisplayProps) {
  return (
    <div className="soul-battery-container">
      {/* Mood Animation */}
      <MoodDisplay mood={mood} />

      {/* Battery SVG */}
      <svg
        viewBox="0 0 300 150"
        className="soul-battery-svg"
      >
        {/* Battery Body */}
        <rect
          x="10"
          y="30"
          width="260"
          height="90"
          rx="12"
          ry="12"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          className="text-foreground"
        />

        {/* Battery Terminal */}
        <rect
          x="270"
          y="55"
          width="20"
          height="40"
          rx="6"
          ry="6"
          fill="currentColor"
          className="text-foreground"
        />

        {/* Battery Fill (inner padding for visual appeal) */}
        <rect
          x="20"
          y="40"
          width={`${(240 * percentage) / 100}`}
          height="70"
          rx="8"
          ry="8"
          fill={color}
          className="transition-all duration-1000 ease-linear"
        />

        {/* Percentage Text */}
        <text
          x="140"
          y="85"
          textAnchor="middle"
          dominantBaseline="middle"
          className="font-mono font-bold text-foreground"
          style={{ fontSize: '36px' }}
        >
          {percentage}%
        </text>
      </svg>
    </div>
  );
}
