import { ExternalLink } from 'lucide-react';

interface MusicPlayerProps {
  url: string;
  spotifyTrackId: string;
  title: string;
  artist: string;
}

export function MusicPlayer({ url, spotifyTrackId, title, artist }: MusicPlayerProps) {
  return (
    <div className="max-w-lg mx-auto">
      <div className="pixel-card p-4">
        {/* Title and Spotify Link */}
        <div className="flex items-start justify-between mb-3">
          <div>
            <p className="font-primary font-medium text-gray-900 text-sm">
              {title}
            </p>
            <p className="font-mono text-xs text-gray-500">
              {artist}
            </p>
          </div>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs font-mono hover:opacity-70 transition-opacity"
            style={{ color: 'var(--pixel-green)' }}
          >
            <ExternalLink className="w-4 h-4" />
            Spotify
          </a>
        </div>

        {/* Spotify Embed */}
        <div className="rounded-xl overflow-hidden bg-black">
          <iframe
            style={{ borderRadius: '12px' }}
            src={`https://open.spotify.com/embed/track/${spotifyTrackId}?utm_source=generator&theme=0`}
            width="100%"
            height="152"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title={`${title} - ${artist}`}
          />
        </div>
      </div>
    </div>
  );
}
