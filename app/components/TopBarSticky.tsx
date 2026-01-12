"use client";

import { useState } from "react";

function Logo({ size = 32 }: { size?: number }) {
  const [src, setSrc] = useState("/Icon.png");
  return (
    <img
      src={src}
      width={size}
      height={size}
      alt="Skup Aut 24h/7"
      className="rounded-full object-cover"
      onError={() => setSrc("/favicon.jpg")}
    />
  );
}

export default function TopBarSticky() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 header-blur">
      <div className="flex items-center justify-between py-3">
        <div className="flex items-center gap-3">
          <Logo size={32} />
          <span className="text-base font-semibold tracking-wide">SKUP AUT 24H/7</span>
        </div>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="/#page-0" className="text-sm hover:text-[color:var(--color-brand)]">O Nas</a>
          <a href="/jakie-auta-kupujemy" className="text-sm hover:text-[color:var(--color-brand)]">Jakie auta kupujemy?</a>
          <a href="/obszar-dzialania" className="text-sm hover:text-[color:var(--color-brand)]">Obszar Działania</a>
          <a href="/formularz" className="text-sm hover:text-[color:var(--color-brand)]">Formularz</a>
          <a href="/kontakt" className="text-sm hover:text-[color:var(--color-brand)]">Kontakt</a>
          <a
            href={`tel:792905099`}
            className="px-4 py-2 rounded-md bg-[color:var(--color-brand)] text-white text-sm hover:bg-[color:var(--color-brand-dark)]"
          >
            Zadzwoń: 792 - 905 - 099
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          aria-label="Menu"
          className="md:hidden inline-flex items-center justify-center rounded border border-gray-300 px-3 py-2"
          onClick={() => setOpen(v => !v)}
        >
          ☰
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden border-t border-gray-200">
          <div className="px-4 py-3 flex flex-col gap-3">
            <a href="/#page-0" onClick={() => setOpen(false)} className="text-base">O Nas</a>
            <a href="/jakie-auta-kupujemy" onClick={() => setOpen(false)} className="text-base">Jakie auta kupujemy?</a>
            <a href="/obszar-dzialania" onClick={() => setOpen(false)} className="text-base">Obszar Działania</a>
            <a href="/formularz" onClick={() => setOpen(false)} className="text-base">Formularz</a>
            <a href="/kontakt" onClick={() => setOpen(false)} className="text-base">Kontakt</a>
            <a href={`tel:792905099`} onClick={() => setOpen(false)} className="mt-2 px-4 py-2 rounded-md bg-[color:var(--color-brand)] text-white text-center">Zadzwoń: 792 - 905 - 099</a>
          </div>
        </div>
      )}
    </header>
  );
}