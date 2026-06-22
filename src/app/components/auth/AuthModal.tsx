"use client";

import { useEffect, useState } from "react";
import { X, Loader2, Eye, EyeOff } from "lucide-react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "@/app/lib/firebase";

export default function AuthModal({ show, setShow }: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState<"login" | "signup">("login");

  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // ESC CLOSE
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShow(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [setShow]);

  if (!show) return null;

  // EMAIL AUTH
  const handleAuth = async () => {
    setError("");
    setLoading(true);

    try {
      if (mode === "login") {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
      }

      setShow(false);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // GOOGLE AUTH
  const handleGoogleLogin = async () => {
    setError("");
    setGoogleLoading(true);

    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      setShow(false);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setGoogleLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">

      {/* BACKDROP */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={() => setShow(false)}
      />

      {/* MODAL */}
      <div className="relative w-[92%] max-w-md bg-white rounded-3xl shadow-2xl p-6">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">
            {mode === "login" ? "Welcome back" : "Create account"}
          </h2>

          <button
            onClick={() => setShow(false)}
            className="p-2 rounded-xl hover:bg-gray-100"
          >
            <X size={18} />
          </button>
        </div>

        {/* ERROR */}
        {error && (
          <div className="mb-4 text-sm bg-red-50 text-red-600 p-3 rounded-xl">
            {error}
          </div>
        )}

        {/* GOOGLE BUTTON (OFFICIAL STYLE) */}
        <button
          onClick={handleGoogleLogin}
          disabled={googleLoading}
          className="
            w-full
            flex
            items-center
            justify-center
            gap-3
            border
            border-gray-300
            bg-white
            hover:bg-gray-50
            active:bg-gray-100
            text-gray-800
            font-medium
            py-3
            rounded-xl
            transition-all
            disabled:opacity-60
            disabled:cursor-not-allowed
          "
        >
          {googleLoading ? (
            <Loader2 className="animate-spin" size={18} />
          ) : (
            <GoogleIcon />
          )}

          <span>Continue with Google</span>
        </button>

        {/* DIVIDER */}
        <div className="flex items-center my-5">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="px-3 text-xs text-gray-400">OR</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* EMAIL */}
        <input
          className="w-full border rounded-xl p-3 mb-3 focus:outline-none focus:ring-2 focus:ring-black"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* PASSWORD */}
        <div className="relative mb-4">
          <input
            className="w-full border rounded-xl p-3 pr-10 focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="Password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAuth()}
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-3 text-gray-500"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        {/* EMAIL AUTH BUTTON */}
        <button
          onClick={handleAuth}
          disabled={loading}
          className="
            w-full
            bg-black
            text-white
            py-3
            rounded-xl
            flex
            items-center
            justify-center
            gap-2
            hover:opacity-90
            disabled:opacity-60
          "
        >
          {loading && <Loader2 className="animate-spin" size={18} />}
          {mode === "login" ? "Login" : "Create account"}
        </button>

        {/* SWITCH MODE */}
        <p
          onClick={() =>
            setMode(mode === "login" ? "signup" : "login")
          }
          className="text-center mt-5 text-sm text-blue-600 cursor-pointer"
        >
          {mode === "login"
            ? "New here? Create account"
            : "Already have account? Login"}
        </p>
      </div>
    </div>
  );
}

/* ================= GOOGLE ICON ================= */
function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 48 48">
      <path
        fill="#FFC107"
        d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.4 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.5 6.1 29.6 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.7-.4-3.5z"
      />
      <path
        fill="#FF3D00"
        d="M6.3 14.7l6.6 4.8C14.5 16 18.9 12 24 12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.5 6.1 29.6 4 24 4 16.3 4 9.6 8.4 6.3 14.7z"
      />
      <path
        fill="#4CAF50"
        d="M24 44c5.2 0 9.9-1.9 13.5-5.1l-6.2-5.1C29.4 35.6 26.9 36.5 24 36c-5.4 0-9.7-3.3-11.3-8l-6.6 5.1C9.5 39.6 16.2 44 24 44z"
      />
      <path
        fill="#1976D2"
        d="M43.6 20.5H42V20H24v8h11.3c-1.1 3-3.2 5.4-6 6.9l6.2 5.1C38.9 36.9 44 31.1 44 24c0-1.3-.1-2.7-.4-3.5z"
      />
    </svg>
  );
}