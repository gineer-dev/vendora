export const dynamic = "force-dynamic";

import { MarketplaceHeader } from "@/components/layout/marketplace-header";
import { FilterBar } from "@/components/marketplace/filter-bar";
import { ProductCard } from "@/components/marketplace/product-card";
import { getMarketplaceProducts } from "@/services/catalog";

export default async function MarketplacePage({ searchParams }: { searchParams: Promise<{ category?: string; q?: string }> }) {
  const filters = await searchParams;
  const products = await getMarketplaceProducts(filters);

  return (
    <>
      <MarketplaceHeader />
      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold sm:text-3xl">Marketplace</h1>
          <p className="mt-2 text-muted-foreground">Browse verified listings across vehicles, property, electronics, equipment, and more.</p>
        </div>
        <FilterBar />
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </main>
    </>
  );
}
