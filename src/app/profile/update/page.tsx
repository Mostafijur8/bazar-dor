
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession } from "@/lib/auth-client";
import toast from "react-hot-toast";

export default function UpdateProfilePage() {
  const router = useRouter();

  const {
    data: session,
    isPending,
    refetch,
  } = useSession();

  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (session?.user) {
      setName(session.user.name || "");
    }
  }, [session]);

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    const trimmedName = name.trim();

    if (!trimmedName) {
      toast.error("নাম লিখো।");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "/api/auth/update-profile",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({
            name: trimmedName,
          }),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        toast.error(
          result.message ||
            "Profile update করা যায়নি।"
        );
        return;
      }

      // Updated session information fetch করা
      await refetch();

      toast.success(
        "Profile সফলভাবে update হয়েছে!"
      );

      // Full page reload ছাড়াই Profile page-এ যাওয়া
      router.replace("/profile");
    } catch (error) {
      console.error("Profile update error:", error);

      toast.error(
        "সমস্যা হয়েছে। আবার চেষ্টা করো।"
      );
    } finally {
      setLoading(false);
    }
  }

  if (isPending) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center">
        <p className="text-gray-500">
          Profile loading হচ্ছে...
        </p>
      </main>
    );
  }

  if (!session?.user) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center px-4">
        <div className="text-center">
          <p className="text-gray-600">
            Profile update করতে আগে Sign In করো।
          </p>

          <Link
            href="/signin"
            className="mt-4 inline-block rounded-lg bg-green-600 px-5 py-3 font-medium text-white transition hover:bg-green-700"
          >
            Sign In
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-[70vh] bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-lg">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="mb-6">
            <Link
              href="/profile"
              className="text-sm font-medium text-green-700 hover:underline"
            >
              ← Profile এ ফিরে যাও
            </Link>

            <h1 className="mt-4 text-2xl font-bold text-gray-900">
              Update Profile
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              তোমার profile information পরিবর্তন করো।
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                তোমার নাম
              </label>

              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
                placeholder="তোমার নাম"
                autoComplete="name"
                minLength={1}
                maxLength={100}
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Email
              </label>

              <input
                id="email"
                type="email"
                value={session.user.email}
                disabled
                className="w-full cursor-not-allowed rounded-lg border border-gray-200 bg-gray-100 px-4 py-3 text-gray-500"
              />

              <p className="mt-1 text-xs text-gray-500">
                Email পরিবর্তন করা যাবে না।
              </p>
            </div>

            <button
              type="submit"
              disabled={loading || !name.trim()}
              className="w-full rounded-lg bg-green-600 px-4 py-3 font-semibold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading
                ? "Update হচ্ছে..."
                : "Update Profile"}
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

