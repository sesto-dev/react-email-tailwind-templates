"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();
  const params = useParams();

  const routes = [
    {
      href: `/${params.vendorId}`,
      label: "Overview",
      active: pathname === `/${params.vendorId}`,
    },
    {
      href: `/${params.vendorId}/billboards`,
      label: "Billboards",
      active: pathname === `/${params.vendorId}/billboards`,
    },
    {
      href: `/${params.vendorId}/categories`,
      label: "Categories",
      active: pathname === `/${params.vendorId}/categories`,
    },
    {
      href: `/${params.vendorId}/listings`,
      label: "Listings",
      active: pathname === `/${params.vendorId}/listings`,
    },
    {
      href: `/${params.vendorId}/orders`,
      label: "Orders",
      active: pathname === `/${params.vendorId}/orders`,
    },
    {
      href: `/${params.vendorId}/settings`,
      label: "Settings",
      active: pathname === `/${params.vendorId}/settings`,
    },
  ];

  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            route.active
              ? "text-black dark:text-white"
              : "text-muted-foreground"
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
}
