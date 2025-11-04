import Link from 'next/link';
import { Battery } from 'lucide-react';

export function AppSidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-16 bg-white flex flex-col items-center justify-center z-30">
      <Link
        href="/tools/soul-battery"
        className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
        title="Soul Battery"
      >
        <Battery className="w-6 h-6 text-gray-700" />
      </Link>
    </aside>
  );
}
