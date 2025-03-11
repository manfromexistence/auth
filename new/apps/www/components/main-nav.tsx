"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-4 flex items-center space-x-2 lg:mr-6">
        <Icons.logo className="h-6 w-6" />
        <span className="hidden font-bold lg:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="flex items-center gap-4 text-sm lg:gap-6">
        <Link
          href="/docs"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/docs" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Docs
        </Link>
        <Link
          href="/docs/components"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/docs/components") &&
              !pathname?.startsWith("/docs/component/chart")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Components
        </Link>
        <Link
          href="/web2"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/web2")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Web2
        </Link>
        <Link
          href="/web3"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/docs/component/chart") ||
              pathname?.startsWith("/web3")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Web3
        </Link>
        <Link
          href="/biometric"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/biometric")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          Biometric
        </Link>
        <Link
          href="/more"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname?.startsWith("/more")
              ? "text-foreground"
              : "text-foreground/60"
          )}
        >
          More
        </Link>
      </nav>
    </div>
  )
}
