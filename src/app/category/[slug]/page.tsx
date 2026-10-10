
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

  // Valid categories fetch করা
  let categories;

  try {
    const response = await getAllCategories();

    categories = Array.isArray(response)
      ? response
      : response.data ?? [];
  } catch {
    throw new Error("Categories load করা যায়নি।");
  }

  // Slug valid কি না যাচাই করা
  const categoryExists = categories.some(
    (category: { slug: string }) => category.slug === slug
  );

  if (!categoryExists) {
    notFound();
  }

  // Category অনুযায়ী products fetch করা
  let products: Product[];

  try {
    const response = await getProductsByCategory(slug);

    products = Array.isArray(response)
      ? response
      : response.data ?? [];
  } catch {
    throw new Error("Category products load করা যায়নি।");
  }

  const category = products[0];

  return (
    <main className="mx-auto min-h-screen max-w-7xl px-4 py-10">
      <Link
        href="/"
        className="mb-6 inline-block text-sm text-green-700 hover:underline"
      >
        ← হোম পেজ
      </Link>

      <div className="mb-8 rounded-2xl bg-green-50 p-6 sm:p-8">
        <p className="text-4xl">
          {category?.categoryIcon ?? "🛒"}
        </p>

        <h1 className="mt-3 text-2xl font-bold text-gray-900 sm:text-3xl">
          {category?.categoryNameBn ??
            categories.find(
              (item: { slug: string }) => item.slug === slug
            )?.nameBn ??
            "পণ্যের ক্যাটাগরি"}
        </h1>

        <p className="mt-2 text-gray-600">
          এই ক্যাটাগরির পণ্যের আজকের বাজারদর দেখুন।
        </p>
      </div>

      <CategoryProducts products={products} />
    </main>
  );
}

