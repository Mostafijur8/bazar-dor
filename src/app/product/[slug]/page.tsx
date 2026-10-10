import { notFound } from "next/navigation";
import { getAllProducts } from "@/lib/api";
import type { Product } from "@/types/product";
import ProductDetails from "@/components/product/ProductDetails";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;

  const response = await getAllProducts();

  const products: Product[] = Array.isArray(response)
    ? response
    : (response.data ?? []);

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return <ProductDetails product={product} />;
}
