import Image from "next/image";
import Link from "next/link";
import { Heart, MapPin } from "lucide-react";
import type { Product } from "@/types/domain";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const currency = new Intl.NumberFormat("en-PH", { style: "currency", currency: "PHP", maximumFractionDigits: 0 });

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="overflow-hidden rounded-3xl border border-white/70 bg-white shadow-[0_14px_26px_rgba(30,38,43,0.12)] transition hover:-translate-y-1 hover:shadow-[0_20px_34px_rgba(30,38,43,0.16)]">
      <Link href={`/marketplace/${product.id}`} className="block">
        <div className="relative aspect-[4/3] bg-muted">
          <Image src={product.imageUrl} alt={product.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
        </div>
      </Link>
      <div className="space-y-3 p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <Badge className="mb-2 border-0 bg-muted text-[10px] uppercase tracking-[0.14em] text-muted-foreground">{product.category}</Badge>
            <h3 className="line-clamp-2 text-base font-semibold">{product.name}</h3>
            <p className="text-sm text-muted-foreground">{product.brand} {product.model}</p>
          </div>
          <button aria-label="Save favorite" className="rounded-full border bg-white p-2 shadow-sm hover:bg-muted">
            <Heart className="h-4 w-4" />
          </button>
        </div>
        <p className="line-clamp-2 text-sm text-muted-foreground">{product.description}</p>
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" />
          {product.location}
        </div>
        <div className="flex items-center justify-between">
          <p className="text-lg font-bold text-foreground">{currency.format(product.price)}</p>
          <Badge className="border-primary/20 bg-primary/10 text-primary">{product.status}</Badge>
        </div>
        <Link href={`/marketplace/${product.id}`}>
          <Button className="w-full">View Details</Button>
        </Link>
      </div>
    </article>
  );
}
