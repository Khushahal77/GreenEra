import { useState } from "react";

export default function HomeContent() {
  return (
    <main className="container mx-auto p-4 md:p-8">

      {/* HERO SECTION */}
      <section className="bg-green-500 text-white p-8 md:p-16 rounded-3xl shadow-lg my-8 md:my-12 text-center relative overflow-hidden">
        
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-20">
          <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="pattern-circles" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                <circle cx="5" cy="5" r="1" fill="#FFF" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#pattern-circles)" />
          </svg>
        </div>

        {/* Hero Content */}
        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            Smarter Waste Handling for Greener Futures.
          </h1>

          <p className="text-lg md:text-xl mb-8 opacity-90">
            Revolutionizing waste management with technology.
          </p>

          <a
            href="/solutions"
            className="bg-white text-green-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-200 transition shadow-md"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* WASTE REPORT SECTION */}
      <section id="report" className="my-16">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-green-700 dark:text-green-400 mb-8">
          Report Waste for Pickup
        </h2>

        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Help keep the city clean by reporting garbage. Our AI handles the rest.
        </p>

        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl max-w-3xl mx-auto">
          <form className="space-y-6">
            
            {/* Image Upload */}
            <div>
              <label className="block text-lg font-medium mb-2">Upload a picture:</label>
              <input
                type="file"
                accept="image/*"
                className="w-full bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl p-3"
                required
              />
            </div>

            {/* Address */}
            <div>
              <label className="block text-lg font-medium mb-2">Pickup Address:</label>
              <input
                type="text"
                placeholder="e.g., 123 Main St"
                className="w-full bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl p-3"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full md:w-auto bg-green-500 text-white px-8 py-4 rounded-full font-bold hover:bg-green-600 shadow-md"
            >
              Analyze & Report
            </button>
          </form>
        </div>
      </section>

      {/* REWARDS SECTION */}
      <section id="rewards" className="my-16">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-green-700 dark:text-green-400 mb-8">
          Redeem Your Coins for Rewards
        </h2>

        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Use your coins to unlock rewards.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

          <RewardCard
            title="Eco Sticker Pack"
            coins={10}
            description="Exclusive eco-themed laptop stickers."
          />

          <RewardCard
            title="Tree Planting Certificate"
            coins={25}
            description="Sponsor a tree and receive a digital certificate."
          />

          <RewardCard
            title="Social Media Shoutout"
            coins={50}
            description="Be featured on our official GreenEra social pages!"
          />

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-green-600 text-white p-8 md:p-16 rounded-3xl mb-12 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Ready to build a greener city?
        </h2>

        <p className="text-lg md:text-xl mb-8 opacity-90">
          Join us in creating a sustainable future.
        </p>

        <a
          href="/contact"
          className="bg-white text-green-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 shadow-md"
        >
          Get in Touch
        </a>
      </section>

    </main>
  );
}

// ---------------------------
// REWARD CARD COMPONENT
// ---------------------------

function RewardCard({ title, description, coins }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-xl hover:scale-105 transition-transform">
      <div className="flex flex-col items-center">

        <svg
          className="h-20 w-20 text-green-500 mb-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <circle cx="12" cy="12" r="10" strokeWidth="2"></circle>
        </svg>

        <h3 className="text-xl font-semibold text-green-600 dark:text-green-300 mb-2">
          {title}
        </h3>

        <p className="text-gray-600 dark:text-gray-300 text-center mb-4">
          {description}
        </p>

        <div className="text-yellow-500 font-bold text-lg mb-4">
          💰 {coins} Coins
        </div>

        <button className="bg-green-500 text-white px-6 py-3 rounded-full font-bold hover:bg-green-600 w-full shadow-lg">
          Open Reward
        </button>
      </div>
    </div>
  );
}
