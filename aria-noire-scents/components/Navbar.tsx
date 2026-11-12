"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import { navLinks, site, whatsappLink } from "../lib/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-beige bg-ivory/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#home" className="flex items-center gap-3" aria-label="Aria Noire Scents, home">
          <Logo size={68} priority />
          <span className="hidden font-serif text-xl text-olive sm:block">{site.name}</span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-9 md:flex">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-espresso transition-colors hover:text-olive hover:underline hover:decoration-gold hover:underline-offset-8">
              {l.label}
            </a>
          ))}
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn btn-primary !px-5 !py-2.5">
            Shop / Enquire
          </a>
        </nav>

        <button
          type="button"
          className="-mr-2 p-2 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true" className="text-olive">
            {open ? <path d="M5 5l14 14M19 5L5 19" /> : <path d="M4 8h16M4 16h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="border-t border-beige bg-ivory md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-5 py-4 sm:px-8">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="block border-b border-beige py-4 font-serif text-2xl text-olive">
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-5">
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full" onClick={() => setOpen(false)}>
                Shop / Enquire
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
