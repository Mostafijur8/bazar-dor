
import Link from "next/link";
import { getAllCategories } from "@/lib/api";
import CategoryNav from "./CategoryNav";
import AuthNav from "./AuthNav";

export default async function Navbar() {
  const response = await getAllCategories();

  const categories = Array.isArray(response)
    ? response
    : response.data ?? [];

  const today = new Intl.DateTimeFormat("bn-BD", {
    dateStyle: "full",
  }).format(new Date());

  return (
    <header className="sticky top-0 z-50 border-b bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between gap-4 py-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-3xl">🛒</span>

            <div>
              <h1 className="text-xl font-bold text-green-700">
                বাজার দর
              </h1>

              <p className=" text-[10px] lg:text-xs text-gray-500">
                {today}
              </p>
            </div>
          </Link>

          <AuthNav />
        </div>

        <CategoryNav categories={categories} />
      </div>
    </header>
  );
}
