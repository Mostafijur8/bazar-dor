export default function Loading() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <div className="mb-8 h-36 animate-pulse rounded-2xl bg-gray-200" />

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="h-48 animate-pulse rounded-xl bg-gray-200"
          />
        ))}
      </div>
    </main>
  );
}
