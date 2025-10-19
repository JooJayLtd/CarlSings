import type { MDXComponents } from 'mdx/types';
import { CarlSection, BasilSection, LucySection } from './blog-sections';

interface CustomComponents {
  carlLog?: string;
  basilLog?: string;
  lucyLog?: string;
}

export function getMDXComponents(customData: CustomComponents): MDXComponents {
  return {
    CarlSection: (props: { children?: React.ReactNode }) => <CarlSection {...props} log={customData.carlLog} />,
    BasilSection: (props: { children?: React.ReactNode }) => <BasilSection {...props} log={customData.basilLog} />,
    LucySection: (props: { children?: React.ReactNode }) => <LucySection {...props} log={customData.lucyLog} />,
    // Open external links in new tab
    a: ({ href, children, ...props }) => {
      const isExternal = href?.startsWith('http');
      return (
        <a
          href={href}
          {...props}
          {...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
        >
          {children}
        </a>
      );
    },
    // Style h2 headings that are log statements
    h2: ({ children, ...props }) => {
      const text = String(children);

      // Check if it's a carl.log statement
      if (text.includes('carl.log()')) {
        return (
          <div className="p-4 bg-green-50 border-l-4 border-green-400 mb-6 mt-8">
            <p className="font-mono text-base m-0">
              <span className="text-green-700">carl.log(</span>
              <span className="text-green-600">&quot;{customData.carlLog || 'Loading...'}&quot;</span>
              <span className="text-green-700">)</span>
            </p>
          </div>
        );
      }

      // Check if it's a basil.log statement
      if (text.includes('basil.log()')) {
        return (
          <div className="p-4 bg-blue-50 border-l-4 border-blue-400 mb-6 mt-8">
            <p className="font-mono text-base m-0">
              <span className="text-blue-700">basil.log(</span>
              <span className="text-blue-600">&quot;{customData.basilLog || 'Loading...'}&quot;</span>
              <span className="text-blue-700">)</span>
            </p>
          </div>
        );
      }

      // Check if it's a lucy.log statement
      if (text.includes('lucy.log()')) {
        return (
          <div className="p-4 bg-pink-50 border-l-4 border-pink-400 mb-6 mt-8">
            <p className="font-mono text-base m-0">
              <span className="text-pink-700">lucy.log(</span>
              <span className="text-pink-600">&quot;{customData.lucyLog || 'Loading...'}&quot;</span>
              <span className="text-pink-700">)</span>
            </p>
          </div>
        );
      }

      // Regular h2
      return <h2 {...props}>{children}</h2>;
    },

    // Style strong tags that contain log statements (for inline usage)
    strong: ({ children, ...props }) => {
      const text = String(children);

      // Check if it's a carl.log statement
      if (text.includes('carl.log(')) {
        return (
          <span className="inline-block px-3 py-1 bg-green-50 border-l-4 border-green-400 font-mono text-sm my-2">
            <span className="text-green-700">{children}</span>
          </span>
        );
      }

      // Check if it's a basil.log statement
      if (text.includes('basil.log(')) {
        return (
          <span className="inline-block px-3 py-1 bg-blue-50 border-l-4 border-blue-400 font-mono text-sm my-2">
            <span className="text-blue-700">{children}</span>
          </span>
        );
      }

      // Check if it's a lucy.log statement
      if (text.includes('lucy.log(')) {
        return (
          <span className="inline-block px-3 py-1 bg-pink-50 border-l-4 border-pink-400 font-mono text-sm my-2">
            <span className="text-pink-700">{children}</span>
          </span>
        );
      }

      // Regular bold text
      return <strong {...props}>{children}</strong>;
    },
    // Style inline code
    code: ({ children, ...props }) => {
      return (
        <code className="px-1.5 py-0.5 bg-gray-100 text-gray-800 rounded font-mono text-sm not-prose" {...props}>
          {children}
        </code>
      );
    },
  };
}
