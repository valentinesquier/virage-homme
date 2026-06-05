"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/site-config";
import { Logo } from "./logo";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-virage-homme-anthracite/10 bg-virage-homme-creme/95 backdrop-blur supports-[backdrop-filter]:bg-virage-homme-creme/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 max-w-6xl">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {siteConfig.nav.map((item) => {
            const isActive = pathname === `/${item.href}` || pathname.startsWith(`/${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`font-sans text-sm transition-colors hover:text-virage-homme-vert ${
                  isActive
                    ? "text-virage-homme-vert font-medium"
                    : "text-virage-homme-anthracite/70"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-virage-homme-anthracite"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="md:hidden border-t border-virage-homme-anthracite/10 bg-virage-homme-creme px-4 py-4">
          <div className="flex flex-col gap-3">
            {siteConfig.nav.map((item) => {
              const isActive = pathname === `/${item.href}` || pathname.startsWith(`/${item.href}/`);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`font-sans text-sm py-1 transition-colors hover:text-virage-homme-vert ${
                    isActive
                      ? "text-virage-homme-vert font-medium"
                      : "text-virage-homme-anthracite/70"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
}
