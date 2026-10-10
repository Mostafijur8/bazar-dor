"use client";

import { useState } from "react";
import Link from "next/link";
import type { Product } from "@/types/product";

export default function TickerItems({ products }: { products: Product[] }) {
  const [paused, setPaused] = useState(false);

  return (
    <div
      className={`flex w-max items-center animate-ticker-scroll ${
        paused ? "[animation-play-state:paused]" : ""
      }`}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {[...products, ...products].map((product, index) => (
        <Link
          key={`${product.id}-${index}`}
          href={`/product/${product.slug}`}
          className="flex shrink-0 items-center gap-1 px-2 py-2 text-[10px] sm:gap-2 sm:px-5 sm:py-3 sm:text-sm"
        >
          <span className="text-xs sm:text-base">{product.image}</span>

          <span className="font-medium text-gray-800">{product.nameBn}</span>

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
  );
}
