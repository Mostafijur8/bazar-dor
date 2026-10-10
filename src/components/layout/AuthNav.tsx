
"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession, signOut } from "@/lib/auth-client";
import toast from "react-hot-toast";

export default function AuthNav() {
  const router = useRouter();
  const { data: session, isPending } = useSession();

  async function handleSignOut() {
    try {
      const result = await signOut();

      if (result.error) {
        toast.error("Sign Out করা যায়নি।");
        return;
      }

      toast.success("সফলভাবে Sign Out হয়েছে!");
      router.push("/");
      router.refresh();
    } catch {
      toast.error("সমস্যা হয়েছে। আবার চেষ্টা করো।");
    }
  }

  if (isPending) {
    return (
      <div className="h-8 w-24 animate-pulse rounded-lg bg-gray-100 sm:h-10 sm:w-32" />
    );
  }

  if (session?.user) {
    return (
      <div className="flex min-w-0 items-center justify-end gap-2 sm:gap-4">
        {/* Profile */}
        <Link
          href="/profile"
          className="flex min-w-0 items-center gap-1.5 rounded-lg p-1 transition hover:bg-gray-50 sm:gap-2 sm:p-2"
        >
          {/* Profile Image */}
          {session.user.image ? (
            <Image
              src={session.user.image}
              alt={session.user.name || "Profile"}
              width={36}
              height={36}
              className="h-7 w-7 shrink-0 rounded-full object-cover sm:h-9 sm:w-9"
            />
          ) : (
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-100 text-xs font-bold text-green-700 sm:h-9 sm:w-9 sm:text-sm">
              {session.user.name?.charAt(0).toUpperCase() || "U"}
            </div>
          )}

          {/* Name and Email: Desktop + Mobile */}
          <div className="min-w-0">
            <p className="max-w-24 truncate text-xs font-semibold text-gray-700 sm:max-w-36 sm:text-sm">
              {session.user.name || "User"}
            </p>

            <p className="max-w-24 truncate text-[10px] text-gray-500 sm:max-w-40 sm:text-xs">
              {session.user.email}
            </p>
          </div>
        </Link>

        {/* Sign Out */}
        <button
          type="button"
          onClick={handleSignOut}
          className="shrink-0 rounded-lg border border-red-200 px-2 py-1.5 text-[10px] font-medium text-red-600 transition hover:bg-red-50 sm:px-3 sm:py-2 sm:text-sm"
        >
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-1.5 sm:gap-2">
      <Link
        href="/signin"
        className="shrink-0 rounded-lg border border-green-600 px-2 py-1.5 text-xs font-medium text-green-700 transition hover:bg-green-50 sm:px-3 sm:py-2 sm:text-sm"
      >
        Sign In
      </Link>

      <Link
        href="/signup"
        className="shrink-0 rounded-lg bg-green-600 px-2 py-1.5 text-xs font-medium text-white transition hover:bg-green-700 sm:px-3 sm:py-2 sm:text-sm"
      >
        Sign Up
      </Link>
    </div>
  );
}
