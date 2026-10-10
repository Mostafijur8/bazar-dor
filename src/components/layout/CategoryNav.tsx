"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Category = {
  slug: string;
  nameBn: string;
  icon?: string;
};

export default function CategoryNav({
  categories,
}: {
  categories: Category[];
}) {
  const pathname = usePathname();

  return (
    <nav className="overflow-x-auto border-t border-gray-100">
      <div className="flex min-w-max gap-2 py-3">
        <Link
          href="/"
          className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
            pathname === "/"
              ? "bg-green-600 text-white"
              : "text-gray-600 hover:bg-green-50 hover:text-green-700"
          }`}
        >
          সব পণ্য
        </Link>

        {categories.map((category) => {
          const href = `/category/${category.slug}`;
          const isActive = pathname === href;

          return (
            <Link
              key={category.slug}
              href={href}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                isActive
                  ? "bg-green-600 text-white"
                  : "text-gray-600 hover:bg-green-50 hover:text-green-700"
              }`}
            >
              {category.icon ?? "🛒"} {category.nameBn}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
