export interface BatteryState {
  percentage: number;           // 0-100
  lastUpdated: string;          // ISO timestamp
  workStartHour: number;        // Default: 9 (9 AM)
  workEndHour: number;          // Default: 18 (6 PM)
  rechargeStartHour: number;    // Default: 0 (midnight)
}

export type MoodType = 'happy' | 'neutral' | 'sad' | 'dead';

export interface BatteryLevel {
  range: [number, number];      // e.g., [70, 100]
  mood: MoodType;
  color: string;                // Hex color for battery display
  label: string;                // Status label
}

export const BATTERY_LEVELS: BatteryLevel[] = [
  {
    range: [70, 100],
    mood: 'happy',
    color: '#10b981',           // pixel-green
    label: 'Fully Charged',
  },
  {
    range: [40, 69],
    mood: 'neutral',
    color: '#f59e0b',           // pixel-yellow
    label: 'Depleting',
  },
  {
    range: [10, 39],
    mood: 'sad',
    color: '#f97316',           // pixel-orange
    label: 'Low Battery',
  },
  {
    range: [0, 9],
    mood: 'dead',
    color: '#ef4444',           // pixel-red
    label: 'Dead Soul',
  },
];

export const DEFAULT_BATTERY_STATE: BatteryState = {
  percentage: 100,
  lastUpdated: new Date().toISOString(),
  workStartHour: 9,
  workEndHour: 18,
  rechargeStartHour: 0,
};
