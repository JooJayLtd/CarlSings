'use client';

import { useState, useEffect } from 'react';
import { BATTERY_LEVELS, BatteryLevel } from '@/lib/types/soul-battery';

const WORK_START_HOUR = 9;   // 9 AM
const WORK_END_HOUR = 18;     // 6 PM
const RECHARGE_START_HOUR = 0; // Midnight

/**
 * Calculate battery percentage based on current time
 *
 * Work hours (9 AM - 6 PM): Depletes from 100% to 0%
 * Outside work hours: Dead at 0%
 */
function calculateBatteryPercentage(): number {
  const now = new Date();
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();
  const currentTimeInHours = currentHour + currentMinute / 60;

  // Work hours: 9 AM - 6 PM (deplete from 100% to 0%)
  if (currentTimeInHours >= WORK_START_HOUR && currentTimeInHours < WORK_END_HOUR) {
    const workDuration = WORK_END_HOUR - WORK_START_HOUR; // 9 hours
    const elapsedWork = currentTimeInHours - WORK_START_HOUR;
    const depletionProgress = elapsedWork / workDuration;
    return Math.max(0, Math.round(100 - depletionProgress * 100));
  }

  // Outside work hours: Dead at 0%
  return 0;
}

/**
 * Get battery level configuration based on percentage
 */
function getBatteryLevel(percentage: number): BatteryLevel {
  return (
    BATTERY_LEVELS.find(
      (level) => percentage >= level.range[0] && percentage <= level.range[1]
    ) || BATTERY_LEVELS[BATTERY_LEVELS.length - 1]
  );
}

export function useSoulBattery() {
  const [percentage, setPercentage] = useState(100); // Default value for SSR
  const [isLoading, setIsLoading] = useState(true);

  // Calculate battery on client side only
  useEffect(() => {
    // Set initial percentage
    setPercentage(calculateBatteryPercentage());
    setIsLoading(false);

    // Update every minute
    const interval = setInterval(() => {
      setPercentage(calculateBatteryPercentage());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const batteryLevel = getBatteryLevel(percentage);

  return {
    percentage,
    mood: batteryLevel.mood,
    color: batteryLevel.color,
    label: batteryLevel.label,
    isLoading,
  };
}
