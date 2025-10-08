import Link from 'next/link';
import { MusicPlayer } from '@/components/music-player';
import { getRecentEntries } from '@/lib/data/entries';
import { categoryConfig } from '@/lib/config/categories';
import type { CategorySlug } from '@/lib/types/category';
import { format } from 'date-fns';

export default function Home() {
  const recentEntries = getRecentEntries(3);
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white border-b-2 border-gray-200 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="mb-6 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <pre className="font-mono text-xs md:text-sm leading-none" style={{ color: 'var(--pixel-blue)' }}>
{` 
#     #       #####                      
#     # #    #     #   ##   #####  #     
#     # #    #        #  #  #    # #     
####### #    #       #    # #    # #     
#     # #    #       ###### #####  #     
#     # #    #     # #    # #   #  #     
#     # #     #####  #    # #    # ######
`}
            </pre>
            <pre className="font-mono text-base md:text-lg leading-none" style={{ color: 'var(--pixel-blue)' }}>
{`  
⠀⠀⠀⢸⣦⡀⠀⠀⠀⠀⢀⡄
⠀⠀⠀⢸⣏⠻⣶⣤⡶⢾⡿⠁
⠀⠀⣀⣼⠷⠀⠀⠁⢀⣿⠃⠀
⠴⣾⣯⣅⣀⠀⠀⠀⠈⢻⣦⡀
⠀⠀⠀⠉⢻⡇⣤⣾⣿⣷⣿⣿⣦⡀
⠀⠀⠀⠀⠸⣿⡿⠏⠀⠀⠀⠀
⠀⠀⠀⠀⠀ ⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀
⠀`}
            </pre>
          </div>
          <p className="font-primary text-gray-600 text-lg md:text-xl leading-relaxed mb-8">
            Carl discovers bugs. Carl debugs life. Carl carries on.
          </p>
          <div className="flex gap-4 justify-center mb-8">
            <Link href="/entries" className="pixel-button pixel-button-primary">
              Read Latest Entries
            </Link>
            <Link href="/about" className="pixel-button pixel-button-secondary">
              About This Blog
            </Link>
          </div>

          {/* Music Player */}
          <MusicPlayer
            url="https://open.spotify.com/track/6K6H8ZHgctryAwabjoOQzG"
            spotifyTrackId="6K6H8ZHgctryAwabjoOQzG"
            title="In This Shirt"
            artist="The Irrepressibles"
          />
        </div>
      </section>

      {/* Recent Entries Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-primary font-bold text-3xl text-gray-900 mb-8">
          Recent Entries
        </h2>
        {recentEntries.length === 0 ? (
          <div className="pixel-card p-8 text-center">
            <p className="font-primary text-gray-600">
              No entries yet. Start writing to see them here!
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {recentEntries.map((entry) => {
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
                        className="w-4 h-4"
                        style={{ color: categoryColor }}
                      />
                    )}
                    <span
                      className="font-mono text-xs font-semibold"
                      style={{ color: categoryColor }}
                    >
                      {entry.frontMatter.category}
                    </span>
                    <span className="text-gray-400">•</span>
                    <time className="font-mono text-xs text-gray-500">
                      {format(new Date(entry.frontMatter.date), 'MMM d, yyyy')}
                    </time>
                  </div>

                  {/* Title */}
                  <h3 className="font-primary font-bold text-xl text-gray-900 mb-2">
                    {entry.frontMatter.title}
                  </h3>

                  {/* Excerpt */}
                  {entry.frontMatter.excerpt && (
                    <p className="text-gray-600 text-sm mb-3">
                      {entry.frontMatter.excerpt}
                    </p>
                  )}

                  {/* Tags */}
                  {entry.frontMatter.tags && entry.frontMatter.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {entry.frontMatter.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded"
                        >
                          #{tag}
                        </span>
                      ))}
                      {entry.frontMatter.tags.length > 3 && (
                        <span className="font-mono text-xs text-gray-500">
                          +{entry.frontMatter.tags.length - 3} more
                        </span>
                      )}
                    </div>
                  )}
                </Link>
              );
            })}
          </div>
        )}

        {/* View All Link */}
        {recentEntries.length > 0 && (
          <div className="mt-8 text-center">
            <Link
              href="/entries"
              className="inline-flex items-center gap-2 font-mono text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              View all entries →
            </Link>
          </div>
        )}
      </section>
    </div>
  );
}
