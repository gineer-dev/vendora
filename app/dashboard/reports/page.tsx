export const dynamic = "force-dynamic";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const reports = ["Sales reports", "Inventory reports", "Maintenance reports", "Customer reports", "Financial reports", "Export queue: Excel, PDF, CSV"];

export default function ReportsPage() {
  return (
    <div className="space-y-5">
      <h1 className="text-2xl font-bold">Reporting and Analytics</h1>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {reports.map((report) => <Card key={report}><CardHeader><CardTitle>{report}</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground">Placeholder ready for filtered report builders and export services.</CardContent></Card>)}
      </div>
    </div>
  );
}
