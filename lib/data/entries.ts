import { getAllEntries, getEntryBySlug as getMdxEntry, getEntriesByCategory as getMdxByCategory } from '@/lib/content/mdx';
import type { MdxEntry } from '@/lib/content/mdx';

/**
 * Get all blog entries, sorted by date (newest first)
 */
export function getEntries(): MdxEntry[] {
  return getAllEntries();
}

/**
 * Get a single entry by slug
 */
export function getEntryBySlug(slug: string): MdxEntry | null {
  return getMdxEntry(slug);
}

/**
 * Get entries filtered by category
 */
export function getEntriesByCategory(category: string): MdxEntry[] {
  return getMdxByCategory(category);
}

/**
 * Get recent entries (limit to N most recent)
 */
export function getRecentEntries(limit: number = 5): MdxEntry[] {
  const allEntries = getAllEntries();
  return allEntries.slice(0, limit);
}