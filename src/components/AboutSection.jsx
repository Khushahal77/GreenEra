export default function AboutSection() {
  return (
    <section className="my-16 container mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        
        <div className="rounded-3xl overflow-hidden shadow-xl">
          <img
            src="https://placehold.co/800x600/60a5fa/ffffff?text=AI-Powered+Waste+Bin"
            alt="Smart AI bin"
            className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-green-700 dark:text-green-300">
            Who We Are
          </h2>

          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            GreenEra Waste Solutions is at the forefront of modern waste management.
            We fuse <strong>AI</strong> and <strong>IoT</strong> to build smarter, cleaner, 
            and sustainable cities.
          </p>

          <a
            href="#contact"
            className="inline-block bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 shadow-lg"
          >
            Join Our Mission
          </a>
        </div>

      </div>
    </section>
  );
}
