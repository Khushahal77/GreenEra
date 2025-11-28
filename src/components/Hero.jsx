export default function Hero() {
  return (
    <section
      className="text-black"
      style={{
        position: "relative",
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden"
      }}
    >
      {/* Background image as an absolutely positioned <img> so we can apply filters */}
      <img
        src="/tree.jpg"
        alt="trees background"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: "none",
          zIndex: 0
        }}
      />

      {/* Subtle overlay to keep text readable but preserve natural colors */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(rgba(6,95,70,0.08), rgba(3,63,44,0.08))",
          zIndex: 1
        }}
      ></div>

      <div style={{ position: "relative", zIndex: 10, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "0 1rem" }}>
        <h1 className="text-4xl md:text-6xl font-bold text-center">
          GreenEra – Smart Waste Management
        </h1>

        <p className="mt-4 text-lg md:text-xl text-center max-w-2xl" style={{ maxWidth: 720, textAlign: 'center', color: '#08332a' }}>
          A clean and green future powered by technology & sustainability
        </p>

        <button style={{ marginTop: 24, padding: '12px 24px', backgroundColor: '#16a34a', color: '#fff', borderRadius: 8, border: 'none', cursor: 'pointer' }}>
          Get Started
        </button>
      </div>
    </section>
  );
}
