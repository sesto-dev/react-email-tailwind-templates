'use client'

import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'

export function MainNav({
   className,
   ...props
}: React.HTMLAttributes<HTMLElement>) {
   const pathname = usePathname()

   const routes = [
      {
         href: `/billboards`,
         label: 'Billboards',
         active: pathname === `/billboards`,
      },
      {
         href: `/categories`,
         label: 'Categories',
         active: pathname === `/categories`,
      },
      {
         href: `/products`,
         label: 'Products',
         active: pathname === `/products`,
      },
      {
         href: `/orders`,
         label: 'Orders',
         active: pathname === `/orders`,
      },
      {
         href: `/users`,
         label: 'Users',
         active: pathname === `/users`,
      },
      {
         href: `/codes`,
         label: 'Codes',
         active: pathname === `/codes`,
      },
   ]

   return (
      <nav
         className={cn('flex items-center space-x-4 lg:space-x-6', className)}
         {...props}
      >
         {routes.map((route) => (
            <Link
               key={route.href}
               href={route.href}
               className={cn(
                  'text-sm font-medium transition-colors hover:text-primary',
                  route.active
                     ? 'text-black dark:text-white'
                     : 'text-muted-foreground'
               )}
            >
               {route.label}
            </Link>
         ))}
      </nav>
   )
}
