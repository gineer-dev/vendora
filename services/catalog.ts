import { categories, products } from "@/constants/sample-data";
import { createClient } from "@/lib/supabase/server";

export async function getMarketplaceProducts(filters?: { category?: string; q?: string }) {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
    return products.filter((product) => {
      const matchesCategory = !filters?.category || product.category === filters.category;
      const q = filters?.q?.toLowerCase();
      const matchesQuery = !q || [product.name, product.brand, product.model, product.location].join(" ").toLowerCase().includes(q);
      return matchesCategory && matchesQuery;
    });
  }

  const supabase = await createClient();
  const query = supabase.from("products").select("*").is("deleted_at", null).order("created_at", { ascending: false });
  const { data, error } = await query;

  if (error || !data) return products;
  return data.map((row) => ({
    id: row.id,
    sku: row.sku,
    name: row.name,
    category: "General",
    brand: row.brand ?? "Unbranded",
    model: row.model ?? "N/A",
    condition: "Ready To Use",
    location: "Main Branch",
    branch: "Main Branch",
    status: row.status as never,
    price: Number(row.selling_price ?? 0),
    acquisitionCost: 0,
    quantity: 1,
    availableQuantity: 1,
    reservedQuantity: 0,
    description: row.description ?? "",
    imageUrl: products[0].imageUrl,
    features: ["Supabase-backed listing"],
    specs: {},
  }));
}

export async function getProduct(productId: string) {
  return products.find((product) => product.id === productId) ?? products[0];
}

export async function getCategories() {
  return categories;
}
