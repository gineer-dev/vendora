# Vendora

Vendora is a full-stack Commerce Operating System and Marketplace Platform built with Next.js 15, TypeScript, Supabase, Tailwind CSS, and ShadCN-style UI primitives. It combines a public marketplace with a protected business management portal for inventory, sales, reservations, CRM, maintenance, finance, analytics, branch management, notifications, and audit logging.

## Stack

- Next.js 15 App Router and TypeScript strict mode
- Supabase Auth, PostgreSQL, Row Level Security, and Storage
- Tailwind CSS 4 with accessible ShadCN-compatible primitives
- Zod validation, Server Actions, and React Hook Form-ready schemas
- TanStack Table for management tables
- Recharts for executive dashboards
- PWA manifest, service worker, offline fallback, and installable shell

## Getting Started

Install dependencies:

```bash
npm install
```

Create `.env.local` from `.env.example`:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=sb_publishable_your_key
SUPABASE_SERVICE_ROLE_KEY=your_server_only_service_role_key
```

Apply the Supabase schema in `supabase/migrations/202605290001_init_vendora.sql`, then run `supabase/seed.sql`.

Start development:

```bash
npm run dev
```

Open:

- Marketplace: `http://localhost:3000`
- Product listings: `http://localhost:3000/marketplace`
- Business dashboard: `http://localhost:3000/dashboard`

## Key Routes

- Public marketplace: `/`, `/marketplace`, `/marketplace/[productId]`, `/categories`, `/favorites`, `/inquiries`, `/reservations`
- Auth: `/login`, `/register`, `/forgot-password`
- Dashboard: `/dashboard`, `/dashboard/products`, `/dashboard/products/new`, `/dashboard/inventory`, `/dashboard/inquiries`, `/dashboard/reservations`, `/dashboard/sales`, `/dashboard/customers`, `/dashboard/maintenance`, `/dashboard/inspections`, `/dashboard/expenses`, `/dashboard/reports`, `/dashboard/branches`, `/dashboard/users`, `/dashboard/settings`, `/dashboard/audit-logs`

## Supabase

The app uses `@supabase/ssr` clients:

- `lib/supabase/client.ts` for Client Components
- `lib/supabase/server.ts` for Server Components, Server Actions, and Route Handlers
- `proxy.ts` and `lib/supabase/proxy.ts` for protected dashboard route guarding and session refresh

The migration includes RBAC tables, branch-aware records, product lifecycle fields, reservations, sales, CRM, inspections, maintenance, finance, notifications, audit logs, and Storage policies for `vendora-media`.

## PWA

The PWA files live in `public/manifest.json`, `public/sw.js`, `public/icons/icon.svg`, and `app/offline/page.tsx`. The service worker caches basic marketplace pages and the dashboard shell for offline fallback.

## Development Notes

The UI currently includes sample data fallbacks so the app is useful before Supabase credentials are configured. When Supabase environment variables are present, services and Server Actions are structured to use Supabase tables and RLS.
