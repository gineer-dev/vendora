export const dynamic = "force-dynamic";

import { products } from "@/constants/sample-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function InventoryPage() {
  return (
    <div className="space-y-5">
      <h1 className="text-2xl font-bold">Inventory Management</h1>
      <div className="grid gap-4 md:grid-cols-3">
        {["Draft", "Inspection", "Maintenance", "Ready", "Reserved", "Sold", "Archived"].map((status) => (
          <Card key={status}>
            <CardHeader><CardTitle>{status}</CardTitle></CardHeader>
            <CardContent className="text-3xl font-bold">{products.filter((product) => product.status === status).length}</CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
