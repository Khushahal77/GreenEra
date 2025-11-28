import { useNavigate } from "react-router-dom";

export default function Splash() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/tree.jpg')" }}
    >
      <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(255,255,255,0.08)' }}></div>

      <div style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#08332a' }}>Welcome to GreenEra</h1>
        <p style={{ marginTop: 12, color: '#064035', maxWidth: 720, marginLeft: 'auto', marginRight: 'auto' }}>
          A clean and green future powered by technology & sustainability
        </p>

        <button
          onClick={() => navigate('/home')}
          style={{
            marginTop: 24,
            padding: '12px 28px',
            backgroundColor: '#16a34a',
            color: '#fff',
            borderRadius: 8,
            border: 'none',
            cursor: 'pointer',
            fontWeight: 600
          }}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
