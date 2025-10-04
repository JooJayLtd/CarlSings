import { CategorySlug } from '@/lib/types/category';
import { LucideIcon, Lightbulb, Frown, Wrench, PartyPopper, Brain } from 'lucide-react';

interface CategoryConfig {
  icon: LucideIcon;
  color: string;
  bgColor: string;
  borderColor: string;
  gradient: string;
}

export const categoryConfig: Record<CategorySlug, CategoryConfig> = {
  'carl-discovered': {
    icon: Lightbulb,
    color: 'var(--pixel-blue)',
    bgColor: '#dbeafe',
    borderColor: 'var(--pixel-blue)',
    gradient: 'from-blue-50 to-blue-100',
  },
  'carl-cried': {
    icon: Frown,
    color: 'var(--pixel-red)',
    bgColor: '#fef2f2',
    borderColor: 'var(--pixel-red)',
    gradient: 'from-red-50 to-red-100',
  },
  'carl-debugged': {
    icon: Wrench,
    color: 'var(--pixel-green)',
    bgColor: '#f0fdf4',
    borderColor: 'var(--pixel-green)',
    gradient: 'from-green-50 to-green-100',
  },
  'carl-celebrated': {
    icon: PartyPopper,
    color: 'var(--pixel-orange)',
    bgColor: '#fff7ed',
    borderColor: 'var(--pixel-orange)',
    gradient: 'from-orange-50 to-orange-100',
  },
  'carl-overthought': {
    icon: Brain,
    color: 'var(--pixel-purple)',
    bgColor: '#faf5ff',
    borderColor: 'var(--pixel-purple)',
    gradient: 'from-purple-50 to-purple-100',
  },
};
