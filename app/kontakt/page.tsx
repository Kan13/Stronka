"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import TopBarSticky from '../components/TopBarSticky';
import SocialBar from '../components/SocialBar';
import Gap from '../components/Gap';

const PHONE = "792905099";
const PHONE_FMT = "792 - 905 - 099";
const EMAIL = "skupaut24hcz@gmail.com";

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
            <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`} className="px-6 py-3 rounded-md border border-gray-300 hover:bg-gray-50">
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
      <div className="h-12" />

      {/* Trzy obrazy 200×200: lewa / środek / prawa */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        <div className="flex justify-start md:justify-center">
          <Image src="/3.0.png" width={180} height={200} alt="200×200 (lewa)" className="rounded-full" />
        </div>
        <div className="flex justify-center">
          <Image src="/3.1.png" width={200} height={200} alt="200×200 (środek)" className="rounded-full" />
        </div>
        <div className="flex justify-end md:justify-center">
          <Image src="/3.2.png" width={130} height={100} alt="200×200 (prawa)" className="rounded-full" />
        </div>
      </section>

      {/* Opisy 1/3 – WYŚRODKOWANE pod każdą kolumną */}
      <section className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="text-center">
          <h3 className="text-lg font-semibold" style={{ color: '#FFFF00' }}>Dostępność 24/7</h3>

          <p className="mt-1 leading-relaxed" style={{ whiteSpace: "pre-line" }}>
            {"działamy wtedy, gdy inni już\nzamykają drzwi."}
          </p>
        </div>
        <div className="text-center">
          <h3 className="text-lg font-semibold" style={{ color: '#FFFF00' }}>Profesjonalizm</h3>
          <p className="mt-1 leading-relaxed" style={{ whiteSpace: "pre-line" }}>
            {"doświadczenie, uczciwość\ni pełna transparentność na każdym etapie."}
          </p>
        </div>
        <div className="text-center">
          <h3 className="text-lg font-semibold" style={{ color: '#FFFF00' }}>Satysfakcja klienta</h3>
          <p className="mt-1 leading-relaxed" style={{ whiteSpace: "pre-line" }}>
            {"Twój zadowolony uśmiech to\nnasza najlepsza rekomendacja."}
          </p>
        </div>
      </section>

      {/* Przerwa */}
      <div className="h-15" />

      {/* Wyśrodkowany akapit 3/3 – CTA */}
      <section className="w-full">
        <p className="mx-auto max-w-5xl text-center text-base md:text-sm leading-relaxed">
          Zapraszamy do skorzystania z usług Skupu Aut 24h/7 — odkryj, że sprzedaż samochodu może być szybka, prosta i
          bezproblemowa.
        </p>
        <p className="mx-auto max-w-5xl text-center text-base md:text-sm leading-relaxed">
           Skontaktuj się z nami i przekonaj się sam — jesteśmy dostępni dla Ciebie zawsze i wszędzie.
        </p>
      </section>

      {/* --- KONIEC BLOKU NAD SOCIAL --- */}

      <div className="mt-12">
        <SocialBar />
      </div>
    </main>
  );
}
