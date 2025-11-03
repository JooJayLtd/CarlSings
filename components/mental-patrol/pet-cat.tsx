'use client';

/**
 * Luna the Cat
 * Personality: Calm, independent, soothing (Energy: 2, Aloof)
 * Style: Pixel art inspired by Nyan Cat (slower, calmer version)
 */

import { useEffect, useState } from 'react';

interface PetCatProps {
  onClick?: () => void;
  isClicked?: boolean;
  className?: string;
}

export function PetCat({ onClick, isClicked = false, className = '' }: PetCatProps) {
  const [isBlinking, setIsBlinking] = useState(false);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 200);
    }, 3000 + Math.random() * 2000);

    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <button
      onClick={onClick}
      className={`pet-cat relative cursor-pointer transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[var(--pixel-purple)] focus:ring-offset-2 ${className}`}
      aria-label="Luna the Cat - Click for a supportive message"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 100"
        width="200"
        height="100"
        className={isClicked ? 'animate-bounce-once' : ''}
      >
        <defs>
          {/* Small rainbow gradient - purple theme */}
          <linearGradient id="RainbowGradient" gradientTransform="rotate(90)">
            <stop offset="0%" stopColor="#C084FC" />
            <stop offset="33%" stopColor="#A78BFA" />
            <stop offset="66%" stopColor="#818CF8" />
            <stop offset="100%" stopColor="#6366F1" />
          </linearGradient>

          <style>
{`
  .rainbow-trail {
    animation: rainbow-wave 1.2s ease-in-out infinite;
  }
  .rainbow-piece1 { animation-delay: 0s; }
  .rainbow-piece2 { animation-delay: -0.4s; }
  .rainbow-piece3 { animation-delay: -0.8s; }

  @keyframes rainbow-wave {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(3px); }
  }

  .cat-body {
    animation: cat-float 1.2s ease-in-out infinite;
  }

  @keyframes cat-float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-2px); }
  }

  .paw-move {
    animation: paw 1.2s steps(2) infinite;
  }

  @keyframes paw {
    0%, 49% { opacity: 1; }
    50%, 100% { opacity: 0.3; }
  }
`}
          </style>
        </defs>

        {/* Small rainbow trail */}
        <g className="rainbow-trail">
          <rect className="rainbow-piece1" x="20" y="45" width="15" height="30" fill="url('#RainbowGradient')" opacity="0.6" rx="2" />
          <rect className="rainbow-piece2" x="38" y="45" width="15" height="30" fill="url('#RainbowGradient')" opacity="0.7" rx="2" />
          <rect className="rainbow-piece3" x="56" y="45" width="15" height="30" fill="url('#RainbowGradient')" opacity="0.8" rx="2" />
        </g>

        {/* Cat body - pixel art style */}
        <g className="cat-body" transform="translate(85, 35)">
          {/* Body */}
          <rect x="8" y="20" width="32" height="16" fill="#9CA3AF" />

          {/* Head */}
          <rect x="12" y="8" width="24" height="16" fill="#9CA3AF" />

          {/* Ears */}
          <rect x="10" y="4" width="6" height="6" fill="#9CA3AF" />
          <rect x="28" y="4" width="6" height="6" fill="#9CA3AF" />

          {/* Inner ears (pink) */}
          <rect x="11" y="6" width="4" height="3" fill="#FCA5A5" />
          <rect x="29" y="6" width="4" height="3" fill="#FCA5A5" />

          {/* Eyes */}
          {!isBlinking ? (
            <>
              <rect x="16" y="12" width="4" height="4" fill="#1F2937" />
              <rect x="28" y="12" width="4" height="4" fill="#1F2937" />
              {/* Eye shine */}
              <rect x="17" y="13" width="2" height="2" fill="white" />
              <rect x="29" y="13" width="2" height="2" fill="white" />
            </>
          ) : (
            <>
              <rect x="16" y="14" width="4" height="1" fill="#1F2937" />
              <rect x="28" y="14" width="4" height="1" fill="#1F2937" />
            </>
          )}

          {/* Nose */}
          <rect x="22" y="18" width="4" height="2" fill="#EC4899" />

          {/* Mouth - simple W shape */}
          <rect x="20" y="21" width="2" height="1" fill="#1F2937" />
          <rect x="26" y="21" width="2" height="1" fill="#1F2937" />

          {/* Whiskers */}
          <rect x="6" y="15" width="6" height="1" fill="#6B7280" opacity="0.7" />
          <rect x="6" y="18" width="6" height="1" fill="#6B7280" opacity="0.7" />
          <rect x="36" y="15" width="6" height="1" fill="#6B7280" opacity="0.7" />
          <rect x="36" y="18" width="6" height="1" fill="#6B7280" opacity="0.7" />

          {/* Front paws */}
          <rect className="paw-move" x="14" y="36" width="6" height="8" fill="#9CA3AF" />
          <rect x="28" y="36" width="6" height="8" fill="#9CA3AF" style={{ animationDelay: '-0.6s' }} />

          {/* Paw pads */}
          <rect x="15" y="41" width="2" height="1" fill="#FCA5A5" opacity="0.8" />
          <rect x="18" y="41" width="2" height="1" fill="#FCA5A5" opacity="0.8" />
          <rect x="29" y="41" width="2" height="1" fill="#FCA5A5" opacity="0.8" />
          <rect x="32" y="41" width="2" height="1" fill="#FCA5A5" opacity="0.8" />

          {/* Tail */}
          <rect x="40" y="22" width="4" height="4" fill="#9CA3AF" />
          <rect x="44" y="18" width="4" height="4" fill="#9CA3AF" />
          <rect x="48" y="14" width="4" height="4" fill="#9CA3AF" />
        </g>

        {/* Sparkles when clicked */}
        {isClicked && (
          <>
            <rect x="70" y="30" width="4" height="4" fill="#FCD34D" className="animate-ping" />
            <rect x="150" y="40" width="4" height="4" fill="#FCD34D" className="animate-ping" style={{ animationDelay: '0.1s' }} />
            <rect x="110" y="20" width="4" height="4" fill="#FCD34D" className="animate-ping" style={{ animationDelay: '0.2s' }} />
          </>
        )}
      </svg>

      {/* Purr text */}
      {isClicked && (
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-sm font-pixel text-[var(--pixel-purple)] animate-fade-out">
          purr~
        </div>
      )}
    </button>
  );
}
