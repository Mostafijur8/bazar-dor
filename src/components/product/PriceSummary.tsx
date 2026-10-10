import type { Product } from "@/types/product";

export default function PriceSummary({ product }: { product: Product }) {
  const prices = [
    { label: "আজকের দাম", price: product.today },
    { label: "গতকালের দাম", price: product.yesterday },
    { label: "গত সপ্তাহের দাম", price: product.lastWeek },
    { label: "গত মাসের দাম", price: product.lastMonth },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {prices.map((item) => (
        <div key={item.label} className="rounded-xl border bg-white p-4">
          <p className="text-sm text-gray-500">{item.label}</p>
          <p className="mt-2 text-xl font-bold text-gray-900">
            ৳{item.price.toLocaleString("bn-BD")}
          </p>
          <p className="mt-1 text-xs text-gray-500">প্রতি {product.unit}</p>
        </div>
      ))}
    </div>
  );
}
