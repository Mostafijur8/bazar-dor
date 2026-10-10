import Link from "next/link";

export default function Hero() {
  return (
    <section className="overflow-hidden bg-green-50">
      <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-14 md:grid-cols-2 md:py-20">
        <div>
          <p className="mb-4 inline-flex rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
            🥬 বাংলাদেশের নিত্যপণ্যের বাজারদর
          </p>

          <h1 className="max-w-xl text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl">
            প্রতিদিনের বাজারদর,
            <span className="text-green-600"> এখন আপনার হাতেই</span>
          </h1>

          <p className="mt-5 max-w-lg text-base leading-7 text-gray-600">
            চাল, ডাল, মাছ, মাংস ও নিত্যপ্রয়োজনীয় পণ্যের আজকের দাম জানুন। বাজারে
            যাওয়ার আগেই দাম যাচাই করুন সহজে।
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="#সব-পণ্য"
              className="rounded-lg bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
            >
              সব পণ্য দেখুন →
            </Link>

            <Link
              href="#দাম-কমেছে"
              className="rounded-lg border border-green-600 px-6 py-3 font-semibold text-green-700 transition hover:bg-green-100"
            >
              দাম কমেছে দেখুন
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-600">
            <p>✓ সহজে দাম যাচাই</p>
            <p>✓ বিভিন্ন পণ্যের তথ্য</p>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="flex aspect-square w-full max-w-md items-center justify-center rounded-full bg-green-100">
            <div className="text-center">
              <div className="text-8xl sm:text-9xl">🛒</div>

              <div className="mt-5 rounded-2xl bg-white px-6 py-4 shadow-md">
                <p className="text-sm text-gray-500">প্রতিদিনের বাজার</p>
                <p className="mt-1 text-xl font-bold text-green-700">
                  সঠিক দামে, সচেতন কেনাকাটা
                </p>
              </div>

              <div className="mt-5 flex justify-center gap-4 text-4xl">
                <span>🍚</span>
                <span>🥬</span>
                <span>🐟</span>
                <span>🥚</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
