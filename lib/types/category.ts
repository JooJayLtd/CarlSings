export type CategorySlug =
  | 'carl-discovered'
  | 'carl-cried'
  | 'carl-debugged'
  | 'carl-celebrated'
  | 'carl-overthought';

export interface Category {
  slug: CategorySlug;
  name: string;
  icon: string;
  description: string;
}

export const categories: Category[] = [
  {
    slug: 'carl-discovered',
    name: 'Carl Discovered',
    icon: '💡',
    description: 'New learning moments and "aha!" insights',
  },
  {
    slug: 'carl-cried',
    name: 'Carl Cried',
    icon: '😢',
    description: 'Debugging disasters and emotional breakdowns',
  },
  {
    slug: 'carl-debugged',
    name: 'Carl Debugged',
    icon: '🔧',
    description: 'Problem-solving victories and methodical approaches',
  },
  {
    slug: 'carl-celebrated',
    name: 'Carl Celebrated',
    icon: '🎉',
    description: 'Wins, deployments, and rare confidence moments',
  },
  {
    slug: 'carl-overthought',
    name: 'Carl Overthought',
    icon: '🤔',
    description: 'Analysis paralysis and anxiety spirals',
  },
];
