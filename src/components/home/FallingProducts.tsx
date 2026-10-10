import { getAllProducts } from "@/lib/api";
import type { Product } from "@/types/product";
import ProductCard from "@/components/product/ProductCard";

export default async function FallingProducts() {
  const response = await getAllProducts();
const products = await getAllProducts();

  const fallingProducts = products
    .filter((product) => product.change.dir === "down")
    .sort((a, b) => a.change.pct - b.change.pct)
    .slice(0, 6);

  return (
    <section id="দাম-কমেছে" className="mx-auto max-w-7xl px-4 py-12">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">
          আজ দাম কমেছে <span className="text-green-600">▼</span>
        </h2>
        <p className="mt-2 text-sm text-gray-500">
          যেসব পণ্যের দাম সবচেয়ে বেশি কমেছে
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        {fallingProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
