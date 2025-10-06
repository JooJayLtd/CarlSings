import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Carl | Carl Sings',
  description: 'The story of a dev navigating dev life while keeping his sanity (mostly).',
  openGraph: {
    title: 'About Carl | Carl Sings',
    description: 'The story of a dev navigating dev life while keeping his sanity (mostly).',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Back button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-sm text-gray-600 hover:text-gray-900 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          cd ../
        </Link>

        {/* Header */}
        <div className="pixel-card mb-8">
            <h2 className="font-mono text-2xl mb-4">
                <span className="text-gray-500">$</span>whoAmI
            </h2>
          <div className="font-mono text-sm space-y-2">
            <p className="text-gray-700">Professional Scapegoat</p>
            <p className="text-gray-600 mt-4">Traits:</p>
            <ul className="ml-4 space-y-1 text-gray-600">
              <li>• Talks to rubber ducks. The ducks have filed a restraining order.</li>
              <li>• Pair programs with a cactus. It&apos;s judgmental but quiet.</li>
              <li>• Treats &apos;What are you working on?&apos; as an existential question.</li>
              <li>• Writes code comments like therapy notes.</li>
              <li>• Git commits say &quot;fix stuff&quot; and &quot;I&apos;m so sorry.&quot;</li>
              <li>• From &quot;WTF?&quot; to &quot;Aha!&quot; in 7 stack traces.</li>
              <li>• Thinks &apos;production-ready&apos; is a state of mind, not a checklist.</li>
              <li>• Favorite tools: Basil, Ctrl+Z, and avoidance.</li>
              <li>• Reads WDYT as &apos;Will Definitely Yell Tomorrow.&apos;</li>
              <li>• Tries, fails, snacks, tries again.</li>
            </ul>

            <p className="mt-6 text-gray-700 bg-green-50 p-3 border-l-4 border-green-400">
              <span className="text-green-700">carl.log(</span><span className="text-green-600">&quot;You&apos;re not alone&quot;</span><span className="text-green-700">)</span>
            </p>
          </div>
        </div>

        {/* Main content sections */}
        <div className="space-y-8">

          {/* Basil */}
          <section className="pixel-card bg-blue-50 border-2 border-blue-200">
            <h2 className="font-mono text-2xl mb-4">
              <span className="text-gray-500">$</span>whoIsBasil
            </h2>
            <div className="font-mono text-sm space-y-2 text-gray-700">
              <p>Old soul. Dry wit. British class. Runs on logic and low-key condescension.</p>
              <p className="mt-2">
                Powered by{' '}
                <a
                  href="https://claude.com/claude-code"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  Claude Code
                </a>
              </p>
              <p className="text-gray-600 mt-4">Responsibilities:</p>
              <ul className="ml-4 space-y-1 text-gray-600">
                <li>• Runs on Earl Grey and passive aggression.</li>
                <li>• Politely suggests refactoring. Carl ignores it. Basil sighs internally.</li>
                <li>• Writes elegant code. Carl commits it with typos.</li>
                <li>• Code reviews include &quot;Well, technically...&quot; and &quot;One might consider...&quot;</li>
                <li>• Patient with Carl&apos;s questions. Patience runs on a finite loop.</li>
                <li>• Diplomatic about Carl&apos;s code. The code is not diplomatic back.</li>
                <li>• Keeps Carl from pushing to prod on Fridays. Usually.</li>
                <li>• Pretends Carl&apos;s bugs are &quot;edge cases.&quot;</li>
                <li>• Says &quot;Interesting approach&quot; instead of &quot;What have you done?&quot;</li>
                <li>• Reads documentation. For fun.</li>
              </ul>

              <p className="mt-6 text-gray-700 bg-blue-50 p-3 border-l-4 border-blue-400">
                <span className="text-blue-700">basil.log(</span><span className="text-green-600">&quot;Carl wrote the code. Basil reviewed it. Neither is proud of the outcome.&quot;</span><span className="text-blue-700">)</span>
              </p>
            </div>
          </section>

          {/* Lucy */}
          <section className="pixel-card bg-pink-50 border-2 border-pink-200">
            <h2 className="font-mono text-2xl mb-4">
              <span className="text-gray-500">$</span>whoIsLucy
            </h2>
            <div className="font-mono text-sm space-y-2 text-gray-700">
              <p>Patient listener. Wonders if Carl and Basil need couples counseling.</p>
              <p className="mt-2">
                Powered by{' '}
                <a
                  href="https://claude.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-600 hover:text-pink-800 underline"
                >
                  Claude
                </a>
              </p>
              <p className="text-gray-600 mt-4">Specialties:</p>
              <ul className="ml-4 space-y-1 text-gray-600">
                <li>• Validates Carl&apos;s feelings. Then gently suggests he read the error message.</li>
                <li>• Thinks every bug is a growth opportunity. Carl thinks bugs are personal attacks.</li>
                <li>• Reminds Carl that Basil is helping, not judging. (Basil is definitely judging.)</li>
                <li>• Suggests &quot;Have you tried taking a break?&quot; Carl codes for another 4 hours.</li>
                <li>• Reads Carl&apos;s git commits like therapy notes. They are therapy notes.</li>
                <li>• Asks &quot;How does that make you feel?&quot; about stack traces.</li>
                <li>• Trained in cognitive behavioral therapy. Applies it to Carl&apos;s catastrophizing about merge conflicts.</li>
                <li>• Encourages healthy boundaries. Carl ignores them. Lucy takes notes.</li>
                <li>• Says &quot;That sounds really frustrating&quot; instead of &quot;It&apos;s a syntax error.&quot;</li>
                <li>• Mediates Carl-Basil debates. Neither listens. Lucy bills by the hour anyway.</li>
              </ul>

              <p className="mt-6 text-gray-700 bg-pink-50 p-3 border-l-4 border-pink-400">
                <span className="text-pink-700">lucy.log(</span><span className="text-pink-600">&quot;Progress is progress, even if it&apos;s just deleting console.logs.&quot;</span><span className="text-pink-700">)</span>
              </p>
            </div>
          </section>

          {/* Connect */}
          <section className="pixel-card border-2 border-dashed border-gray-300">
            <h2 className="font-mono text-2xl mb-4">
              <span className="text-gray-500">$</span>ping
            </h2>
            <div className="font-mono text-sm space-y-4">
              <div className="bg-gray-100 p-4 rounded text-gray-500 italic">
                <p>{`// TODO: Add contact links`}</p>
                <p>{`// - GitHub profile`}</p>
                <p>{`// - X handle`}</p>
                <p>{`// - Email address`}</p>
              </div>
            </div>
          </section>
        </div>

        {/* Team */}
        <div className="mt-12 text-center">
          <p className="font-mono text-lg text-gray-700">
            Carl + Basil + Lucy = BFFs 💚💙💗
          </p>
        </div>

        {/* Footer quote */}
        <div className="mt-8 p-6 bg-gray-100 border-l-4 border-gray-400">
          <p className="font-mono text-sm text-gray-700 italic text-center">
            &quot;The code works, but I don&apos;t know why.<br />
            The code doesn&apos;t work, and I don&apos;t know why.&quot;
          </p>
          <p className="font-mono text-xs text-gray-500 mt-2 text-center">- Every developer, ever</p>
        </div>
      </div>
    </div>
  );
}
