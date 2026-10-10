"use client";

import { useState } from "react";
import Link from "next/link";
import type { Product } from "@/types/product";
import ProductCard from "@/components/product/ProductCard";
import SortDropdown from "./SortDropdown";

export default function CategoryProducts({
  products,
}: {
  products: Product[];
}) {
  const [sort, setSort] = useState("default");

  const sortedProducts = [...products].sort((a, b) => {
    if (sort === "low-to-high") {
      return a.today - b.today;
    }

    if (sort === "high-to-low") {
      return b.today - a.today;
    }

    return 0;
  });

  if (products.length === 0) {
    return (
      <div className="py-16 text-center">
        <p className="text-5xl">🛒</p>
        <h2 className="mt-4 text-xl font-bold text-gray-800">
          কোনো পণ্য পাওয়া যায়নি
        </h2>
        <p className="mt-2 text-gray-500">
          এই ক্যাটাগরিতে এখন কোনো পণ্যের তথ্য নেই।
        </p>
        <Link
          href="/"
          className="mt-5 inline-block rounded-lg bg-green-600 px-5 py-3 text-white hover:bg-green-700"
        >
          হোম পেজে ফিরে যান
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-gray-500">
          মোট {products.length.toLocaleString("bn-BD")}টি পণ্য
        </p>

        <SortDropdown value={sort} onChange={setSort} />
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
