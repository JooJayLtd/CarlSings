import Link from 'next/link';
import { categories } from '@/lib/types/category';
import { categoryConfig } from '@/lib/config/categories';

export function Navigation() {
  return (
    <nav className="bg-white border-b-2 border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <h1 className="font-pixel text-lg" style={{ color: 'var(--pixel-blue)' }}>
              Carl.Sings()
            </h1>
            <span className="font-mono text-sm text-gray-500 hidden md:inline">
              {`// when_he_doesn't_cry`}
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-1">
            {categories.map((category) => {
              const config = categoryConfig[category.slug];
              const Icon = config.icon;

              return (
                <Link
                  key={category.slug}
                  href={`/categories/${category.slug}`}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors group"
                >
                  <Icon
                    className="w-4 h-4 transition-colors"
                    style={{ color: config.color }}
                  />
                  <span className="font-primary text-sm font-medium text-gray-700 group-hover:text-gray-900 hidden lg:inline">
                    {category.name.replace('Carl ', '')}
                  </span>
                </Link>
              );
            })}

            {/* About Link */}
            <Link
              href="/about"
              className="ml-2 px-4 py-2 font-primary text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
