"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const PHONE = "792905099";
const PHONE_FMT = "792 - 905 - 099";
const EMAIL = "kontakt@example.com";

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8 font-sans">
      <div id="page-2" className="sr-only" />
      <TopBarSticky />

      <Gap size="lg" />

      <h1 className="text-4xl md:text-5xl font-extrabold text-center underline underline-offset-6 decoration-[color:var(--color-brand)] decoration-4">
        Jakie auta kupujemy ?
      </h1>

      <Gap size="lg" />

      <section className="w-full">
        <div className="w-full text-base md:text-lg leading-relaxed" style={{ whiteSpace: "pre-line" }}>
{`W Skup Aut 24h/7 wierzymy, że każdy samochód ma swoją wartość — niezależnie od jego wieku, przebiegu czy stanu technicznego. Dlatego kupujemy auta w każdym stanie: sprawne, uszkodzone, powypadkowe, bez przeglądu, a nawet niesprawne do jazdy.
Działamy na terenie województwa śląskiego, łódzkiego, opolskiego,małopolskiego i świętokrzyskiego, oferując szybką i bezpieczną sprzedaż auta bez formalności. Wystarczy jeden kontakt – my zajmujemy się resztą.

Naszą misją jest maksymalne uproszczenie procesu sprzedaży:

🚗 bezpłatna wycena – poznaj realną wartość auta już podczas rozmowy,
📍 darmowy dojazd w wybrane przez Ciebie miejsce,
💰 natychmiastowa płatność gotówką,
📝 pełna obsługa formalności – Ty tylko podpisujesz umowę.

Z nami nie ma ukrytych kosztów ani niejasnych warunków.
W Skup Aut 24h/7 stawiamy na uczciwość, przejrzystość i zadowolenie klienta – bo Twój spokój jest dla nas najważniejszy.`}
        </div>
      </section>

      <Gap size="xl" />

      <section>
        <h2 className="text-2xl font-bold">Jakie auta skupujemy?</h2>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-6 items-start">
          <div className="sm:col-span-2">
            <p className="text-base leading-relaxed" style={{ whiteSpace: "pre-line" }}>
{`W Skup Aut 24h/7 kupujemy samochody wszystkich marek i modeli, niezależnie od ich wieku czy stanu technicznego. Nie ma dla nas znaczenia, czy Twój pojazd jest sprawny, czy wymaga naprawy – zawsze otrzymasz uczciwą wycenę i szybką gotówkę.`}
            </p>
          </div>
          <div className="sm:col-span-1">
            <Image src="/2.1.png" width={300} height={200} alt="Zdjęcie 2 (300×200)" className="rounded-md" />
          </div>
        </div>
      </section>

      <Gap size="xl" />

      <section>
        <div className="grid grid-cols-1 sm:grid-cols-3">
          <div className="sm:col-span-2">
            <div className="text-base leading-relaxed" style={{ whiteSpace: "pre-line" }}>
{`Samochody osobowe – zarówno w pełni sprawne, jak i wymagające napraw.
Auta uszkodzone, powypadkowe i niesprawne – również te po kolizjach lub z uszkodzonym silnikiem.
Pojazdy bez ważnego OC lub przeglądu technicznego – odbierzemy je bez dodatkowych kosztów.
Samochody firmowe i flotowe – odbiór aut z firm, leasingów i działalności gospodarczych.
Auta dostawcze, terenowe i busy – niezależnie od stanu technicznego.
Starsze modele przeznaczone do kasacji lub złomowania.
Nowsze samochody w bardzo dobrym stanie – oferujemy konkurencyjne stawki i natychmiastową płatność.`}
            </div>
          </div>
        </div>
      </section>


      <Gap size="xl" />

      <section className="w-full">
        <p className="mx-auto max-w-3xl text-center text-base md:text-lg leading-relaxed">
          Niezależnie od tego, jakie auto chcesz sprzedać – znajdziemy dla niego uczciwą ofertę. Skontaktuj się z nami i
          przekonaj się, że sprzedaż samochodu może być prosta i bezproblemowa.
        </p>
      </section>

      <Gap size="lg" />
      <SocialBar />
    </main>
  );
}

