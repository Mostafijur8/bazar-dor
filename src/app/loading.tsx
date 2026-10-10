
export default function Loading() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Skeleton */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:py-16">
        <div className="grid items-center gap-8 rounded-3xl bg-green-50 p-6 sm:p-10 md:grid-cols-2">
          <div className="space-y-5">
            <div className="h-5 w-32 animate-pulse rounded-full bg-green-200" />

            <div className="space-y-3">
              <div className="h-9 w-full max-w-md animate-pulse rounded-lg bg-gray-200" />
              <div className="h-9 w-3/4 animate-pulse rounded-lg bg-gray-200" />
            </div>

            <div className="h-4 w-full max-w-sm animate-pulse rounded bg-gray-200" />

            <div className="h-11 w-36 animate-pulse rounded-xl bg-green-200" />
          </div>

          <div className="flex justify-center">
            <div className="flex h-48 w-48 animate-pulse items-center justify-center rounded-full bg-green-100 text-6xl sm:h-60 sm:w-60">
              🛒
            </div>
          </div>
        </div>
      </section>

      {/* Product Sections Skeleton */}
      {[1, 2, 3].map((section) => (
        <section
          key={section}
          className="mx-auto max-w-7xl px-4 py-8"
        >
          <div className="mb-6 space-y-2">
            <div className="h-7 w-48 animate-pulse rounded bg-gray-200" />
            <div className="h-4 w-64 max-w-full animate-pulse rounded bg-gray-100" />
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="overflow-hidden rounded-2xl border border-gray-200 bg-white p-3 sm:p-4"
              >
                <div className="flex h-28 animate-pulse items-center justify-center rounded-xl bg-gray-100 sm:h-40">
                  <div className="h-16 w-16 rounded-full bg-gray-200" />
                </div>

                <div className="mt-4 h-4 w-3/4 animate-pulse rounded bg-gray-200" />
                <div className="mt-3 h-3 w-1/2 animate-pulse rounded bg-gray-100" />

                <div className="mt-4 flex items-center justify-between gap-2">
                  <div className="h-6 w-20 animate-pulse rounded bg-gray-200" />
                  <div className="h-5 w-14 animate-pulse rounded-full bg-green-100" />
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}

