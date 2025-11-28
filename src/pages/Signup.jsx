import { useState } from "react";
import { signupWithEmail } from "../firebase/firebaseConfig";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
await signupWithEmail(email, password)
      alert("Account created successfully!");
      window.location.href = "/dashboard"; // redirect after signup
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/tree.jpg')", // same background as login
      }}
    >
      {/* White overlay */}
      <div className="absolute inset-0 bg-white/75"></div>

      <div className="relative z-10 bg-white p-10 rounded-2xl shadow-2xl w-full max-w-md border border-gray-200">
        <h1 className="text-3xl font-extrabold text-center text-gray-900">
          Create Account
        </h1>

        <p className="text-center text-gray-600 mt-1">
          Join <span className="text-green-600 font-semibold">GreenEra</span> today 🌱
        </p>

        {error && (
          <p className="text-red-600 text-sm mt-3 text-center font-medium">
            {error}
          </p>
        )}

        <form className="mt-8 space-y-5" onSubmit={handleSignup}>
          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 border rounded-lg bg-gray-100"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full px-4 py-3 border rounded-lg bg-gray-100"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Sign Up
          </button>
        </form>

        {/* Bottom section */}
        <p className="text-center text-gray-700 mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-green-700 font-semibold hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
