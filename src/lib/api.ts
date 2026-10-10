import type { Product } from "@/types/product";

const BASE_URL = "https://api.abcz.workers.dev/api/bazardor";

// Get all products
export async function getAllProducts(): Promise<Product[]> {
  const response = await fetch(`${BASE_URL}/products`);

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return response.json();
}

// Get single product
export async function getSingleProduct(id: string | number): Promise<Product> {
  const response = await fetch(`${BASE_URL}/products/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }

  return response.json();
}

// Get products by category
export async function getProductsByCategory(
  category: string,
): Promise<Product[]> {
  const response = await fetch(`${BASE_URL}/products?category=${category}`);

  if (!response.ok) {
    throw new Error("Failed to fetch category products");
  }

  return response.json();
}

// Get all categories
export async function getAllCategories() {
  const response = await fetch(`${BASE_URL}/categories`);

  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }

  return response.json();
}

// Get single category
export async function getSingleCategory(slug: string) {
  const response = await fetch(`${BASE_URL}/categories/${slug}`);

  if (!response.ok) {
    throw new Error("Failed to fetch category");
  }

  return response.json();
}
