"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className="
  sticky
  top-0
  z-50
  bg-[var(--color-background)]/90
  backdrop-blur-md
  border-b
  border-[var(--color-border)]
"
    >
      <nav className="max-w-6xl mx-auto px-6 py-4">
        {/* Header bar */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            onClick={closeMenu}
            className="text-xl font-bold text-gradient transition"
          >
            Ian Ochami
          </Link>

          {/* Hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="
              p-2
              rounded-lg
              text-[var(--color-foreground)]
              hover:text-[var(--color-primary)]
              hover:bg-[var(--color-surface)]
              transition
            "
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Navigation Menu */}
        {menuOpen && (
          <div className="mt-4 border-t border-[var(--color-border)] pt-4">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="
                    px-4
                    py-3
                    rounded-lg
                    text-[var(--color-foreground)]
                    hover:text-[var(--color-primary)]
                    hover:bg-[var(--color-surface)]
                    transition
                  "
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
