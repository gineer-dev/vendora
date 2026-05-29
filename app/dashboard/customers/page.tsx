export const dynamic = "force-dynamic";

import { DataTable } from "@/components/tables/data-table";
import { customerColumns } from "@/components/tables/columns";
import { customers } from "@/constants/sample-data";

export default function CustomersPage() {
  return (
    <div className="space-y-5">
      <h1 className="text-2xl font-bold">CRM Customers</h1>
      <DataTable columns={customerColumns} data={customers} />
    </div>
  );
}
