import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
      <div className="max-w-2xl text-center">
        {/* ASCII Cat */}
        <pre className="font-mono text-xs md:text-sm leading-none mb-8 inline-block" style={{ color: 'var(--pixel-blue)' }}>
{`
    /\\_/\\
   ( o.o )
    > ^ <
   /|   |\\
  (_|   |_)
`}
        </pre>

        {/* 404 Message */}
        <h1 className="font-pixel text-3xl md:text-4xl mb-4" style={{ color: 'var(--pixel-red)' }}>
          404: Page Not Found
        </h1>

        <p className="font-primary text-lg text-gray-700 mb-2">
          Oops! Lulu knocked your page off the internet.
        </p>

        <p className="font-mono text-sm text-gray-500 mb-8">
          {`// typical Lulu behavior`}
        </p>

        {/* Error Details */}
        <div className="pixel-card p-6 mb-8 text-left">
          <p className="font-mono text-sm text-gray-600 mb-2">
            <span style={{ color: 'var(--pixel-red)' }}>Error:</span> CatastrophicPageNotFoundException
          </p>
          <p className="font-mono text-sm text-gray-600 mb-2">
            <span style={{ color: 'var(--pixel-blue)' }}>Cause:</span> Lulu sat on keyboard
          </p>
          <p className="font-mono text-sm text-gray-600">
            <span style={{ color: 'var(--pixel-green)' }}>Solution:</span> Try the links below
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/" className="pixel-button pixel-button-primary">
            Go Home
          </Link>
          <Link href="/entries" className="pixel-button pixel-button-secondary">
            Browse Entries
          </Link>
        </div>

        {/* Fun message */}
        <p className="font-mono text-xs text-gray-400 mt-8">
          *Lulu purrs innocently*
        </p>
      </div>
    </div>
  );
}
