export const dynamic = "force-dynamic";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function OfflinePage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 text-center">
      <div>
        <h1 className="text-3xl font-bold">Vendora is offline</h1>
        <p className="mt-3 max-w-md text-muted-foreground">Cached marketplace and dashboard shell pages remain available. Reconnect to sync live inventory, reservations, and reports.</p>
        <Link href="/"><Button className="mt-6">Return Home</Button></Link>
      </div>
    </main>
  );
}
