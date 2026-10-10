import Link from "next/link";
import type { Product } from "@/types/product";

export default function ProductCard({ product }: { product: Product }) {
  const isUp = product.change.dir === "up";
  const isDown = product.change.dir === "down";

  return (
    <Link
      href={`/product/${product.slug}`}
      className="rounded-xl border border-gray-200 bg-white p-4 transition hover:-translate-y-1 hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-3">
        <span className="text-3xl">{product.image}</span>

        <span
          className={`rounded-full px-2 py-1 text-xs font-semibold ${
            isUp
              ? "bg-red-50 text-red-600"
              : isDown
                ? "bg-green-50 text-green-600"
                : "bg-gray-100 text-gray-500"
          }`}
        >
          {isUp ? "▲" : isDown ? "▼" : "—"}{" "}
          {Math.abs(product.change.pct).toLocaleString("bn-BD")}%
        </span>
      </div>

      <h3 className="mt-4 font-semibold text-gray-900">{product.nameBn}</h3>

      <p className="mt-1 text-sm text-gray-500">
        {product.categoryNameBn} · প্রতি {product.unit}
      </p>

      <div className="mt-4 border-t border-gray-100 pt-3">
        <p className="text-xs text-gray-500">আজকের দাম</p>
        <p className="mt-1 text-xl font-bold text-gray-900">
          ৳{product.today.toLocaleString("bn-BD")}
        </p>
      </div>
    </Link>
  );
}
