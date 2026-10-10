
import type { Product } from "@/types/product";

export default function BazarPrices({
  product,
}: {
  product: Product;
}) {
  const markets = Array.isArray(product.markets)
    ? product.markets
    : [];

  return (
    <section className="mt-8 sm:mt-10">
      <h2 className="mb-3 text-lg font-bold text-gray-900 sm:mb-4 sm:text-xl">
        বিভিন্ন বাজারের দাম
      </h2>

      {markets.length > 0 ? (
        <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
          <table className="w-full min-w-[480px] text-left text-xs sm:min-w-0 sm:text-sm">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="px-2 py-3 font-semibold sm:px-4">
                  বাজারের নাম
                </th>
                <th className="px-2 py-3 font-semibold sm:px-4">
                  বিভাগ
                </th>
                <th className="px-2 py-3 text-right font-semibold sm:px-4">
                  সর্বনিম্ন দাম
                </th>
                <th className="px-2 py-3 text-right font-semibold sm:px-4">
                  সর্বোচ্চ দাম
                </th>
              </tr>
            </thead>

            <tbody>
              {markets.map((market, index) => (
                <tr
                  key={`${market.market}-${index}`}
                  className={`border-t border-gray-200 transition-colors hover:bg-green-100 ${
                    index % 2 === 0
                      ? "bg-green-50"
                      : "bg-white"
                  }`}
                >
                  <td className="px-2 py-3 font-medium text-gray-800 sm:px-4">
                    {market.market ?? "বাজারের নাম নেই"}
                  </td>

                  <td className="px-2 py-3 text-gray-600 sm:px-4">
                    {market.division ?? "—"}
                  </td>

                  <td className="px-2 py-3 text-right font-semibold text-green-700 sm:px-4">
                    {typeof market.min === "number"
                      ? `৳${market.min.toLocaleString("bn-BD")}`
                      : "—"}
                  </td>

                  <td className="px-2 py-3 text-right font-semibold text-red-600 sm:px-4">
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
        <p className="rounded-xl bg-gray-50 p-4 text-sm text-gray-500 sm:p-5 sm:text-base">
          বাজারভিত্তিক দাম পাওয়া যায়নি।
        </p>
      )}
    </section>
  );
}
