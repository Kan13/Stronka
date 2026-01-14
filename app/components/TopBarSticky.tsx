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
      <div className="flex items-center justify-between py-4">
        <div className="flex items-center gap-4">
          <Logo size={42} />
          <span className="text-lg font-semibold tracking-wide">SKUP AUT 24H/7</span>
        </div>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-7">
          <a href="/#page-0" className="text-base hover:text-[color:var(--color-brand)]">O Nas</a>
          <a href="/jakie-auta-kupujemy" className="text-base hover:text-[color:var(--color-brand)]">Jakie auta kupujemy?</a>
          <a href="/obszar-dzialania" className="text-base hover:text-[color:var(--color-brand)]">Obszar Działania</a>
          <a href="/formularz" className="text-base hover:text-[color:var(--color-brand)]">Formularz</a>
          <a href="/kontakt" className="text-base hover:text-[color:var(--color-brand)]">Kontakt</a>
          <a
            href={`tel:792905099`}
            className="px-5 py-3 rounded-md bg-[color:var(--color-brand)] text-white text-base hover:bg-[color:var(--color-brand-dark)] border-2 border-[#FFFF00]"
          >
            Zadzwoń: 792 - 905 - 099
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          aria-label="Menu"
          className="md:hidden inline-flex items-center justify-center rounded border border-gray-300 px-4 py-3"
          onClick={() => setOpen(v => !v)}
        >
          ☰
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden border-t border-gray-200">
          <div className="px-5 py-4 flex flex-col gap-4">
            <a href="/#page-0" onClick={() => setOpen(false)} className="text-lg">O Nas</a>
            <a href="/jakie-auta-kupujemy" onClick={() => setOpen(false)} className="text-lg">Jakie auta kupujemy?</a>
            <a href="/obszar-dzialania" onClick={() => setOpen(false)} className="text-lg">Obszar Działania</a>
            <a href="/formularz" onClick={() => setOpen(false)} className="text-lg">Formularz</a>
            <a href="/kontakt" onClick={() => setOpen(false)} className="text-lg">Kontakt</a>
            <a href={`tel:792905099`} onClick={() => setOpen(false)} className="mt-3 px-5 py-3 rounded-md bg-[color:var(--color-brand)] text-white text-center border-2 border-[color:var(--yellow)]">Zadzwoń: 792 - 905 - 099</a>
          </div>
        </div>
      )}
    </header>
  );
}