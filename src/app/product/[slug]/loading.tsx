
export default function Loading() {
  return (
    <main className="mx-auto min-h-screen max-w-7xl animate-pulse px-4 py-10">
      {/* Back button skeleton */}
      <div className="mb-6 h-5 w-32 rounded bg-gray-200" />

      {/* Product details */}
      <div className="grid gap-8 md:grid-cols-2">
        {/* Image */}
        <div className="flex min-h-72 items-center justify-center rounded-2xl bg-gray-100 sm:min-h-96">
          <div className="h-32 w-32 rounded-full bg-gray-200" />
        </div>

        {/* Product information */}
        <div className="space-y-5 py-4">
          <div className="h-5 w-28 rounded bg-gray-200" />
          <div className="h-9 w-3/4 rounded bg-gray-200" />
          <div className="h-5 w-1/2 rounded bg-gray-200" />

          {/* Price */}
          <div className="rounded-xl border border-gray-100 p-5">
            <div className="h-4 w-24 rounded bg-gray-200" />
            <div className="mt-4 h-10 w-40 rounded bg-gray-200" />
            <div className="mt-3 h-4 w-32 rounded bg-gray-200" />
          </div>
        </div>
      </div>

      {/* Price summary skeleton */}
      <section className="mt-10">
        <div className="mb-4 h-7 w-52 rounded bg-gray-200" />

        <div className="grid gap-4 sm:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="rounded-xl border border-gray-100 p-5"
            >
              <div className="h-4 w-24 rounded bg-gray-200" />
              <div className="mt-4 h-8 w-32 rounded bg-gray-200" />
            </div>
          ))}
        </div>
      </section>

      {/* Market prices skeleton */}
      <section className="mt-10">
        <div className="mb-4 h-7 w-48 rounded bg-gray-200" />

        <div className="space-y-3">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="flex items-center justify-between gap-4 rounded-lg border border-gray-100 p-4"
            >
              <div className="h-5 w-1/3 rounded bg-gray-200" />
              <div className="h-5 w-20 rounded bg-gray-200" />
              <div className="h-5 w-20 rounded bg-gray-200" />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

