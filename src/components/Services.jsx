export default function Services() {
  return (
    <section id="services" className="px-10 py-20 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-10">Our Services</h2>

      <div className="grid md:grid-cols-3 gap-8">
        
        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
          <h3 className="text-xl font-bold mb-2">Smart Waste Tracking</h3>
          <p className="text-gray-600">
            Track bin levels using sensors and AI.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
          <h3 className="text-xl font-bold mb-2">AI Waste Segregation</h3>
          <p className="text-gray-600">
            Classify dry/wet waste automatically.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
          <h3 className="text-xl font-bold mb-2">Recycling Marketplace</h3>
          <p className="text-gray-600">
            Connect households with recyclers.
          </p>
        </div>

      </div>
    </section>
  );
}
