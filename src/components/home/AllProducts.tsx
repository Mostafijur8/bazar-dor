import { getAllProducts } from "@/lib/api";
import type { Product } from "@/types/product";
import ProductCard from "@/components/product/ProductCard";

export default async function AllProducts() {
  const response = await getAllProducts();
  

const products = await getAllProducts();

  return (
    <section id="সব-পণ্য" className="mx-auto max-w-7xl px-4 py-12">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">সব পণ্য</h2>

        <p className="mt-2 text-sm text-gray-500">
          বাজারের সব নিত্যপ্রয়োজনীয় পণ্যের আজকের দাম
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
