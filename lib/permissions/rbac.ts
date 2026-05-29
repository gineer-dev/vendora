import type { UserRole } from "@/types/domain";

export type Permission =
  | "marketplace:read"
  | "favorites:write"
  | "inquiries:write"
  | "reservations:write"
  | "leads:manage"
  | "inventory:manage"
  | "maintenance:manage"
  | "finance:manage"
  | "reports:read"
  | "users:manage"
  | "settings:manage"
  | "audit:read";

export const rolePermissions: Record<UserRole, Permission[]> = {
  customer: ["marketplace:read", "favorites:write", "inquiries:write", "reservations:write"],
  sales_staff: ["marketplace:read", "leads:manage", "reservations:write", "reports:read"],
  inventory_manager: ["marketplace:read", "inventory:manage", "reports:read"],
  maintenance_staff: ["marketplace:read", "maintenance:manage", "reports:read"],
  finance_staff: ["marketplace:read", "finance:manage", "reports:read"],
  administrator: [
    "marketplace:read",
    "favorites:write",
    "inquiries:write",
    "reservations:write",
    "leads:manage",
    "inventory:manage",
    "maintenance:manage",
    "finance:manage",
    "reports:read",
    "users:manage",
    "settings:manage",
    "audit:read",
  ],
};

export function hasPermission(roles: UserRole[], permission: Permission) {
  return roles.some((role) => rolePermissions[role]?.includes(permission));
}
