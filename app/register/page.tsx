export const dynamic = "force-dynamic";

import Link from "next/link";
import { signUp } from "@/services/actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function RegisterPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Create your Vendora account</CardTitle>
          <p className="text-sm text-muted-foreground">Customers can reserve products and track transactions after signup.</p>
        </CardHeader>
        <CardContent>
          <form action={signUp} className="grid gap-4">
            <Input name="email" type="email" placeholder="Email" required />
            <Input name="password" type="password" placeholder="Password" required />
            <Button type="submit">Register</Button>
          </form>
          <p className="mt-4 text-sm text-muted-foreground">
            Already registered? <Link href="/login" className="text-primary hover:underline">Login</Link>
          </p>
        </CardContent>
      </Card>
    </main>
  );
}
