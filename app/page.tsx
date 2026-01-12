"use client";

/**
 * app/page.tsx – wersja mobilna i desktop:
 * - TopBarSticky: sticky top-0 z hamburgerem (mobile) i pełnym menu (desktop).
 * - Placeholdery obrazów „fluid”: dopasowanie do ekranu, bez poziomego scrolla (max-w-full, w-[min(…)] + aspect).
 * - Zachowane sekcje: 200×200 center, powitanie, 1200×400 (responsywnie, bez przewijania), Kim jesteśmy, Co oferujemy,
 *   nagłówki procesu, kroki 1..5 oraz końcówka + SocialBar.
 */

import { useEffect, useState } from "react";
import Image from "next/image";

const PHONE = "792905099";
const PHONE_FMT = "792 - 905 - 099";
const EMAIL = "kontakt@example.com";

/* Finałowy wyśrodkowany akapit CTA */
function FinalCenteredCTA() {
  const text =
    "Zapraszamy do skorzystania z usług Skupu Aut 24h/7 — odkryj, że sprzedaż samochodu może być szybka, prosta i bezproblemowa. Skontaktuj się z nami i przekonaj się sam — jesteśmy dostępni dla Ciebie zawsze i wszędzie.";
  return (
    <section className="w-full">
      <p className="mx-auto max-w-3xl text-center text-base md:text-lg leading-relaxed">
        {text}
      </p>
    </section>
  );
}


export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8 font-sans">
      <div id="page-0" className="sr-only" />

      <TopBarSticky />

      {/* 1) Obraz 200×200 – center (stały rozmiar mieści się na mobile) */}
      <section className="w-full flex items-center justify-center bg-white rounded-md p-4">
        <Image src="/LOGO.png" width={200} height={200} alt="Zdjęcie wyśrodkowane 200×200" className="rounded-md" />
      </section>
      <Gap size="lg" />

      {/* 2) Powitanie */}
      <CenteredWelcomeText />
      <Gap size="xl" />

      {/* 4) Kim jesteśmy */}
      <AboutUsTwoThirds />
      <Gap size="xl" />

      {/* 5) Co oferujemy – pełna szerokość */}
      <OfferFullWidth />
      <Gap size="xl" />

      {/* 6) Jak wygląda proces sprzedaży ? – center + pasek */}
      <UnderlineHeading
        text="Jak wygląda proces sprzedaży ?"
        align="center"
        barClass="h-[4px] w-[220px] bg-[color:var(--color-brand)]"
      />
      <Gap size="lg" />

      {/* 7) Intro procesu – center */}
      <CenteredProcessIntro />
      <Gap size="xl" />

      {/* 8) Jak wygląda sprzedaż auta krok po kroku? – lewo + podkreślenie dekoracją */}
      <HeadingLeftUnderlined
        text="Jak wygląda sprzedaż auta krok po kroku?"
        className="underline underline-offset-4 decoration-[color:var(--color-brand)] decoration-4"
      />
      <Gap size="md" />

      {/* 9) Kroki z obrazkami 300×200 */}
      <StepsWithImages />

      <Gap size="xl" />
      <FinalCenteredCTA />

      <Gap size="lg" />
      <SocialBar />
    </main>
  );
}

