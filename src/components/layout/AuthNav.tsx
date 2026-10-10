
"use client";

import Image from "next/image";
import Link from "next/link";
import { useSession, signOut } from "@/lib/auth-client";
import toast from "react-hot-toast";

export default function AuthNav() {
  const { data: session, isPending } = useSession();

  async function handleSignOut() {
    try {
      const result = await signOut();

      if (result.error) {
        toast.error("Sign Out করা যায়নি।");
        return;
      }

      toast.success("সফলভাবে Sign Out হয়েছে!");
      window.location.href = "/";
    } catch {
      toast.error("সমস্যা হয়েছে। আবার চেষ্টা করো।");
    }
  }

  if (isPending) {
    return (
      <div className="h-10 w-32 animate-pulse rounded-lg bg-gray-100" />
    );
  }

  if (session?.user) {
    return (
      <div className="flex items-center gap-3">
        <Link
          href="/profile"
          className="flex items-center gap-2 rounded-lg px-2 py-1.5 transition hover:bg-gray-50"
        >
          {session.user.image ? (
            <Image
              src={session.user.image}
              alt={session.user.name || "Profile"}
              width={36}
              height={36}
              className="h-9 w-9 rounded-full object-cover"
            />
          ) : (
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100 text-sm font-bold text-green-700">
              {session.user.name?.charAt(0).toUpperCase() || "U"}
            </div>
          )}

          <span className="max-w-36 truncate text-sm font-medium text-gray-700 hover:text-green-700">
            {session.user.name || session.user.email}
          </span>
        </Link>

        <button
          onClick={handleSignOut}
          className="rounded-lg border border-red-200 px-3 py-2 text-sm font-medium text-red-600 transition hover:bg-red-50"
        >
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <Link
        href="/signin"
        className="rounded-lg border border-green-600 px-3 py-2 text-sm font-medium text-green-700 hover:bg-green-50"
      >
        Sign In
      </Link>

      <Link
        href="/signup"
        className="rounded-lg bg-green-600 px-3 py-2 text-sm font-medium text-white hover:bg-green-700"
      >
        Sign Up
      </Link>
    </div>
  );
}

