import Link from "next/link";
import { Bell, Circle, LogOut, Menu, Search } from "lucide-react";
import { dashboardNav } from "@/constants/navigation";
import { Button } from "@/components/ui/button";

export function DashboardShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background p-3 lg:p-5">
      <aside className="fixed inset-y-5 left-5 z-40 hidden w-72 overflow-hidden rounded-[30px] border border-white/70 bg-white/86 shadow-[0_18px_34px_rgba(29,35,39,0.18)] backdrop-blur-xl lg:block">
        <div className="flex h-20 items-center border-b border-border/70 px-6">
          <Link href="/dashboard" className="flex items-center gap-3 text-sm font-bold tracking-tight text-foreground">
            <span className="relative flex h-8 w-9 items-center">
              <Circle className="absolute left-0 top-0 h-2.5 w-2.5 fill-accent text-accent" />
              <Circle className="absolute bottom-0 right-0 h-6 w-6 fill-[#292d30] text-[#292d30]" />
            </span>
            Vendora OS
          </Link>
        </div>
        <nav className="h-[calc(100vh-8.5rem)] overflow-y-auto px-4 py-5">
          {dashboardNav.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={`${item.href}-${item.label}`}
                href={item.href}
                className="mb-1 flex h-11 items-center gap-3 rounded-full px-4 text-sm font-semibold text-muted-foreground transition hover:bg-primary/10 hover:text-foreground"
              >
                <Icon className="h-4 w-4 text-primary" />
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="absolute bottom-4 left-4 right-4 rounded-3xl bg-[#eef3f5] p-4">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-primary">Workspace</p>
          <p className="mt-2 text-sm font-semibold">Branch-aware commerce operations</p>
        </div>
      </aside>
      <div className="lg:pl-80">
        <header className="sticky top-3 z-30 mb-5 flex h-20 items-center justify-between rounded-[28px] border border-white/70 bg-white/86 px-4 shadow-[0_14px_28px_rgba(29,35,39,0.12)] backdrop-blur-xl sm:px-6">
          <div className="flex items-center gap-3">
            <Button variant="ghost" className="px-2 lg:hidden" aria-label="Open navigation">
              <Menu className="h-5 w-5" />
            </Button>
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-primary">Business Management Portal</p>
              <p className="text-xs text-muted-foreground">Role-aware operations dashboard</p>
            </div>
          </div>
          <div className="hidden h-11 min-w-72 items-center gap-2 rounded-full bg-muted px-4 text-sm text-muted-foreground md:flex">
            <Search className="h-4 w-4 text-primary" />
            Search products, customers, reports
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" className="h-12 w-12 px-0" aria-label="Notifications">
              <Bell className="h-4 w-4" />
            </Button>
            <form action="/auth/signout" method="post">
              <Button variant="secondary" className="h-12 w-12 px-0" aria-label="Sign out">
                <LogOut className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </header>
        <main className="rounded-[32px] border border-white/65 bg-white/40 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] sm:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
