import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { getEntryBySlug, getEntries } from '@/lib/data/entries';
import { categoryConfig } from '@/lib/config/categories';
import type { CategorySlug } from '@/lib/types/category';
import { format } from 'date-fns';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getMDXComponents } from '@/components/mdx-components';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const entries = getEntries();
  return entries.map((entry) => ({
    slug: entry.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = getEntryBySlug(slug);

  if (!entry) {
    return {
      title: 'Entry Not Found | Carl Sings',
    };
  }

  return {
    title: `${entry.frontMatter.title} | Carl Sings`,
    description: entry.frontMatter.excerpt || entry.frontMatter.title,
    openGraph: {
      title: `${entry.frontMatter.title} | Carl Sings`,
      description: entry.frontMatter.excerpt || entry.frontMatter.title,
    },
  };
}

export default async function EntryPage({ params }: PageProps) {
  const { slug } = await params;
  const entry = getEntryBySlug(slug);

  if (!entry) {
    notFound();
  }

  const Icon = categoryConfig[entry.frontMatter.category as CategorySlug]?.icon;
  const categoryColor = categoryConfig[entry.frontMatter.category as CategorySlug]?.color;

  return (
    <div className="min-h-screen py-12 px-4">
      <article className="max-w-4xl mx-auto">
        {/* Back button */}
        <Link
          href="/entries"
          className="inline-flex items-center gap-2 font-mono text-sm text-gray-600 hover:text-gray-900 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          cd ../entries
        </Link>

        {/* Header */}
        <header className="mb-8">
          {/* Category & Date */}
          <div className="flex items-center gap-3 mb-4">
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
              {format(new Date(entry.frontMatter.date), 'MMMM d, yyyy')}
            </time>
          </div>

          {/* Title */}
          <h1 className="font-primary font-bold text-4xl md:text-5xl text-gray-900 mb-4">
            {entry.frontMatter.title}
          </h1>

          {/* Anxiety Level */}
          <div className="flex items-center gap-2 mb-4">
            <span className="font-mono text-xs text-gray-500">Anxiety Level:</span>
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className={`w-4 h-4 border border-gray-300 ${
                    i < entry.frontMatter.anxietyLevel
                      ? 'bg-red-400'
                      : 'bg-gray-100'
                  }`}
                />
              ))}
            </div>
            <span className="font-mono text-xs text-gray-600 ml-2">
              {entry.frontMatter.anxietyLevel}/5
            </span>
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
        </header>

        {/* MDX Content */}
        <div className="prose prose-lg max-w-none">
          <MDXRemote
            source={entry.content}
            components={getMDXComponents({
              carlLog: entry.frontMatter.carlLog,
              basilLog: entry.frontMatter.basilLog,
              lucyLog: entry.frontMatter.lucyLog,
            })}
          />
        </div>

        {/* Back to entries */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <Link
            href="/entries"
            className="inline-flex items-center gap-2 font-mono text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all entries
          </Link>
        </div>
      </article>
    </div>
  );
}
