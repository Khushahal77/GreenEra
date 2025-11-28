export default function About() {
  return (
    <main className="container mx-auto p-4 md:p-8">

      {/* ABOUT SECTION */}
      <section id="about" className="my-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* IMAGE */}
          <div className="relative overflow-hidden rounded-3xl shadow-xl">
            <img
              src="https://placehold.co/800x600/60a5fa/ffffff?text=AI-Powered+Waste+Bin"
              alt="AI-powered waste bin with sensors"
              className="w-full h-auto object-cover transform transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* TEXT */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-green-700 dark:text-green-400">
              Who We Are
            </h2>

            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              GreenEra Waste Solutions is at the forefront of modern waste management.
              We fuse <strong>Artificial Intelligence (AI)</strong> and the{" "}
              <strong>Internet of Things (IoT)</strong> with a commitment to sustainability
              to help cities, businesses, and communities handle waste more efficiently
              and responsibly.
              <br />
              <br />
              Our mission is to reduce landfill waste, increase recycling rates,
              and create a circular economy where waste is a valuable resource.
            </p>

            <a
              href="/contact"
              className="inline-block bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors duration-300 shadow-lg"
            >
              Join Our Mission
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-600 text-white p-8 md:p-16 rounded-3xl my-16 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Ready to build a greener city?
        </h2>
        <p className="text-lg md:text-xl mb-8 opacity-90">
          Let's work together to create a smarter, cleaner, and more sustainable future.
        </p>

        <a
          href="/contact"
          className="bg-white text-green-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-colors duration-300 shadow-md"
        >
          Get in Touch
        </a>
      </section>

    </main>
  );
}
