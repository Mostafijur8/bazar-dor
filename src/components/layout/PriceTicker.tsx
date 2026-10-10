import Link from "next/link";
import { getAllProducts } from "@/lib/api";
import type { Product } from "@/types/product";

export default async function PriceTicker() {
  const response = await getAllProducts();
  const products: Product[] = Array.isArray(response)
    ? response
    : (response.data ?? []);

  return (
    <div className="overflow-hidden border-b border-gray-200 bg-green-50">
      <div className="flex items-center">
        <div className="z-10 shrink-0 bg-green-600 px-4 py-3 text-sm font-semibold text-white">
          <span className="mr-2">📈</span>
          বাজার আপডেট
        </div>

        <div className="flex w-max animate-ticker-scroll items-center hover:[animation-play-state:paused]">
     
          {[...products, ...products].map((product, index) => (
            <Link
              key={`${product.id}-${index}`}
              href={`/product/${product.slug}`}
              className="flex shrink-0 items-center gap-2 px-5 py-3 text-sm"
            >
              <span>{product.image}</span>

              <span className="font-medium text-gray-800">
                {product.nameBn}
              </span>

              <span className="font-semibold text-gray-900">
                ৳{product.today.toLocaleString("bn-BD")}/{product.unit}
              </span>

              {product.change.dir === "up" && (
                <span className="font-semibold text-red-600">
                  ▲ {Math.abs(product.change.pct).toLocaleString("bn-BD")}%
                </span>
              )}

              {product.change.dir === "down" && (
                <span className="font-semibold text-green-600">
                  ▼ {Math.abs(product.change.pct).toLocaleString("bn-BD")}%
                </span>
              )}

              {product.change.dir === "flat" && (
                <span className="font-semibold text-gray-500">— ০%</span>
              )}

              <span className="text-gray-300">|</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
