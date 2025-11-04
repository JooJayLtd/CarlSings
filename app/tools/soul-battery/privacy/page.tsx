export default function SoulBatteryPrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto prose prose-slate">
        <h1>Privacy Policy</h1>
        <p className="text-muted-foreground">Last updated: November 4, 2025</p>

        <h2>Overview</h2>
        <p>
          Carl&apos;s Soul Battery extension is committed to protecting your privacy.
          This privacy policy explains our data practices for the Chrome extension.
        </p>

        <h2>Data Collection</h2>
        <p>
          <strong>Carl&apos;s Soul Battery extension does NOT collect, store, or transmit any user data.</strong>
        </p>

        <h2>What the Extension Does</h2>
        <ul>
          <li>Displays the current time to calculate battery percentage based on work hours (9 AM - 6 PM)</li>
          <li>Shows animations and messages based on the time of day</li>
          <li>All calculations happen locally in your browser</li>
          <li>Uses Google Fonts to display the &quot;Press Start 2P&quot; font for styling</li>
        </ul>

        <h2>No Data Storage or Transmission</h2>
        <p>The extension does not:</p>
        <ul>
          <li>Track your browsing history</li>
          <li>Collect personal information</li>
          <li>Send data to external servers (except loading fonts from Google Fonts CDN)</li>
          <li>Use cookies or analytics</li>
          <li>Store any information locally or remotely</li>
          <li>Require any permissions beyond displaying the popup</li>
        </ul>

        <h2>Third-Party Services</h2>
        <p>
          The extension loads the &quot;Press Start 2P&quot; font from Google Fonts CDN for display purposes only.
          This is a standard CSS font loading mechanism. No user data is shared with Google Fonts.
        </p>

        <h2>Changes to This Privacy Policy</h2>
        <p>
          We may update this privacy policy from time to time. Any changes will be posted on this page
          with an updated revision date.
        </p>

        <h2>Contact</h2>
        <p>
          If you have any questions about this privacy policy or the extension, please visit:
          <a href="https://carl-is.live/tools/soul-battery/privacy" className="text-blue-600 hover:underline">
             carl-is.live
          </a>
        </p>

        <h2>Open Source</h2>
        <p>
          This extension is part of the Carl Sings project. The source code is available for review,
          demonstrating our commitment to transparency and privacy.
        </p>
      </div>
    </div>
  );
}
