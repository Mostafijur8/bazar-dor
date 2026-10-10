
"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "@/lib/auth-client";
import toast from "react-hot-toast";
import SocialLogin from "@/components/auth/SocialLogin";

export default function SignInPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const result = await signIn.email({
        email,
        password,
      });

      if (result.error) {
        const message =
          result.error.message ?? "Sign In করা যায়নি।";

        setError(message);
        toast.error(message);
        return;
      }

      toast.success("সফলভাবে Sign In হয়েছে!");

      router.push("/");
      router.refresh();
    } catch {
      const message =
        "সমস্যা হয়েছে। Email ও password পরীক্ষা করে আবার চেষ্টা করো।";

      setError(message);
      toast.error(message);
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
            আবার ফিরে এসেছ!
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            তোমার অ্যাকাউন্টে Sign In করো
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-1 block text-sm font-medium text-gray-700"
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

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Password
            </label>

            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="তোমার password"
              autoComplete="current-password"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-green-600"
            />
          </div>

          {/* Error Message */}
          {error && (
            <p
              role="alert"
              className="rounded-lg bg-red-50 p-3 text-sm text-red-600"
            >
              {error}
            </p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-green-600 px-4 py-3 font-semibold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Sign In হচ্ছে..." : "Sign In"}
          </button>
        </form>

        {/* Google এবং GitHub Login */}
        <SocialLogin />

        <p className="mt-6 text-center text-sm text-gray-600">
          নতুন ব্যবহারকারী?{" "}
          <Link
            href="/signup"
            className="font-semibold text-green-700 hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </main>
  );
}

