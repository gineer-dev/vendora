"use client";

import { Bar, BarChart, CartesianGrid, Cell, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { lifecycleData, revenueTrend } from "@/services/kpis";

const categoryData = [
  { name: "Vehicles", value: 32 },
  { name: "Electronics", value: 24 },
  { name: "Real Estate", value: 10 },
  { name: "Equipment", value: 18 },
  { name: "Furniture", value: 14 },
];

const colors = ["#4a86a5", "#151719", "#87aeba", "#d5d8d6", "#6f7d82"];

export function DashboardCharts() {
  return (
    <div className="grid gap-5 xl:grid-cols-2">
      <Card className="border-white/75 bg-white/92 shadow-[0_16px_28px_rgba(29,35,39,0.1)]">
        <CardHeader>
          <CardTitle>Revenue vs Expenses</CardTitle>
        </CardHeader>
        <CardContent className="h-80">
          <ResponsiveContainer width="100%" height="100%" minWidth={0}>
            <LineChart data={revenueTrend}>
              <CartesianGrid stroke="#d7d9d8" strokeDasharray="3 3" />
              <XAxis dataKey="month" tickLine={false} axisLine={false} />
              <YAxis tickLine={false} axisLine={false} />
              <Tooltip />
              <Line dataKey="revenue" stroke="#151719" strokeWidth={3} />
              <Line dataKey="expenses" stroke="#4a86a5" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <Card className="border-white/75 bg-white/92 shadow-[0_16px_28px_rgba(29,35,39,0.1)]">
        <CardHeader>
          <CardTitle>Inventory by Category</CardTitle>
        </CardHeader>
        <CardContent className="h-80">
          <ResponsiveContainer width="100%" height="100%" minWidth={0}>
            <BarChart data={categoryData}>
              <CartesianGrid stroke="#d7d9d8" strokeDasharray="3 3" />
              <XAxis dataKey="name" tickLine={false} axisLine={false} />
              <YAxis tickLine={false} axisLine={false} />
              <Tooltip />
              <Bar dataKey="value" fill="#4a86a5" radius={[10, 10, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <Card className="border-white/75 bg-white/92 shadow-[0_16px_28px_rgba(29,35,39,0.1)]">
        <CardHeader>
          <CardTitle>Product Lifecycle Status</CardTitle>
        </CardHeader>
        <CardContent className="h-80">
          <ResponsiveContainer width="100%" height="100%" minWidth={0}>
            <PieChart>
              <Pie data={lifecycleData} dataKey="value" nameKey="name" outerRadius={110} label>
                {lifecycleData.map((entry, index) => <Cell key={entry.name} fill={colors[index % colors.length]} />)}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <Card className="border-white/75 bg-white/92 shadow-[0_16px_28px_rgba(29,35,39,0.1)]">
        <CardHeader>
          <CardTitle>Reservation Conversion Rate</CardTitle>
        </CardHeader>
        <CardContent className="h-80">
          <ResponsiveContainer width="100%" height="100%" minWidth={0}>
            <BarChart data={[{ stage: "Inquiry", value: 120 }, { stage: "Reserved", value: 46 }, { stage: "Sale", value: 31 }]}>
              <CartesianGrid stroke="#d7d9d8" strokeDasharray="3 3" />
              <XAxis dataKey="stage" tickLine={false} axisLine={false} />
              <YAxis tickLine={false} axisLine={false} />
              <Tooltip />
              <Bar dataKey="value" fill="#151719" radius={[10, 10, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
