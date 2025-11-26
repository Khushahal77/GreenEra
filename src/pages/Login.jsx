import { useState } from "react";
import { loginWithEmail, signInWithGoogle } from "../firebase/firebaseConfig";

export default function Login({ modal = false }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await loginWithEmail(email, password);
      window.location.href = "/dashboard";
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithGoogle();
      window.location.href = "/dashboard";
    } catch (err) {
      setError(err.message);
    }
  };

  const card = (
    <div className="relative z-10 bg-white p-10 rounded-2xl shadow-2xl w-full max-w-md border border-gray-200">
      <h1 className="text-4xl font-extrabold text-center text-gray-900">
        Welcome Back
      </h1>
      <p className="text-center text-gray-600 mt-1">
        Login to continue to{" "}
        <span className="text-green-600 font-semibold">GreenEra</span>
      </p>

      {error && (
        <p className="text-red-600 text-sm mt-3 text-center font-medium">
          {error}
        </p>
      )}

      <form className="mt-8 space-y-5" onSubmit={handleLogin}>
        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="text-right">
          <a href="#" className="text-green-700 text-sm hover:underline">
            Forgot password?
          </a>
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-green-600 text-white font-semibold text-lg hover:bg-green-700 transition shadow-md hover:shadow-lg"
        >
          Login
        </button>
      </form>

      {/* OR Divider */}
      <div className="flex items-center gap-3 my-6">
        <div className="h-px flex-1 bg-gray-300"></div>
        <span className="text-gray-500">or</span>
        <div className="h-px flex-1 bg-gray-300"></div>
      </div>

      {/* Google Login */}
      <button
        type="button"
        onClick={handleGoogleLogin}
        className="w-full py-3 rounded-lg border border-gray-300 bg-white flex items-center justify-center gap-3 hover:bg-gray-100 transition shadow-sm"
      >
        <img
          src="https://developers.google.com/identity/images/g-logo.png"
          alt="Google Logo"
          className="w-5 h-5"
        />
        <span className="text-gray-700 font-medium">Login with Google</span>
      </button>

      <p className="text-center text-gray-700 mt-6">
        New to GreenEra?{" "}
        <a href="/signup" className="text-green-700 font-semibold hover:underline">
          Create an account
        </a>
      </p>
    </div>
  );

  // 🔳 Modal Version
  if (modal) {
    return (
      <div
        style={{
          position: "fixed",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1100,
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.4)",
          }}
        ></div>
        {card}
      </div>
    );
  }

  // 🌿 Full Page Login
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: "url('/tree.jpg')" }}
    >
      <div className="absolute inset-0 bg-white/75"></div>
      {card}
    </div>
  );
}
