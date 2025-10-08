import type { Metadata } from 'next';
import Link from 'next/link';
import { getEntries } from '@/lib/data/entries';
import { categoryConfig } from '@/lib/config/categories';
import type { CategorySlug } from '@/lib/types/category';
import { format } from 'date-fns';

export const metadata: Metadata = {
  title: 'All Entries | Carl Sings',
  description: 'All blog entries from Carl\'s journey navigating dev life.',
  openGraph: {
    title: 'All Entries | Carl Sings',
    description: 'All blog entries from Carl\'s journey navigating dev life.',
  },
};

export default function EntriesPage() {
  const entries = getEntries();

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="font-primary font-bold text-4xl text-gray-900 mb-4">
            All Entries
          </h1>
          <p className="font-primary text-gray-600 text-lg">
            {entries.length} {entries.length === 1 ? 'entry' : 'entries'} documenting the journey
          </p>
        </div>

        {/* Entries List */}
        {entries.length === 0 ? (
          <div className="pixel-card p-8 text-center">
            <p className="font-primary text-gray-600">
              No entries yet. Check back soon! 📝
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {entries.map((entry) => {
              const Icon = categoryConfig[entry.frontMatter.category as CategorySlug]?.icon;
              const categoryColor = categoryConfig[entry.frontMatter.category as CategorySlug]?.color;

              return (
                <Link
                  key={entry.slug}
                  href={`/entries/${entry.slug}`}
                  className="block pixel-card p-8 hover:shadow-lg transition-shadow"
                >
                  {/* Category & Date */}
                  <div className="flex items-center gap-3 mb-3">
                    {Icon && (
                      <Icon
                        className="w-5 h-5"
                        style={{ color: categoryColor }}
                      />
                    )}
                    <span
                      className="font-mono text-sm font-semibold"
                      style={{ color: categoryColor }}
                    >
                      {entry.frontMatter.category}
                    </span>
                    <span className="text-gray-400">•</span>
                    <time className="font-mono text-sm text-gray-500">
                      {format(new Date(entry.frontMatter.date), 'MMM d, yyyy')}
                    </time>
                  </div>

                  {/* Title */}
                  <h2 className="font-primary font-bold text-2xl text-gray-900 mb-2">
                    {entry.frontMatter.title}
                  </h2>

                  {/* Excerpt */}
                  {entry.frontMatter.excerpt && (
                    <p className="font-primary text-gray-600 mb-4">
                      {entry.frontMatter.excerpt}
                    </p>
                  )}

                  {/* Anxiety Level */}
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-gray-500">Anxiety:</span>
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <div
                          key={i}
                          className={`w-3 h-3 border border-gray-300 ${
                            i < entry.frontMatter.anxietyLevel
                              ? 'bg-red-400'
                              : 'bg-gray-100'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Tags */}
                  {entry.frontMatter.tags && entry.frontMatter.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {entry.frontMatter.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
