import type { Product } from "@/types/product";

export default function BazarPrices({ product }: { product: Product }) {
  const markets = Array.isArray(product.markets) ? product.markets : [];

  return (
    <section className="mt-10">
      <h2 className="mb-4 text-xl font-bold text-gray-900">
        বিভিন্ন বাজারের দাম
      </h2>

      {markets.length > 0 ? (
        <div className="overflow-x-auto rounded-xl border">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3">বাজারের নাম</th>
                <th className="px-4 py-3">বিভাগ</th>
                <th className="px-4 py-3 text-right">সর্বনিম্ন দাম</th>
                <th className="px-4 py-3 text-right">সর্বোচ্চ দাম</th>
              </tr>
            </thead>

            <tbody>
              {markets.map((market, index) => (
                <tr
                  key={`${market.market}-${index}`}
                  className="border-t hover:bg-gray-50"
                >
                  <td className="px-4 py-3">
                    {market.market ?? "বাজারের নাম নেই"}
                  </td>

                  <td className="px-4 py-3 text-gray-600">
                    {market.division ?? "—"}
                  </td>

                  <td className="px-4 py-3 text-right font-semibold text-green-700">
                    {typeof market.min === "number"
                      ? `৳${market.min.toLocaleString("bn-BD")}`
                      : "—"}
                  </td>

                  <td className="px-4 py-3 text-right font-semibold text-red-600">
                    {typeof market.max === "number"
                      ? `৳${market.max.toLocaleString("bn-BD")}`
                      : "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="rounded-xl bg-gray-50 p-5 text-gray-500">
          বাজারভিত্তিক দাম পাওয়া যায়নি।
        </p>
      )}
    </section>
  );
}