/* ===== Wspólny TopBarSticky – z hamburgerem ===== */
function TopBarSticky() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 header-blur">
      <div className="flex items-center justify-between py-4">
        <div className="flex items-center gap-4">
          <Logo size={42} />
          <span className="text-lg font-semibold tracking-wide">SKUP AUT 24H/7</span>
        </div>
        <nav className="hidden md:flex items-center gap-7">
          <a href="/#page-0" className="text-base hover:text-[color:var(--color-brand)]">O Nas</a>
          <a href="/jakie-auta-kupujemy" className="text-base hover:text-[color:var(--color-brand)]">Jakie auta kupujemy?</a>
          <a href="/obszar-dzialania" className="text-base hover:text-[color:var(--color-brand)]">Obszar Działania</a>
          <a href="/formularz" className="text-base hover:text-[color:var(--color-brand)]">Formularz</a>
          <a href="/kontakt" className="text-base hover:text-[color:var(--color-brand)]">Kontakt</a>
          <a href={`tel:${PHONE}`} className="px-5 py-3 rounded-md bg-[color:var(--color-brand)] text-white text-base hover:bg-[color:var(--color-brand-dark)] border-2 border-[color:var(--yellow)]">Zadzwoń: {PHONE_FMT}</a>
        </nav>
        <button aria-label="Menu" className="md:hidden inline-flex items-center justify-center rounded border border-gray-300 px-4 py-3" onClick={() => setOpen(v => !v)}>☰</button>
      </div>
      {open && (
        <div className="md:hidden border-t border-gray-200">
          <div className="px-5 py-4 flex flex-col gap-4">
            <a href="/#page-0" onClick={() => setOpen(false)} className="text-lg">O Nas</a>
            <a href="/jakie-auta-kupujemy" onClick={() => setOpen(false)} className="text-lg">Jakie auta kupujemy?</a>
            <a href="/obszar-dzialania" onClick={() => setOpen(false)} className="text-lg">Obszar Działania</a>
            <a href="/formularz" onClick={() => setOpen(false)} className="text-lg">Formularz</a>
            <a href="/kontakt" onClick={() => setOpen(false)} className="text-lg">Kontakt</a>
            <a href={`tel:${PHONE}`} onClick={() => setOpen(false)} className="mt-3 px-5 py-3 rounded-md bg-[color:var(--color-brand)] text-white text-center border-2 border-[color:var(--yellow)]">Zadzwoń: {PHONE_FMT}</a>
          </div>
        </div>
      )}
    </header>
  );
}

function Logo({ size = 32 }: { size?: number }) {
  const [src, setSrc] = useState("/Icon.png");
  useEffect(() => {}, []);
  return <img src={src} width={size} height={size} alt="Skup Aut 24h/7" className="rounded-full object-cover" onError={() => setSrc("/favicon.jpg")} />;
}

function Gap({ size = "md" }: { size?: "sm" | "md" | "lg" | "xl" }) {
  const map = { sm: "h-4", md: "h-6", lg: "h-8", xl: "h-12" };
  return <div className={map[size]} aria-hidden="true" />;
}

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
      <div className="absolute inset-0 flex items-center justify-center text-xs text-gray-600">
        {label} — {w}×{h}px
      </div>
    </div>
  );
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

function SocialBar() {
  const items = [
    { name: "Facebook", href: "https://www.facebook.com/czewa.skup.aut", icon: FacebookIcon },
    { name: "WhatsApp", href: "https://wa.me/48792905099", icon: WhatsAppIcon },
    { name: "Gmail", href: "https://mail.google.com/mail/?view=cm&fs=1&to=skupaut24hcz@gmail.com", icon: GmailIcon },
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
