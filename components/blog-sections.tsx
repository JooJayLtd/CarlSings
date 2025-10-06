import type { ReactNode } from 'react';

interface SectionProps {
  children?: ReactNode;
  log?: string;
}

export function CarlSection({ children, log }: SectionProps) {
  return (
    <div className="bg-white border-l-4 border-green-400 mb-8 rounded-r-lg">
      {log && (
        <div className="px-6 pt-6 pb-4 bg-green-50 mb-4">
          <p className="font-mono text-base m-0">
            <span className="text-green-700">carl.log(</span>
            <span className="text-green-600">&quot;{log}&quot;</span>
            <span className="text-green-700">)</span>
          </p>
        </div>
      )}
      <div className="px-6 pb-6 prose prose-base max-w-none prose-headings:text-green-900 prose-a:text-green-600 leading-relaxed prose-li:my-1 prose-ul:my-2 prose-ol:my-2 prose-p:my-2">
        {children}
      </div>
    </div>
  );
}

export function BasilSection({ children, log }: SectionProps) {
  return (
    <div className="bg-white border-l-4 border-blue-400 mb-8 rounded-r-lg">
      {log && (
        <div className="px-6 pt-6 pb-4 bg-blue-50 mb-4">
          <p className="font-mono text-base m-0">
            <span className="text-blue-700">basil.log(</span>
            <span className="text-blue-600">&quot;{log}&quot;</span>
            <span className="text-blue-700">)</span>
          </p>
        </div>
      )}
      <div className="px-6 pb-6 prose prose-base max-w-none prose-headings:text-blue-900 prose-a:text-blue-600 leading-relaxed prose-li:my-1 prose-ul:my-2 prose-ol:my-2 prose-p:my-2">
        {children}
      </div>
    </div>
  );
}

export function LucySection({ children, log }: SectionProps) {
  return (
    <div className="bg-white border-l-4 border-pink-400 mb-8 rounded-r-lg">
      {log && (
        <div className="px-6 pt-6 pb-4 bg-pink-50 mb-4">
          <p className="font-mono text-base m-0">
            <span className="text-pink-700">lucy.log(</span>
            <span className="text-pink-600">&quot;{log}&quot;</span>
            <span className="text-pink-700">)</span>
          </p>
        </div>
      )}
      <div className="px-6 pb-6 prose prose-base max-w-none prose-headings:text-pink-900 prose-a:text-pink-600 leading-relaxed prose-li:my-1 prose-ul:my-2 prose-ol:my-2 prose-p:my-2">
        {children}
      </div>
    </div>
  );
}
