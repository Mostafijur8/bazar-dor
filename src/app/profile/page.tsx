"use client";

import Image from "next/image";
import Link from "next/link";
import { useSession } from "@/lib/auth-client";

export default function ProfilePage() {
  const { data: session, isPending } = useSession();

  if (isPending) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center">
        <p className="text-gray-500">Profile loading হচ্ছে...</p>
      </main>
    );
  }

  if (!session?.user) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center px-4">
        <div className="text-center">
          <p className="text-gray-600">Profile দেখতে আগে Sign In করো।</p>

          <Link
            href="/signin"
            className="mt-4 inline-block rounded-lg bg-green-600 px-5 py-3 font-medium text-white hover:bg-green-700"
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
          <div className="text-center">
            {session.user.image ? (
              <Image
                src={session.user.image}
                alt={session.user.name || "Profile"}
                width={100}
                height={100}
                className="mx-auto h-24 w-24 rounded-full object-cover"
              />
            ) : (
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-green-100 text-3xl font-bold text-green-700">
                {session.user.name?.charAt(0).toUpperCase() || "U"}
              </div>
            )}

            <h1 className="mt-4 text-2xl font-bold text-gray-900">
              {session.user.name || "User"}
            </h1>

            <p className="mt-1 text-sm text-gray-500">{session.user.email}</p>
          </div>

          <div className="mt-8 border-t pt-6">
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">নাম</p>
                <p className="font-medium text-gray-900">
                  {session.user.name || "নাম দেওয়া হয়নি"}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium text-gray-900">
                  {session.user.email}
                </p>
              </div>
            </div>

            <Link
              href="/profile/update"
              className="mt-6 block w-full rounded-lg bg-green-600 px-4 py-3 text-center font-semibold text-white transition hover:bg-green-700"
            >
              Update Profile
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
