export const dynamic = "force-dynamic";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Building2, Gauge, ShieldCheck, SlidersHorizontal, Wrench } from "lucide-react";
import { MarketplaceHeader } from "@/components/layout/marketplace-header";
import { ProductCard } from "@/components/marketplace/product-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { products } from "@/constants/sample-data";

export default function HomePage() {
  return (
    <>
      <MarketplaceHeader />
      <main>
        <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:py-12">
          <div className="reference-surface relative min-h-[560px] overflow-hidden px-6 py-8 sm:px-10 lg:px-16 lg:py-14">
            <div className="absolute left-0 top-1/2 hidden -translate-y-1/2 overflow-hidden rounded-r-2xl bg-primary text-white shadow-lg sm:block">
              <div className="grid gap-4 px-3 py-4">
                <Gauge className="h-4 w-4" />
                <ShieldCheck className="h-4 w-4" />
                <SlidersHorizontal className="h-4 w-4" />
              </div>
            </div>
            <div className="grid gap-8 lg:grid-cols-[1fr_340px]">
              <div className="relative z-10 max-w-2xl pt-4 lg:pt-10">
                <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">Get your</p>
                <h1 className="max-w-2xl text-4xl font-black uppercase tracking-normal sm:text-5xl lg:text-6xl">
                  Commerce OS
                </h1>
                <p className="mt-4 max-w-md text-xs leading-5 text-muted-foreground sm:text-sm">
                  Browse premium listings, reserve products, and operate inventory, sales, customers, maintenance, and finance from one modern platform.
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Link href="/marketplace">
                    <Button variant="secondary" className="w-full px-8 sm:w-auto">
                      Discover
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/dashboard">
                    <Button variant="outline" className="w-full px-8 sm:w-auto">Dashboard</Button>
                  </Link>
                </div>
              </div>

              <div className="soft-control relative z-20 rounded-[34px] border border-white/75 bg-white/90 p-5 lg:mt-12">
                <p className="mb-4 text-center text-xs font-bold uppercase tracking-[0.18em]">Product Search</p>
                <div className="grid gap-4">
                  {["Category", "Brand or model", "Location"].map((label) => (
                    <div key={label} className="flex h-12 items-center justify-between rounded-sm bg-muted px-4 text-xs font-semibold text-muted-foreground">
                      {label}
                      <span className="grid h-5 w-5 place-items-center rounded-full bg-primary text-[10px] text-white">+</span>
                    </div>
                  ))}
                  <div className="flex h-12 items-center justify-between rounded-sm bg-muted px-4 text-xs font-semibold">
                    Budget
                    <span>Any price</span>
                  </div>
                  <Link href="/marketplace">
                    <Button className="mx-auto -mb-8 mt-1 flex w-40">Search</Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="pointer-events-none relative z-10 mt-4 h-56 sm:h-72 lg:-mt-16 lg:h-80">
              <div className="absolute bottom-0 left-[20%] right-0 top-8 rounded-full bg-[#eef0ef]" />
              <Image
                src={products[0].imageUrl}
                alt={products[0].name}
                fill
                className="object-contain object-center drop-shadow-[0_22px_20px_rgba(18,24,27,0.22)]"
                priority
              />
              <p className="absolute right-[25%] top-10 hidden text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground lg:block">
                SUV Listing
              </p>
            </div>

            <div className="mt-8 grid gap-6 border-t pt-6 sm:grid-cols-3">
              {[
                { label: "Performance", value: "Multi-category", detail: "Vehicles, property, equipment" },
                { label: "Specification", value: "RBAC + RLS", detail: "Branch-aware access" },
                { label: "Interior", value: "PWA Ready", detail: "Cached shell and offline page" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-primary">{item.label}</p>
                  <p className="mt-4 text-xs text-muted-foreground">{item.value}</p>
                  <p className="mt-1 text-sm font-bold">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => <ProductCard key={product.id} product={product} />)}
          </div>
        </section>
        <section className="border-y border-white/70 bg-white/60">
          <div className="mx-auto grid max-w-7xl gap-4 px-4 py-8 sm:px-6 md:grid-cols-3">
            {[
              { icon: Building2, label: "Multi-branch inventory", text: "View inventory, sales, and reports by branch." },
              { icon: ShieldCheck, label: "Role-based access", text: "Customer, sales, inventory, finance, maintenance, and admin roles." },
              { icon: Wrench, label: "Maintenance workflows", text: "Inspection templates, work orders, attachments, and costs." },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.label}>
                  <CardContent className="p-5">
                    <Icon className="mb-4 h-6 w-6 text-primary" />
                    <h2 className="font-semibold">{item.label}</h2>
                    <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
}
