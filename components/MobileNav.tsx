"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  "about",
  "projects",
  "skills",
  "learning",
  "contact",
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Button
        variant="outline"
        size="icon"
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
      >
        {open ? (
          <X className="h-5 w-5" />
        ) : (
          <Menu className="h-5 w-5" />
        )}
      </Button>

      {open && (
        <nav className="absolute left-0 right-0 top-full z-50 mt-2 rounded-xl border border-line bg-card p-2 shadow-lg">
          <ul className="flex flex-col">
            {navItems.map((item) => (
              <li key={item}>
                <Link
                  href={`#${item}`}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-4 py-3 text-sm font-medium text-mute transition-colors hover:bg-chip hover:text-ink"
                >
                  {item[0].toUpperCase() + item.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}