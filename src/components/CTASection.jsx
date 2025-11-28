export default function CTASection() {
  return (
    <section className="bg-green-600 text-white p-12 md:p-16 rounded-3xl my-16 text-center container mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to build a greener city?</h2>
      <p className="text-lg md:text-xl mb-8 opacity-90">
        Let's work together to create a smarter, cleaner future.
      </p>

      <a
        href="#contact"
        className="bg-white text-green-600 px-8 py-4 rounded-full font-bold text-lg shadow-md hover:bg-gray-200"
      >
        Get in Touch
      </a>
    </section>
  );
}
