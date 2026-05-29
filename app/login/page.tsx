export const dynamic = "force-dynamic";

import Link from "next/link";
import { signIn } from "@/services/actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default async function LoginPage({ searchParams }: { searchParams: Promise<{ redirectTo?: string }> }) {
  const { redirectTo = "/dashboard" } = await searchParams;

  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Login to Vendora</CardTitle>
          <p className="text-sm text-muted-foreground">Email/password auth is active. Google and MFA hooks are prepared in Supabase.</p>
        </CardHeader>
        <CardContent>
          <form action={signIn} className="grid gap-4">
            <input type="hidden" name="redirectTo" value={redirectTo} />
            <Input name="email" type="email" placeholder="Email" required />
            <Input name="password" type="password" placeholder="Password" required />
            <Button type="submit">Login</Button>
          </form>
          <div className="mt-4 flex justify-between text-sm">
            <Link href="/register" className="text-primary hover:underline">Create account</Link>
            <Link href="/forgot-password" className="text-muted-foreground hover:text-primary">Forgot password?</Link>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
