"use client";

import Link from "next/link";
import ProfileMenu from "./ProfileMenu";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    {
      name: "Browse Homes",
      href: "/",
    },
    {
      name: "Saved Search",
      href: "/saved-search",
    },
    {
      name: "My Listings",
      href: "/my-listings",
    },
  ];

  return (
    <nav className="bg-white relative">
      <div
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl
  bg-white/10 dark:bg-black/20
  border border-white/20 dark:border-white/10
  shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]
  shadow-[0_10px_40px_rgba(0,0,0,0.15)]"
      >
        <div className="mx-auto flex max-w-9/12 items-center justify-between py-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setOpen((p) => !p)}
              className="lg:hidden w-9 h-9 flex items-center justify-center rounded-full border border-border"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
            <div className="flex items-center gap-2">
              <span className="text-primary font-bold text-4xl tracking-tight">
                Seek<span className="text-secondary">Prop</span>
              </span>
            </div>
          </div>

          {/* desktop */}
          <div>
            <ul className="lg:flex items-center gap-6 cursor-pointer hidden ">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`${
                      pathname === link.href
                        ? "text-secondary"
                        : "text-foreground hover:text-secondary"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li className="rounded-full bg-secondary px-4 py-2 text-white">
                <Link href="/property">List Property</Link>
              </li>
            </ul>
          </div>

          {/* mobile */}

          {open && (
            <div
              className="lg:hidden border-t border-border bg-background px-6 py-4 flex flex-col gap-4 absolute left-0 right-0 top-full
            "
            >
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`${
                      pathname === link.href
                        ? "text-secondary"
                        : "text-foreground hover:text-secondary"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <Link
                href="/list"
                onClick={() => setOpen(false)}
                className="rounded-full bg-secondary px-4 py-2 text-secondary-foreground text-sm font-medium text-center"
              >
                List a Property
              </Link>
            </div>
          )}

          <ProfileMenu />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
