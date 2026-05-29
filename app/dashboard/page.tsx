export const dynamic = "force-dynamic";

import { Boxes, CircleDollarSign, Handshake, MessageSquare, Percent, TrendingUp, Users, Wrench } from "lucide-react";
import { DashboardChartsDynamic } from "@/components/dashboard/charts-dynamic";
import { KpiCard } from "@/components/dashboard/kpi-card";
import { getDashboardKpis } from "@/services/kpis";

const money = new Intl.NumberFormat("en-PH", { style: "currency", currency: "PHP", maximumFractionDigits: 0 });

export default async function DashboardPage() {
  const kpis = await getDashboardKpis();
  return (
    <div className="space-y-7">
      <div className="reference-surface grid gap-6 px-6 py-7 lg:grid-cols-[1fr_280px] lg:px-8">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Operations cockpit</p>
          <h1 className="mt-3 text-3xl font-black uppercase tracking-normal sm:text-4xl">Executive Dashboard</h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">Inventory, sales, maintenance, finance, and customer health at a glance.</p>
        </div>
        <div className="rounded-[26px] bg-[#eef3f5] p-5">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">Monthly snapshot</p>
          <p className="mt-3 text-2xl font-black">{money.format(kpis.monthlyRevenue)}</p>
          <p className="mt-1 text-sm text-muted-foreground">Revenue against {money.format(kpis.monthlyExpenses)} expenses</p>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <KpiCard label="Total inventory" value={kpis.totalInventory} icon={Boxes} />
        <KpiCard label="Available listings" value={kpis.availableListings} icon={TrendingUp} />
        <KpiCard label="Active reservations" value={kpis.activeReservations} icon={Handshake} />
        <KpiCard label="Sales revenue" value={money.format(kpis.salesRevenue)} icon={CircleDollarSign} />
        <KpiCard label="Profit margin" value={`${kpis.profitMargin}%`} icon={Percent} />
        <KpiCard label="Customer count" value={kpis.customerCount} icon={Users} />
        <KpiCard label="Pending inquiries" value={kpis.pendingInquiries} icon={MessageSquare} />
        <KpiCard label="Under maintenance" value={kpis.underMaintenance} icon={Wrench} />
      </div>
      <DashboardChartsDynamic />
    </div>
  );
}
