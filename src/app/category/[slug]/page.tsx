
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getAllCategories,
  getProductsByCategory,
} from "@/lib/api";
import type { Product } from "@/types/product";
import CategoryProducts from "@/components/category/CategoryProducts";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function CategoryPage({
  params,
}: PageProps) {
  const { slug } = await params;

  // Fetch all categories
  let categories;

  try {
    categories = await getAllCategories();
  } catch {
    throw new Error("Categories load করা যায়নি।");
  }

  // Check whether category exists
  const categoryExists = categories.some(
    (category: { slug: string }) => category.slug === slug
  );

  if (!categoryExists) {
    notFound();
  }

  // Fetch products by category
  let products: Product[];

  try {
    products = await getProductsByCategory(slug);
  } catch {
    throw new Error("Category products load করা যায়নি।");
  }

  const category = products[0];

  const categoryInfo = categories.find(
    (item: { slug: string }) => item.slug === slug
  );

  return (
    <main className="mx-auto min-h-screen max-w-7xl px-4 py-8 sm:py-10">
      <Link
        href="/"
        className="mb-6 inline-block text-sm text-green-700 hover:underline"
      >
        ← হোম পেজ
      </Link>

      <div className="mb-8 rounded-2xl bg-green-50 p-5 sm:p-8">
        <p className="text-3xl sm:text-4xl">
          {category?.categoryIcon ?? "🛒"}
        </p>

        <h1 className="mt-3 text-2xl font-bold text-gray-900 sm:text-3xl">
          {category?.categoryNameBn ??
            categoryInfo?.nameBn ??
            categoryInfo?.title ??
            "পণ্যের ক্যাটাগরি"}
        </h1>

        <p className="mt-2 text-sm text-gray-600 sm:text-base">
          এই ক্যাটাগরির পণ্যের আজকের বাজারদর দেখুন।
        </p>
      </div>

      <CategoryProducts products={products} />
    </main>
  );
}

