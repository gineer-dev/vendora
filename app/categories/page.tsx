export const dynamic = "force-dynamic";

import Link from "next/link";
import { MarketplaceHeader } from "@/components/layout/marketplace-header";
import { Card, CardContent } from "@/components/ui/card";
import { categories } from "@/constants/sample-data";

export default function CategoriesPage() {
  return (
    <>
      <MarketplaceHeader />
      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
        <h1 className="text-3xl font-bold">Categories</h1>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Link key={category} href={`/marketplace?category=${encodeURIComponent(category)}`}>
              <Card className="transition hover:-translate-y-0.5 hover:shadow-md">
                <CardContent className="p-5">
                  <h2 className="font-semibold">{category}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">Browse listings, inspections, documents, and availability.</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
