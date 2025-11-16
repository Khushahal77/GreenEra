export default function Working() {
  return (
    <section id="working" className="px-10 py-20 text-center">
      <h2 className="text-3xl font-bold mb-8">How It Works</h2>

      <div className="grid md:grid-cols-4 gap-4">

        <div className="bg-green-100 px-6 py-4 rounded-xl">1. Waste Detected</div>
        <div className="bg-green-100 px-6 py-4 rounded-xl">2. AI Classifies Waste</div>
        <div className="bg-green-100 px-6 py-4 rounded-xl">3. Auto Pickup Scheduled</div>
        <div className="bg-green-100 px-6 py-4 rounded-xl">4. Recycled or Disposed</div>

      </div>
    </section>
  );
}
