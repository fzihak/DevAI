"use client"

import { useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Terminal, Menu } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { gsap } from 'gsap'

const routes = [
  {
    label: 'Products',
    items: [
      { label: 'AI Models', href: '/products/ai-models' },
      { label: 'API Services', href: '/products/api-services' },
      { label: 'Enterprise', href: '/products/enterprise' },
    ]
  },
  {
    label: 'Services',
    items: [
      { label: 'Data Analysis', href: '/services/data-analysis' },
      { label: 'Web Development', href: '/services/web-development' },
      { label: 'AI Integration', href: '/services/ai-integration' },
    ]
  },
  {
    label: 'Case Studies',
    href: '/case-studies',
  },
  {
    label: 'Projects',
    href: '/projects',
  },
  {
    label: 'Pricing',
    href: '/pricing',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
]

export default function Navbar() {
  const pathname = usePathname()

  useEffect(() => {
    gsap.from('.nav-item', {
      opacity: 0,
      y: -20,
      duration: 0.5,
      stagger: 0.1,
      ease: 'power2.out',
    })
  }, [])

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container flex items-center h-16 justify-between">
        <Link href="/" className="flex items-center gap-2 nav-item">
          <Terminal className="w-8 h-8 text-primary" />
          <span className="font-bold text-xl">DevAI</span>
        </Link>

        <div className="hidden lg:flex items-center gap-6">
          {routes.map((route) => (
            route.items ? (
              <DropdownMenu key={route.label}>
                <DropdownMenuTrigger className="nav-item text-sm font-medium transition-colors hover:text-primary">
                  {route.label}
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {route.items.map((item) => (
                    <DropdownMenuItem key={item.href}>
                      <Link
                        href={item.href}
                        className="w-full"
                      >
                        {item.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  'nav-item text-sm font-medium transition-colors hover:text-primary',
                  pathname === route.href
                    ? 'text-foreground'
                    : 'text-muted-foreground'
                )}
              >
                {route.label}
              </Link>
            )
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="ghost" className="nav-item">
              Sign in
            </Button>
            <Button className="nav-item">
              Start Free
            </Button>
          </div>

          <Sheet>
            <SheetTrigger asChild className="lg:hidden nav-item">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-4 mt-8">
                {routes.map((route) => (
                  route.items ? (
                    <div key={route.label} className="flex flex-col gap-2">
                      <span className="text-sm font-semibold">{route.label}</span>
                      {route.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="text-sm text-muted-foreground pl-4"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      key={route.href}
                      href={route.href}
                      className="text-sm font-medium"
                    >
                      {route.label}
                    </Link>
                  )
                ))}
                <Button variant="ghost">Sign in</Button>
                <Button>Start Free</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}