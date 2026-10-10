import Link from "next/link";
import type { Product } from "@/types/product";
import PriceSummary from "./PriceSummary";
import BazarPrices from "./BazarPrices";

export default function ProductDetails({ product }: { product: Product }) {
  const isUp = product.change.dir === "up";
  const isDown = product.change.dir === "down";

  return (
    <main className="mx-auto max-w-7xl px-4 py-10">
      <Link
        href="/"
        className="mb-6 inline-block text-sm text-green-700 hover:underline"
      >
        ← হোম পেজে ফিরে যান
      </Link>

      <section className="mb-8 rounded-2xl bg-green-50 p-6 sm:p-10">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
          <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-2xl bg-white text-6xl shadow-sm">
            {product.image}
          </div>

          <div>
            <p className="text-sm text-green-700">
              {product.categoryIcon} {product.categoryNameBn}
            </p>

            <h1 className="mt-2 text-3xl font-bold text-gray-900">
              {product.nameBn}
            </h1>

            <p className="mt-2 text-gray-600">একক: {product.unit}</p>

            <p className="mt-3 text-sm">
              <span
                className={
                  isUp
                    ? "font-semibold text-red-600"
                    : isDown
                      ? "font-semibold text-green-600"
                      : "font-semibold text-gray-500"
                }
              >
                {isUp
                  ? "▲ দাম বেড়েছে"
                  : isDown
                    ? "▼ দাম কমেছে"
                    : "— দাম অপরিবর্তিত"}{" "}
                {Math.abs(product.change.pct).toLocaleString("bn-BD")}%
              </span>
            </p>
          </div>
        </div>
      </section>

      <PriceSummary product={product} />

      <BazarPrices product={product} />
    </main>
  );
}
