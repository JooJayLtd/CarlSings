import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getCategoryBySlug, categories, type CategorySlug } from '@/lib/types/category';
import { getEntriesByCategory } from '@/lib/data/entries';
import { categoryConfig } from '@/lib/config/categories';
import { format } from 'date-fns';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug as CategorySlug);

  if (!category) {
    return {
      title: 'Category Not Found | Carl Sings',
    };
  }

  return {
    title: `${category.name} | Carl Sings`,
    description: category.description,
    openGraph: {
      title: `${category.name} | Carl Sings`,
      description: category.description,
    },
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug as CategorySlug);

  if (!category) {
    notFound();
  }

  const entries = getEntriesByCategory(slug as CategorySlug);
  const Icon = categoryConfig[slug as CategorySlug]?.icon;
  const categoryColor = categoryConfig[slug as CategorySlug]?.color;

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            {Icon && (
              <Icon
                className="w-10 h-10"
                style={{ color: categoryColor }}
              />
            )}
            <h1 className="font-primary font-bold text-4xl text-gray-900">
              {category.name}
            </h1>
          </div>
          <p className="font-primary text-gray-600 text-lg mb-2">
            {category.description}
          </p>
          <p className="font-mono text-sm text-gray-500">
            {entries.length} {entries.length === 1 ? 'entry' : 'entries'}
          </p>
        </div>

        {/* Entries List */}
        {entries.length === 0 ? (
          <div className="pixel-card p-8 text-center">
            <p className="font-primary text-gray-600">
              No entries in this category yet. Check back soon!
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {entries.map((entry) => {
              return (
                <Link
                  key={entry.slug}
                  href={`/entries/${entry.slug}`}
                  className="block pixel-card p-8 hover:shadow-lg transition-shadow"
                >
                  {/* Date */}
                  <div className="flex items-center gap-3 mb-3">
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
                  <div className="flex items-center gap-2 mb-4">
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
                    <div className="flex flex-wrap gap-2">
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

        {/* Back Link */}
        <div className="mt-12">
          <Link
            href="/entries"
            className="inline-flex items-center gap-2 font-mono text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            ← Back to all entries
          </Link>
        </div>
      </div>
    </div>
  );
}
