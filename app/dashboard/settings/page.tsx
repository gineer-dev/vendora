export const dynamic = "force-dynamic";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SettingsPage() {
  return (
    <div className="space-y-5">
      <h1 className="text-2xl font-bold">Settings</h1>
      <Card><CardHeader><CardTitle>Platform Settings</CardTitle></CardHeader><CardContent>Google login-ready, MFA-ready, storage buckets, notification channels, custom categories, and branch policies.</CardContent></Card>
    </div>
  );
}
