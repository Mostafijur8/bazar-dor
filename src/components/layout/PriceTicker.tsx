
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
        {/* Ticker Label */}
        <div className="z-10 shrink-0 bg-green-600 px-1.5 py-1.5 text-[10px] font-semibold text-white sm:px-4 sm:py-3 sm:text-sm">
          <span className="mr-0.5 sm:mr-2">📈</span>
          বাজার আপডেট
        </div>

        {/* Ticker Products */}
        <div className="flex w-max animate-ticker-scroll items-center hover:[animation-play-state:paused]">
          {[...products, ...products].map((product, index) => (
            <Link
              key={`${product.id}-${index}`}
              href={`/product/${product.slug}`}
              className="flex shrink-0 items-center gap-1 px-2 py-2 text-[10px] sm:gap-2 sm:px-5 sm:py-3 sm:text-sm"
            >
              {/* Product Emoji */}
              <span className="text-xs sm:text-base">
                {product.image}
              </span>

              {/* Product Name */}
              <span className="font-medium text-gray-800">
                {product.nameBn}
              </span>

              {/* Product Price */}
              <span className="font-semibold text-gray-900">
                ৳{product.today.toLocaleString("bn-BD")}/{product.unit}
              </span>

              {/* Price Increased */}
              {product.change.dir === "up" && (
                <span className="font-semibold text-red-600">
                  ▲{" "}
                  {Math.abs(product.change.pct).toLocaleString("bn-BD")}%
                </span>
              )}

              {/* Price Decreased */}
              {product.change.dir === "down" && (
                <span className="font-semibold text-green-600">
                  ▼{" "}
                  {Math.abs(product.change.pct).toLocaleString("bn-BD")}%
                </span>
              )}

              {/* Price Unchanged */}
              {product.change.dir === "flat" && (
                <span className="font-semibold text-gray-500">
                  — ০%
                </span>
              )}

              {/* Separator */}
              <span className="text-gray-300">|</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
