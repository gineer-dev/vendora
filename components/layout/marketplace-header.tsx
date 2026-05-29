import Link from "next/link";
import { Circle, Heart, Search, ShoppingBag, UserRound } from "lucide-react";
import { marketplaceNav } from "@/constants/navigation";
import { Button } from "@/components/ui/button";

export function MarketplaceHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/60 bg-white/75 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 text-sm font-semibold tracking-tight text-foreground">
          <span className="relative flex h-7 w-8 items-center">
            <Circle className="absolute left-0 top-0 h-2.5 w-2.5 fill-accent text-accent" />
            <Circle className="absolute bottom-0 right-0 h-5 w-5 fill-[#292d30] text-[#292d30]" />
          </span>
          Vendora
        </Link>
        <nav className="hidden items-center gap-10 text-xs font-semibold md:flex">
          {marketplaceNav.map((item) => (
            <Link key={item.href} href={item.href} className="relative text-muted-foreground hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/marketplace" aria-label="Search marketplace" className="rounded-md p-2 hover:bg-muted">
            <Search className="h-5 w-5" />
          </Link>
          <Link href="/favorites" aria-label="Favorites" className="rounded-md p-2 hover:bg-muted">
            <Heart className="h-5 w-5" />
          </Link>
          <Link href="/login">
            <Button variant="outline" className="hidden sm:inline-flex">
              <UserRound className="h-4 w-4" />
              Login
            </Button>
          </Link>
          <Link href="/dashboard">
            <Button variant="secondary" className="hidden h-8 px-5 text-xs sm:inline-flex">
              <ShoppingBag className="h-4 w-4" />
              Business
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
