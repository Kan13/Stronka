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
import TopBarSticky from './components/TopBarSticky';
import SocialBar from './components/SocialBar';
import Gap from './components/Gap';

const PHONE = "792905099";
const PHONE_FMT = "792 - 905 - 099";
const EMAIL = "skupaut24hcz@gmail.com";

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
        <Image src="/LOGO.png" width={300} height={160} alt="Zdjęcie wyśrodkowane 200×200" className="rounded-full" />
      </section>

      {/* 2) Powitanie */}
      <CenteredWelcomeText />
      <Gap size="xl" />

      {/* 4) Kim jesteśmy */}
      <AboutUsTwoThirds />
      <Gap size="xl" />

      {/* 5) Co oferujemy – pełna szerokość */}
      <OfferFullWidth />
      <Gap size="xl" />
      <Gap size="xl" />

      {/* 6) Jak wygląda proces sprzedaży ? – center + pasek */}
      <UnderlineHeading
        text="Jak wygląda proces sprzedaży ?"
        align="center"
        barClass="h-[4px] w-[540px] bg-[#FFFF00]"
      />
      <Gap size="lg" />

      {/* 7) Intro procesu – center */}
      <CenteredProcessIntro />
      <Gap size="xl" />
      <Gap size="xl" />
      <Gap size="xl" />

      {/* 8) Jak wygląda sprzedaż auta krok po kroku? – lewo + podkreślenie dekoracją */}
      <HeadingLeftUnderlined
        text="Jak wygląda sprzedaż auta krok po kroku?"
        className="decoration-[color:var(--color-brand)] decoration-4"
      />
      <Gap size="xl" />
      <Gap size="xl" />

      {/* 9) Kroki z obrazkami 300×200 */}
      <StepsWithImages />

      <Gap size="xl" />
      <Gap size="xl" />
      <FinalCenteredCTA />

      <Gap size="lg" />
      <SocialBar />
    </main>
  );
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
  return (
    <section className="w-full">
      <div className="mx-auto max-w-3xl text-center text-base md:text-lg leading-relaxed">
        <p>Witamy w Skup Aut 24h/7 - partner, na którego możesz liczyć zawsze i wszędzie!</p>
        <p className="text-xs md:text-sm">Działamy 24/7 na terenie Śląska, Łódzkiego, Opolskiego i Świętokrzyskiego, oferując szybki i bezpieczny skup aut za gotówkę!</p>
      </div>
      
      <section className="w-full flex items-center justify-center">
        <Image src="/1.1.png" width={400} height={200} alt="Zdjęcie 1.1" />
      </section>
    </section>
  );
}

