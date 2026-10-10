
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[80vh] items-center justify-center bg-gray-50 px-4 py-12">
      <div className="w-full max-w-lg text-center">
        {/* Illustration */}
        <div className="relative mx-auto mb-6 flex h-48 w-48 items-center justify-center rounded-full bg-green-50 sm:h-56 sm:w-56">
          <div className="absolute inset-3 rounded-full border-2 border-dashed border-green-200" />

          <span className="text-8xl">🛒</span>

          <span className="absolute right-5 top-5 text-3xl">
            ❓
          </span>

          <span className="absolute bottom-5 left-5 text-2xl">
            🥦
          </span>
        </div>

        {/* Error Code */}
        <p className="text-7xl font-black tracking-tight text-green-600 sm:text-8xl">
          404
        </p>

        <h1 className="mt-4 text-2xl font-bold text-gray-900 sm:text-3xl">
          পৃষ্ঠা খুঁজে পাওয়া যায়নি!
        </h1>

        <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-gray-500 sm:text-base">
          দুঃখিত! তুমি যে পৃষ্ঠাটি খুঁজছ, সেটি পাওয়া যায়নি।
          হয়তো লিংকটি ভুল অথবা পৃষ্ঠাটি সরিয়ে ফেলা হয়েছে।
        </p>

        {/* Home Button */}
        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-green-600 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-green-700 hover:shadow-md"
        >
          <span>←</span>
          হোম পেজে ফিরে যাও
        </Link>

        <p className="mt-6 text-sm text-gray-400">
          🛒 বাজার দর — প্রতিদিনের বাজারদর জানুন
        </p>
      </div>
    </main>
  );
}

