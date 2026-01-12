"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const PHONE = "792905099";
const PHONE_FMT = "792 - 905 - 099";
const EMAIL = "kontakt@example.com";

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8 font-sans">
      <TopBarSticky />

      <h1 className="mt-6 text-4xl md:text-5xl font-extrabold text-center underline underline-offset-6 decoration-[color:var(--color-brand)] decoration-4">
        Kontakt
      </h1>

      {/* Sekcja danych kontaktowych */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 p-6 rounded-lg border border-gray-200">
          <h2 className="text-xl font-semibold">Dane kontaktowe</h2>
          <div className="mt-4 space-y-2">
            <p>
              Telefon:{" "}
              <a className="text-[color:var(--color-brand)] hover:underline" href={`tel:${PHONE}`}>
                {PHONE_FMT}
              </a>
            </p>
            <p>
              E‑mail:{" "}
              <a className="text-[color:var(--color-brand)] hover:underline" href={`mailto:${EMAIL}`}>
                {EMAIL}
              </a>
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`tel:${PHONE}`}
              className="px-6 py-3 rounded-md bg-[color:var(--color-brand)] text-white font-medium hover:bg-[color:var(--color-brand-dark)]"
            >
              Zadzwoń teraz
            </a>
            <a href={`mailto:${EMAIL}`} className="px-6 py-3 rounded-md border border-gray-300 hover:bg-gray-50">
              Napisz maila
            </a>
          </div>
        </div>

        <div className="md:col-span-1 p-6 rounded-lg border border-gray-200">
          <h3 className="text-lg font-semibold">Godziny pracy</h3>
          <p className="mt-2">Działamy 24/7</p>
        </div>
      </div>

      {/* --- BLOK NAD SOCIAL --- */}

      {/* Przerwa 3/3 – info o formularzu */}
      <div className="mt-10 w-full">
        <p className="mx-auto max-w-3xl text-center text-base md:text-lg leading-relaxed">
          Chcesz otrzymać wycenę szybciej? Skorzystaj z formularza kontaktowego dostępnego w zakładkach na naszej
          stronie!
        </p>
      </div>

      {/* Przerwa */}
      <div className="h-8" />

      {/* Wyśrodkowany nagłówek z podkreśleniem */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-center underline underline-offset-6 decoration-[color:var(--color-brand)] decoration-4">
        Dlaczego my ?
      </h2>

      {/* Przerwa */}
      <div className="h-6" />

      {/* Trzy obrazy 200×200: lewa / środek / prawa */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        <div className="flex justify-start md:justify-center">
          <Image src="/3.0.png" width={200} height={200} alt="200×200 (lewa)" className="rounded-md" />
        </div>
        <div className="flex justify-center">
          <Image src="/3.1.png" width={200} height={200} alt="200×200 (środek)" className="rounded-md" />
        </div>
        <div className="flex justify-end md:justify-center">
          <Image src="/3.2.png" width={200} height={200} alt="200×200 (prawa)" className="rounded-md" />
        </div>
      </section>

      {/* Opisy 1/3 – WYŚRODKOWANE pod każdą kolumną */}
      <section className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="text-center">
          <h3 className="text-lg font-semibold">Dostępność 24/7</h3>
          <p className="mt-1 leading-relaxed" style={{ whiteSpace: "pre-line" }}>
            {"działamy wtedy, gdy inni już\nzamykają drzwi."}
          </p>
        </div>
        <div className="text-center">
          <h3 className="text-lg font-semibold">Profesjonalizm</h3>
          <p className="mt-1 leading-relaxed" style={{ whiteSpace: "pre-line" }}>
            {"doświadczenie, uczciwość\ni pełna transparentność na każdym etapie."}
          </p>
        </div>
        <div className="text-center">
          <h3 className="text-lg font-semibold">Satysfakcja klienta</h3>
          <p className="mt-1 leading-relaxed" style={{ whiteSpace: "pre-line" }}>
            {"Twój zadowolony uśmiech to\nnasza najlepsza rekomendacja."}
          </p>
        </div>
      </section>

      {/* Przerwa */}
      <div className="h-10" />

      {/* Wyśrodkowany akapit 3/3 – CTA */}
      <section className="w-full">
        <p className="mx-auto max-w-3xl text-center text-base md:text-lg leading-relaxed">
          Zapraszamy do skorzystania z usług Skupu Aut 24h/7 — odkryj, że sprzedaż samochodu może być szybka, prosta i
          bezproblemowa. Skontaktuj się z nami i przekonaj się sam — jesteśmy dostępni dla Ciebie zawsze i wszędzie.
        </p>
      </section>

      {/* --- KONIEC BLOKU NAD SOCIAL --- */}

      <div className="mt-12">
        <SocialBar />
      </div>
    </main>
  );
}

/* ===== TopBarSticky – z hamburgerem (mobile) ===== */
function TopBarSticky() {
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
          <a href={`tel:${PHONE}`} className="px-4 py-2 rounded-md bg-[color:var(--color-brand)] text-white text-sm hover:bg-[color:var(--color-brand-dark)]">Zadzwoń: {PHONE_FMT}</a>
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
            <a href={`tel:${PHONE}`} onClick={() => setOpen(false)} className="mt-2 px-4 py-2 rounded-md bg-[color:var(--color-brand)] text-white text-center">Zadzwoń: {PHONE_FMT}</a>
          </div>
        </div>
      )}
    </header>
  );
}

/* Placeholder obrazu o stałym rozmiarze (px) */
function PlaceholderImage({ w, h, label }: { w: number; h: number; label: string }) {
  return (
    <div
      className="relative border border-gray-300 rounded-md bg-[length:12px_12px]"
      style={{
        width: `${w}px`,
        height: `${h}px`,
        backgroundImage:
          "linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(180deg, rgba(0,0,0,0.04) 1px, transparent 1px)",
      }}
      aria-label={label}
    >
      <div className="absolute inset-0 flex items-center justify-center text-xs text-gray-600">{label}</div>
    </div>
  );
}

/* Logo z fallbackiem */
function Logo({ size = 32 }: { size?: number }) {
  const [src, setSrc] = useState("/Icon.png");
  useEffect(() => {}, []);
  return <img src={src} width={size} height={size} alt="Skup Aut 24h/7" className="rounded-full object-cover" onError={() => setSrc("/favicon.jpg")} />;
}

function FacebookIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="#1877F2"/>
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" fill="#25D366"/>
    </svg>
  );
}

function GmailIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="#ea4335"/>
    </svg>
  );
}

/* Pasek Social */
function SocialBar() {
  const items = [
    { name: "Facebook", href: "https://www.facebook.com/czewa.skup.aut", icon: FacebookIcon },
    { name: "WhatsApp", href: "https://wa.me/48792905099", icon: WhatsAppIcon },
    { name: "Gmail", href: "https://mail.google.com/mail/?view=cm&fs=1&to=zesdjecia@gmail.com", icon: GmailIcon },
  ];
  return (
    <section className="w-full border-t border-gray-200 pt-6">
      <h3 className="text-center text-lg font-semibold">Skontaktuj się z nami</h3>
      <div className="mt-4 flex items-center justify-center gap-4">
        {items.map((it) => (
          <a key={it.name} href={it.href} aria-label={it.name} className="rounded-md" title={it.name}>
            <it.icon />
          </a>
        ))}
      </div>
    </section>
  );
}