/* ===== TopBarSticky – z hamburgerem na mobile ===== */
function TopBarSticky() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 header-blur">
      <div className="flex items-center justify-between py-3">
        <div className="flex items-center gap-3">
          <Logo size={32} />
          <span className="text-base font-semibold tracking-wide">SKUP AUT 24H/7</span>
        </div>

        {/* Desktop menu */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="/#page-0" className="text-sm hover:text-[color:var(--color-brand)]">O Nas</a>
          <a href="/jakie-auta-kupujemy" className="text-sm hover:text-[color:var(--color-brand)]">Jakie auta kupujemy?</a>
          <a href="/obszar-dzialania" className="text-sm hover:text-[color:var(--color-brand)]">Obszar Działania</a>
          <a href="/formularz" className="text-sm hover:text-[color:var(--color-brand)]">Formularz</a>
          <a href="/kontakt" className="text-sm hover:text-[color:var(--color-brand)]">Kontakt</a>
          <a
            href={`tel:${PHONE}`}
            className="px-4 py-2 rounded-md bg-[color:var(--color-brand)] text-white text-sm hover:bg-[color:var(--color-brand-dark)]"
          >
            Zadzwoń: {PHONE_FMT}
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          aria-label="Menu"
          className="md:hidden inline-flex items-center justify-center rounded border border-gray-300 px-3 py-2"
          onClick={() => setOpen((v) => !v)}
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
            <a
              href={`tel:${PHONE}`}
              onClick={() => setOpen(false)}
              className="mt-2 px-4 py-2 rounded-md bg-[color:var(--color-brand)] text-white text-center"
            >
              Zadzwoń: {PHONE_FMT}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

/* Logo z fallbackiem do /favicon.jpg */
function Logo({ size = 32 }: { size?: number }) {
  const [src, setSrc] = useState("/icon.png");
  useEffect(() => {}, []);
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

/* Proste odstępy */
function Gap({ size = "md" }: { size?: "sm" | "md" | "lg" | "xl" }) {
  const map = { sm: "h-4", md: "h-6", lg: "h-8", xl: "h-12" };
  return <div className={map[size]} aria-hidden="true" />;
}

/* Placeholder stały – bezpieczny dla małych wymiarów (np. 200×200) */
function SectionCenteredImageFixed({ w, h, label }: { w: number; h: number; label: string }) {
  return (
    <section className="w-full flex items-center justify-center">
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
    </section>
  );
}

/* Placeholder „fluid” – dopasowuje szerokość do ekranu, zachowuje ratio targetW:targetH.
   Technika: maks. szerokość 100% kontenera, obliczona szerokość min(targetW, 100vw-32px), wysokość z proporcji. */
function SectionCenteredImageFluid({
  targetW,
  targetH,
  label,
  borderPx = 1,
}: {
  targetW: number;
  targetH: number;
  label: string;
  borderPx?: number;
}) {
  const ratio = targetH / targetW; // np. 400/1200 = 0.333...
  return (
    <section className="w-full">
      <div className="w-full flex items-center justify-center">
        <div
          className="relative rounded-md border border-gray-300"
          style={{
            // min(ustalona szerokość docelowa, szerokość widoku minus padding kontenera ~32px)
            width: `min(${targetW}px, calc(100vw - 32px))`,
            height: `calc(min(${targetW}px, calc(100vw - 32px)) * ${ratio})`,
            borderWidth: `${borderPx}px`,
            backgroundImage:
              "linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(180deg, rgba(0,0,0,0.04) 1px, transparent 1px)",
            backgroundSize: "12px 12px",
          }}
          aria-label={label}
        >
          <div className="absolute inset-0 flex items-center justify-center text-xs text-gray-600">
            {label}
          </div>
        </div>
      </div>
    </section>
  );
}

/* Teksty i sekcje – jak wcześniej */
function CenteredWelcomeText() {
  const text = `
Witamy w Skup Aut 24h/7 – partner, na którego możesz liczyć zawsze i wszędzie!
Działamy 24/7 na terenie Śląska, Łódzkiego, Opolskiego i Świętokrzyskiego, oferując szybki i bezpieczny skup aut za gotówkę.
`.trim();
  return (
    <section className="w-full">
      <div className="mx-auto max-w-3xl text-center text-base md:text-lg leading-relaxed" style={{ whiteSpace: "pre-line" }}>
        {text}
      </div>
    </section>
  );
}

function AboutUsTwoThirds() {
  const text = `
Kim jesteśmy?

Jesteśmy profesjonalną firmą oferującą skup aut na terenie województwa śląskiego, łódzkiego, opolskiego, małopolskiego oraz świętokrzyskiego. Skupujemy samochody w każdym stanie – sprawne, uszkodzone, powypadkowe i bez aktualnego przeglądu.
Naszym celem jest szybka, bezpieczna i uczciwa transakcja, dzięki której sprzedaż auta staje się prosta i bez stresu.
Działamy 24 godziny na dobę, 7 dni w tygodniu, a nasz zespół to pasjonaci motoryzacji, którzy zawsze stawiają na indywidualne podejście do klienta oraz najwyższy standard obsługi.
`.trim();

  return (
    <section id="kim-jestesmy">
      <h2 className="text-2xl font-bold">Kim jesteśmy?</h2>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-6 items-start">
        <div className="sm:col-span-2">
          <div className="text-base leading-relaxed" style={{ whiteSpace: "pre-line" }}>
            {text}
          </div>
        </div>
        <div className="sm:col-span-1">
          <Image src="/1.5.png" width={360} height={360} alt="Zdjęcie (360×360)" className="rounded-md" />
        </div>
      </div>
    </section>
  );
}

function OfferFullWidth() {
  const text = `
Co oferujemy ?

Sprzedaż auta może być szybka, prosta i bez stresu — właśnie na tym polega nasz profesjonalny skup samochodów!
Zobacz, dlaczego klienci z województwa śląskiego, łódzkiego, opolskiego i świętokrzyskiego wybierają właśnie nas:

🚗 Błyskawiczna wycena
Już podczas pierwszego kontaktu otrzymasz rzetelną i uczciwą ofertę — bez ukrytych kosztów i zbędnych formalności.

📍 Darmowy dojazd do klienta
Dojeżdżamy na terenie całego Śląska, Łódzkiego, Opolskiego, Małopolskiego i Świętokrzyskiego, całkowicie za darmo. Odbiór auta? Bez żadnych dopłat!

💰 Płatność od ręki – gotówka
Transakcja przebiega natychmiast. Pieniądze otrzymujesz od razu.

📝 Zero formalności po Twojej stronie
Wypełnimy dokumenty, przygotujemy umowę i dopilnujemy każdego szczegółu. Ty tylko podpisujesz i odbierasz zapłatę.

🔒 Bezpieczeństwo i wygoda
Cały proces przebiega szybko, bezpiecznie i transparentnie. Odbieramy auto z miejsca, które Ci odpowiada — bez stresu i ryzyka.
`.trim();

  return (
    <section id="co-oferujemy" className="w-full">
      <h2 className="text-2xl font-bold">Co oferujemy?</h2>
      <div className="mt-4 w-full text-base md:text-lg leading-relaxed" style={{ whiteSpace: "pre-line" }}>
        {text}
      </div>
    </section>
  );
}

function UnderlineHeading({
  text,
  align = "center",
  barClass = "h-[4px] w-[200px] bg-[color:var(--color-brand)]",
}: {
  text: string;
  align?: "left" | "center" | "right";
  barClass?: string;
}) {
  const alignClass =
    align === "right" ? "items-end text-right" : align === "left" ? "items-start text-left" : "items-center text-center";
  return (
    <div className={`flex flex-col ${alignClass}`}>
      <h2 className="text-3xl md:text-4xl font-extrabold">{text}</h2>
      <div className={`mt-2 rounded ${barClass}`} />
    </div>
  );
}

function HeadingLeftUnderlined({ text, className = "" }: { text: string; className?: string }) {
  return <h2 className={`text-3xl md:text-4xl font-extrabold text-left ${className}`}>{text}</h2>;
}

function CenteredProcessIntro() {
  const text = `
Z nami pozbędziesz się auta szybko, bez stresu i z natychmiastową zapłatą!
W Skup Aut 24h/7 dbamy o to, by cały proces przebiegał sprawnie, uczciwie i z pełnym komfortem dla klienta.
Działamy na terenie województwa śląskiego, łódzkiego, opolskiego, małopolskiego i świętokrzyskiego, oferując skup aut w każdym stanie — od sprawnych po powypadkowe.
`.trim();
  return (
    <section className="w-full">
      <div className="mx-auto max-w-3xl text-center text-base md:text-lg leading-relaxed" style={{ whiteSpace: "pre-line" }}>
        {text}
      </div>
    </section>
  );
}

function StepsWithImages() {
  const steps = [
    {
      title: "1. Skontaktuj się z nami",
      body:
        "Zadzwoń lub napisz o dowolnej porze – działamy 24 godziny na dobę, 7 dni w tygodniu.\nOdpowiemy natychmiast i rozpoczniemy proces wyceny.",
    },
    {
      title: "2. Błyskawiczna wycena auta",
      body:
        "Podaj nam kilka podstawowych informacji o samochodzie, a my przygotujemy rzetelną\ni uczciwą ofertę już podczas pierwszego kontaktu.",
    },
    {
      title: "3. Ustalamy szczegóły odbioru",
      body:
        "Ty wybierasz miejsce i czas, a my dojeżdżamy do Ciebie za darmo\n— na terenie całego Śląska, Łódzkiego, Opolskiego i Świętokrzyskiego.",
    },
    {
      title: "4. Oględziny i finalizacja transakcji",
      body:
        "Na miejscu potwierdzamy stan pojazdu i od razu przygotowujemy dokumenty.\nZero stresu, zero zbędnych formalności.",
    },
    {
      title: "5. Płatność od ręki",
      body:
        "Gotówka – pieniądze otrzymujesz natychmiast po podpisaniu umowy.\nBez ukrytych kosztów, bez czekania, bez ryzyka.",
    },
  ];

  return (
    <section id="kroki" className="space-y-8">
      {steps.map((s, i) => {
        const imageSrc = i === 0 ? "/1.2.png" : i === 1 ? "/4.jpg" : i === 2 ? "/1.3.png" : i === 3 ? "/4.1.jpg" : i === 4 ? "/1.4.png" : null;
        return (
          <div key={s.title} className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-start">
            <div className="sm:col-span-2">
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 whitespace-pre-line leading-relaxed">{s.body}</p>
            </div>
            <div className="sm:col-span-1 flex sm:justify-end">
              {imageSrc ? (
                <Image src={imageSrc} width={300} height={200} alt={`Obrazek do kroku ${i + 1}`} className="rounded-full object-cover" />
              ) : (
                <div
                  className="relative border border-gray-300 rounded-md bg-[length:12px_12px]"
                  style={{
                    width: `300px`,
                    height: `200px`,
                    backgroundImage:
                      "linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(180deg, rgba(0,0,0,0.04) 1px, transparent 1px)",
                  }}
                  aria-label={`Obrazek do kroku ${i + 1}`}
                >
                  <div className="absolute inset-0 flex items-center justify-center text-xs text-gray-600">
                    Zdjęcie {i + 1} (300×200)
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </section>
  );
}

/* Pasek Social */
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
