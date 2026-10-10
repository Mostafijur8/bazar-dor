
import Link from "next/link";
import { getAllProducts } from "@/lib/api";
import type { Product } from "@/types/product";
import TickerItems from "./TickerItems";

export default async function PriceTicker() {
  const response = await getAllProducts();
const products = await getAllProducts();

  return (
    <div className="overflow-hidden border-b border-gray-200 bg-green-50">
      <div className="flex items-center">
        {/* Ticker Label */}
        <div className="z-10 shrink-0 bg-green-600 px-1.5 py-1.5 text-[10px] font-semibold text-white sm:px-4 sm:py-3 sm:text-sm">
          <span className="mr-0.5 sm:mr-2">📈</span>
          বাজার আপডেট
        </div>

        {/* Ticker Products */}
        <div className="min-w-0 flex-1 overflow-hidden">
          <TickerItems products={products} />
        </div>
      </div>
    </div>
  );
}

