export const dynamic = "force-dynamic";
export const revalidate = 0;
export const fetchCache = "force-no-store";

import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";
import { PwaRegister } from "@/components/layout/pwa-register";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Vendora",
    template: "%s | Vendora",
  },
  description:
    "A commerce operating system and marketplace platform for managing products, inventory, sales, customers, operations, maintenance, finances, and analytics.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    title: "Vendora",
    statusBarStyle: "default",
  },
};

export const viewport: Viewport = {
  themeColor: "#611824",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="vendora-shell min-h-full">
        {children}
        <Toaster richColors position="top-right" />
        <PwaRegister />
      </body>
    </html>
  );
}
