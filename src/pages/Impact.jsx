import { useEffect, useRef } from "react";

export default function Impact() {
  const countersRef = useRef([]);

  // Counter animation using IntersectionObserver
  useEffect(() => {
    const counters = countersRef.current;

    const animateCounter = (el) => {
      const target = +el.dataset.target;
      let count = 0;
      const duration = 2000;
      const step = Math.ceil(target / (duration / 16));

      const update = () => {
        count += step;
        if (count >= target) {
          el.textContent = target.toLocaleString("en-US");
        } else {
          el.textContent = count.toLocaleString("en-US");
          requestAnimationFrame(update);
        }
      };

      requestAnimationFrame(update);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );

    counters.forEach((counter) => {
      if (counter) observer.observe(counter);
    });
  }, []);

  return (
    <main className="container mx-auto p-4 md:p-8">

      {/* MAIN TITLE */}
      <section className="my-16">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-green-700 dark:text-green-400 mb-12">
          Our Impact on the Planet
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-center">

          {/* CARD 1 */}
          <div className="bg-green-100 dark:bg-green-800 p-8 rounded-3xl shadow-xl">
            <h3 className="text-4xl md:text-5xl font-extrabold text-green-700 dark:text-green-300 mb-2">
              <span
                ref={(el) => (countersRef.current[0] = el)}
                data-target="150000"
              >
                0
              </span>
              +
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 font-medium">
              Tons of Waste Diverted
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-green-100 dark:bg-green-800 p-8 rounded-3xl shadow-xl">
            <h3 className="text-4xl md:text-5xl font-extrabold text-green-700 dark:text-green-300 mb-2">
              <span
                ref={(el) => (countersRef.current[1] = el)}
                data-target="25000"
              >
                0
              </span>
              +
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 font-medium">
              CO2 Emissions Saved
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-green-100 dark:bg-green-800 p-8 rounded-3xl shadow-xl">
            <h3 className="text-4xl md:text-5xl font-extrabold text-green-700 dark:text-green-300 mb-2">
              <span
                ref={(el) => (countersRef.current[2] = el)}
                data-target="75000"
              >
                0
              </span>
              +
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 font-medium">
              Tons of Materials Recycled
            </p>
          </div>

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-green-600 text-white p-8 md:p-16 rounded-3xl my-16 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Ready to build a greener city?
        </h2>
        <p className="text-lg md:text-xl mb-8 opacity-90">
          Let's work together to create a smarter and cleaner future.
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
