
"use client";

import { useState } from "react";
import Link from "next/link";
import { signUp } from "@/lib/auth-client";
import SocialLogin from "@/components/auth/SocialLogin";

export default function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const result = await signUp.email({
        name,
        email,
        password,
      });

      if (result.error) {
        setError(result.error.message ?? "অ্যাকাউন্ট তৈরি করা যায়নি।");
        return;
      }

      window.location.href = "/";
    } catch {
      setError("সমস্যা হয়েছে। আবার চেষ্টা করো।");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-gray-50 px-4 py-10">
      <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="mb-6 text-center">
          <p className="text-4xl">🛒</p>

          <h1 className="mt-3 text-2xl font-bold text-gray-900">
            নতুন অ্যাকাউন্ট তৈরি করো
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            বাজার দর ব্যবহার করতে Sign Up করো
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="mb-1 block text-sm font-medium"
            >
              তোমার নাম
            </label>

            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="তোমার পুরো নাম"
              autoComplete="name"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-600"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-1 block text-sm font-medium"
            >
              Email address
            </label>

            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              autoComplete="email"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-600"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-1 block text-sm font-medium"
            >
              Password
            </label>

            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="কমপক্ষে ৮ অক্ষর"
              autoComplete="new-password"
              minLength={8}
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-600"
            />
          </div>

          {error && (
            <p
              role="alert"
              className="rounded-lg bg-red-50 p-3 text-sm text-red-600"
            >
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-green-600 px-4 py-3 font-semibold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "অ্যাকাউন্ট তৈরি হচ্ছে..." : "Sign Up"}
          </button>
        </form>

        {/* Google ও GitHub দিয়ে Sign Up */}
        <SocialLogin />

        <p className="mt-6 text-center text-sm text-gray-600">
          আগে থেকেই অ্যাকাউন্ট আছে?{" "}
          <Link
            href="/signin"
            className="font-semibold text-green-700 hover:underline"
          >
            Sign In
          </Link>
        </p>
      </div>
    </main>
  );
}

