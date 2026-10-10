import { notFound, redirect } from "next/navigation";
import { headers } from "next/headers";

import { auth } from "@/lib/auth";
import { getAllProducts } from "@/lib/api";

import type { Product } from "@/types/product";
import ProductDetails from "@/components/product/ProductDetails";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProductPage({ params }: PageProps) {
  // User Sign In করেছে কি না যাচাই
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/signin");
  }

  // URL থেকে product slug নেওয়া
  const { slug } = await params;

  // সব product fetch করা
  const response = await getAllProducts();

  const products: Product[] = await getAllProducts();

  // Slug অনুযায়ী product খোঁজা
  const product = products.find((item) => item.slug === slug);

  // Product না পাওয়া গেলে 404
  if (!product) {
    notFound();
  }

  return <ProductDetails product={product} />;
}
