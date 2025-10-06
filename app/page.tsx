import Link from 'next/link';
import { MusicPlayer } from '@/components/music-player';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white border-b-2 border-gray-200 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="mb-6 flex items-center justify-center gap-8">
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
            Welcome to your developer blog. A place to document the highs, lows,
            and everything in between on this chaotic journey through software development.
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

      {/* Recent Entries Section - Placeholder for now */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="font-primary font-bold text-3xl text-gray-900 mb-8">
          Recent Entries
        </h2>
        <div className="pixel-card p-8 text-center">
          <p className="font-primary text-gray-600">
            No entries yet. Start writing to see them here! 📝
          </p>
        </div>
      </section>
    </div>
  );
}
