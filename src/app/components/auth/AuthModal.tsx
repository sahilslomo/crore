"use client";

import { X, Mail } from "lucide-react";

export default function AuthModal({
  showAuth,
  setShowAuth,
  email,
  setEmail,
  password,
  setPassword,
  isSignup,
  setIsSignup,
  handleGoogleLogin,
  handleEmailAuth,
  loading,
}: any) {
  if (!showAuth) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white p-6 rounded-3xl w-full max-w-sm">

        <div className="flex justify-between mb-5">
          <h2 className="text-2xl font-bold">Welcome</h2>

          <button onClick={() => setShowAuth(false)}>
            <X />
          </button>
        </div>

        <button
          onClick={handleGoogleLogin}
          className="w-full border p-3 rounded-xl mb-4"
        >
          Continue with Google
        </button>

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full border p-3 rounded-xl mb-3"
        />

        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full border p-3 rounded-xl mb-3"
        />

        <button
          onClick={handleEmailAuth}
          className="w-full bg-black text-white p-3 rounded-xl"
        >
          {isSignup ? "Signup" : "Login"}
        </button>

        <button
          onClick={() => setIsSignup(!isSignup)}
          className="text-sm mt-3"
        >
          Toggle Signup/Login
        </button>
      </div>
    </div>
  );
}