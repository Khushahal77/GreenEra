export default function Solutions() {
  return (
    <main className="container mx-auto p-4 md:p-8">

      {/* TITLE */}
      <section id="solutions" className="my-16">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-green-700 dark:text-green-400 mb-12">
          Our AI & IoT Solutions
        </h2>

        {/* SOLUTIONS GRID */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl transition-transform duration-300 hover:scale-105 hover:rotate-2">
            <div className="mb-4">
              <svg
                className="h-12 w-12 text-green-500"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                <path d="M12 10a2 2 0 110 4 2 2 0 010-4zm0 8c-3.31 0-6-2.69-6-6H4c0 4.42 3.58 8 8 8v-2z" />
              </svg>
            </div>

            <h3 className="text-2xl font-semibold mb-2 text-green-600 dark:text-green-300">
              AI & IoT-Enabled Bins
            </h3>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              IoT sensors monitor fill levels in real-time, while AI predicts
              waste patterns to optimize pickup routes and reduce fuel usage.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl transition-transform duration-300 hover:scale-105 hover:-rotate-2">
            <div className="mb-4">
              <svg
                className="h-12 w-12 text-green-500"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-6 14h-2v-4H9v-2h2V7h2v4h2v2h-2v4z" />
              </svg>
            </div>

            <h3 className="text-2xl font-semibold mb-2 text-green-600 dark:text-green-300">
              AI Predictive Analytics
            </h3>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Our AI engine analyzes waste generation trends to forecast future
              demands—helping cities save money and improve operations.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl transition-transform duration-300 hover:scale-105 hover:rotate-2">
            <div className="mb-4">
              <svg
                className="h-12 w-12 text-green-500"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                <circle cx="9" cy="10" r="1" />
                <circle cx="15" cy="10" r="1" />
              </svg>
            </div>

            <h3 className="text-2xl font-semibold mb-2 text-green-600 dark:text-green-300">
              AI-Driven Sorting
            </h3>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Using high-speed camera systems, our AI identifies and sorts
              recyclables with exceptional precision — reducing manual effort.
            </p>
          </div>
        </div>
      </section>

      {/* CTA FOOTER */}
      <section className="bg-green-600 text-white p-8 md:p-16 rounded-3xl my-16 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Ready to build a greener city?
        </h2>

        <p className="text-lg md:text-xl mb-8 opacity-90">
          Let's work together to create a smarter, cleaner, and more sustainable future.
        </p>

        <a
          href="/contact"
          className="bg-white text-green-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition shadow-md"
        >
          Get in Touch
        </a>
      </section>
    </main>
  );
}