function AboutUsTwoThirds() {
  const text = `

Jesteśmy profesjonalną firmą oferującą skup aut na terenie województwa śląskiego, łódzkiego, opolskiego, małopolskiego oraz świętokrzyskiego. \nSkupujemy samochody w każdym stanie – sprawne, uszkodzone, powypadkowe i bez aktualnego przeglądu. Naszym celem jest szybka, bezpieczna i uczciwa transakcja, dzięki której sprzedaż auta staje się prosta i bez stresu. Działamy 24 godziny na dobę, 7 dni w tygodniu, a nasz zespół to pasjonaci motoryzacji, którzy zawsze stawiają na indywidualne podejście do klienta oraz najwyższy standard obsługi.
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
          <Image src="/1.5.png" width={288} height={288} alt="Zdjęcie (360×360)" className="rounded-full" />
        </div>
      </div>
    </section>
  );
}

function OfferFullWidth() {
  return (
    <section id="co-oferujemy" className="w-full">
      <h2 className="text-2xl font-bold">Co oferujemy?</h2>
      <div className="mt-4 w-full text-base md:text-lg leading-relaxed">
        <p>Sprzedaż auta może być szybka, prosta i bez stresu — właśnie na tym polega nasz profesjonalny skup samochodów!</p>
        <p>Zobacz, dlaczego klienci z województwa śląskiego, łódzkiego, opolskiego i świętokrzyskiego wybierają właśnie nas:</p>
        <ul className="list-disc list-inside mt-4 space-y-4">
          <li>
            <strong>Błyskawiczna wycena</strong><br />
            Już podczas pierwszego kontaktu otrzymasz rzetelną i uczciwą ofertę — bez ukrytych kosztów i zbędnych formalności.
          </li>
          <li>
            <strong>Darmowy dojazd do klienta</strong><br />
            Dojeżdżamy na terenie całego Śląska, Łódzkiego, Opolskiego, Małopolskiego i Świętokrzyskiego, całkowicie za darmo. Odbiór auta? Bez żadnych dopłat!
          </li>
          <li>
            <strong>Płatność od ręki – gotówka</strong><br />
            Transakcja przebiega natychmiast. Pieniądze otrzymujesz od razu.
          </li>
          <li>
            <strong>Zero formalności po Twojej stronie</strong><br />
            Wypełnimy dokumenty, przygotujemy umowę i dopilnujemy każdego szczegółu. Ty tylko podpisujesz i odbierasz zapłatę.
          </li>
          <li>
            <strong>Bezpieczeństwo i wygoda</strong><br />
            Cały proces przebiega szybko, bezpiecznie i transparentnie. Odbieramy auto z miejsca, które Ci odpowiada — bez stresu i ryzyka.
          </li>
        </ul>
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
  return (
    <section className="w-full">
      <div className="mx-auto max-w-5xl text-center text-base md:text-lg leading-relaxed">
        <p>
          Z nami pozbędziesz się auta szybko, bez stresu i z natychmiastową zapłatą!
        </p>
        <p>
          W Skup Aut 24h/7 dbamy o to, by cały proces przebiegał sprawnie, uczciwie i z pełnym komfortem dla klienta.
        </p>
        <p>
          Działamy na terenie województwa śląskiego, łódzkiego, opolskiego, małopolskiego i świętokrzyskiego, oferując skup aut w każdym stanie — od sprawnych po powypadkowe.
        </p>
      </div>
    </section>
  );
}

function StepsWithImages() {
  const steps = [
    {
      title: "1. Skontaktuj się z nami",
      
      body:
        "\nZadzwoń lub napisz o dowolnej porze – działamy 24 godziny na dobę, 7 dni w tygodniu.\nOdpowiemy natychmiast i rozpoczniemy proces wyceny.",
    },
    {
      title: "2. Błyskawiczna wycena auta",
      body:
        "\nPodaj nam kilka podstawowych informacji o samochodzie, a my przygotujemy rzetelną\ni uczciwą ofertę już podczas pierwszego kontaktu.",
    },
    {
      title: "3. Ustalamy szczegóły odbioru",
      body:
        "\nTy wybierasz miejsce i czas, a my dojeżdżamy do Ciebie za darmo\n— na terenie całego Śląska, Łódzkiego, Opolskiego i Świętokrzyskiego.",
    },
    {
      title: "4. Oględziny i finalizacja transakcji",
      body:
        "\nNa miejscu potwierdzamy stan pojazdu i od razu przygotowujemy dokumenty.\nZero stresu, zero zbędnych formalności.",
    },
    {
      title: "5. Płatność od ręki",
      body:
        "\nGotówka – pieniądze otrzymujesz natychmiast po podpisaniu umowy.\nBez ukrytych kosztów, bez czekania, bez ryzyka.",
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
                <Image src={imageSrc} width={240} height={160} alt={`Obrazek do kroku ${i + 1}`} className="rounded-full object-cover" />
              ) : (
                <div
                  className="relative border border-gray-300 rounded-md bg-[length:12px_12px]"
                  style={{
                    width: `100px`,
                    height: `50px`,
                    backgroundImage:
                      "linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(180deg, rgba(0,0,0,0.04) 1px, transparent 1px)",
                  }}
                  aria-label={`Obrazek do kroku ${i + 1}`}
                >
                  <div className="absolute inset-0 flex items-center justify-center text-xs text-gray-600">
                    Zdjęcie {i + 1} (100×50)
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
