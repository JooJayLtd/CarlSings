import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mental Patrol | Carl Sings',
  description: 'Your mental patrol pet',
};

export default function MentalPatrolPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4 font-pixel" style={{ color: 'var(--pixel-blue)' }}>
          Mental Patrol
        </h1>
        <p className="text-center text-muted-foreground mb-8">
          Your mental patrol pet is here!
        </p>

        {/* Placeholder for Mental Patrol interface */}
        <div className="pixel-card p-8 text-center">
          <p className="text-lg">Mental Patrol interface coming soon...</p>
          <p className="text-sm text-muted-foreground mt-4">
            Choose your companion pet and interrupt rumination loops.
          </p>
        </div>
      </div>
    </div>
  );
}
