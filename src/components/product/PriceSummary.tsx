
import type { Product } from "@/types/product";

export default function PriceSummary({
  product,
}: {
  product: Product;
}) {
  const prices = product.markets.flatMap((market) => [
    market.min,
    market.max,
  ]);

  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

  const avgPrice =
    prices.reduce((total, price) => total + price, 0) /
    prices.length;

  const priceItems = [
    {
      title: "সর্বনিম্ন দাম",
      price: minPrice,
      color: "text-green-700",
      bg: "bg-green-50",
    },
    {
      title: "সর্বোচ্চ দাম",
      price: maxPrice,
      color: "text-red-600",
      bg: "bg-red-50",
    },
    {
      title: "গড় দাম",
      price: avgPrice,
      color: "text-blue-700",
      bg: "bg-blue-50",
    },
  ];

  return (
    <section className="mt-6">
      <h2 className="mb-4 text-xl font-bold text-gray-900">
        বাজারদরের সারাংশ
      </h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {priceItems.map((item) => (
          <div
            key={item.title}
            className={`rounded-xl border border-gray-100 p-5 ${item.bg}`}
          >
            <p className="text-sm text-gray-600">
              {item.title}
            </p>

            <p
              className={`mt-2 text-2xl font-bold ${item.color}`}
            >
              ৳{item.price.toFixed(2)}
            </p>

            <p className="mt-1 text-xs text-gray-500">
              প্রতি {product.unit}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
