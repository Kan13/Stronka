"use client";

/**
 * app/obszar-dzialania/page.tsx
 * - TopBarSticky: sticky top-0 z-50 z hamburgerem (mobile) i pełnym menu (desktop).
 * - Tytuł: „Działamy w całym regionie” – wyśrodkowany, powiększony, podkreślony dekoracją tekstu.
 * - Wyśrodkowany blok 3 linie (pre-line).
 * - Sekcje opisowe 3/3: Śląsk, Opolskie, Świętokrzyskie, Łódzkie, Małopolska.
 * - Końcowy akapit + SocialBar.
 */

import { useEffect, useState } from "react";
import TopBarSticky from '../components/TopBarSticky';
import SocialBar from '../components/SocialBar';
import Gap from '../components/Gap';

const PHONE = "792905099";
const PHONE_FMT = "792 - 905 - 099";
const EMAIL = "skupaut24hcz@gmail.com"; 

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8 font-sans">
      {/* (opcjonalna) kotwica tej podstrony */}
      <div id="page-3" className="sr-only" />

      <TopBarSticky />

      <Gap size="xl" />

      <h1 className="text-4xl md:text-5xl font-extrabold text-center underline underline-offset-6 decoration-[#fff000] decoration-4">
        Działamy w całym regionie
      </h1>

      <Gap size="xl" />
      <Gap size="xl" />


      {/* Wyśrodkowany blok 3 linie */}
      <section className="w-full">
        <div
          className="mx-auto max-w-5xl text-center text-base md:text-lg leading-relaxed"
          style={{ whiteSpace: "pre-line" }}
        >
{`Szukasz miejsca, gdzie sprzedasz samochód szybko i bez formalności?
Wybierz Skup Aut 24h/7 – działamy na terenie województw śląskiego, małopolskiego, świętokrzyskiego, łódzkiego i opolskiego.
Oferujemy skup aut za gotówkę, darmowy dojazd do klienta i uczciwą wycenę już podczas pierwszego kontaktu.`}
        </div>
      </section>

      <Gap size="xl" />
      <Gap size="xl" />

      {/* Śląsk */}
      <section className="w-full">
        <h2 className="text-2xl font-bold">Skup aut Śląsk</h2>
        <div className="mt-3 w-full text-base leading-relaxed" style={{ whiteSpace: "pre-line" }}>
{`Jeśli szukasz sprawdzonego skupu aut na Śląsku, jesteś we właściwym miejscu!
W Skup Aut 24h/7 oferujemy szybką i bezpieczną sprzedaż samochodu za gotówkę, niezależnie od jego marki, wieku czy stanu technicznego.

Obsługujemy całe województwo śląskie, w tym m.in.:
Katowice, Częstochowę, Gliwice, Zabrze, Bytom, Rudę Śląską, Sosnowiec, Dąbrowę Górniczą, Bielsko-Białą, Tychy, Rybnik, Chorzów, Koniecpol, Myszków, Siewierz, Żarki Letnisko oraz wiele innych miejscowości w regionie.
Nieważne, czy Twój pojazd jest sprawny, uszkodzony, powypadkowy czy bez przeglądu – skupimy go szybko, uczciwie i bez zbędnych formalności. Dojedziemy pod wskazany adres, dokonamy wyceny na miejscu i zapłacimy gotówką od ręki.`}
        </div>
      </section>

      <Gap size="xl" />

      {/* Opolskie */}
      <section className="w-full">
        <h2 className="text-2xl font-bold">Skup aut Opolskie</h2>
        <div className="mt-3 w-full text-base leading-relaxed" style={{ whiteSpace: "pre-line" }}>
{`W województwie opolskim działamy m.in. w: Opolu, Kędzierzynie-Koźlu, Nysie, Brzegu, Kluczborku, Prudniku, Strzelcach Opolskich.
Każdy samochód traktujemy indywidualnie, gwarantując rzetelną i uczciwą wycenę.`}
        </div>
      </section>

      <Gap size="xl" />

      {/* Opolskie */}
      <section className="w-full">
        <h2 className="text-2xl font-bold">Skup aut Opolskie</h2>
        <div className="mt-3 w-full text-base leading-relaxed" style={{ whiteSpace: "pre-line" }}>
{`W województwie opolskim działamy m.in. w: Opolu, Kędzierzynie-Koźlu, Nysie, Brzegu, Kluczborku, Prudniku, Strzelcach Opolskich.
Każdy samochód traktujemy indywidualnie, gwarantując rzetelną i uczciwą wycenę.`}
        </div>
      </section>

      <Gap size="xl" />

      {/* Świętokrzyskie */}
      <section className="w-full">
        <h2 className="text-2xl font-bold">Skup aut Świętokrzyskie</h2>
        <div className="mt-3 w-full text-base leading-relaxed" style={{ whiteSpace: "pre-line" }}>
{`W województwie świętokrzyskim działamy m.in. w: Kielcach, Ostrowcu Świętokrzyskim, Starachowicach, Skarżysku-Kamiennej, , Busku-Zdroju, Końskich, Jędrzejowie, Włoszczowie.
Zapewniamy pełną obsługę formalności oraz błyskawiczną płatność.`}
        </div>
      </section>

      <Gap size="xl" />

      {/* Łódzkie */}
      <section className="w-full">
        <h2 className="text-2xl font-bold">Skup aut Łódzkie</h2>
        <div className="mt-3 w-full text-base leading-relaxed" style={{ whiteSpace: "pre-line" }}>
{`W Łódzkiem obsługujemy m.in.: Łódź, Piotrków Trybunalski, Pabianice, Tomaszów Mazowiecki, Zgierz, Bełchatów, Skierniewice, Radomsko, Kamieńsku, Przedborzu, Wieluniu, Pajęcznie .
Skupujemy samochody w każdym stanie – od zadbanych modeli po auta uszkodzone.`}
        </div>
      </section>

      <Gap size="xl" />

      {/* Małopolska */}
      <section className="w-full">
        <h2 className="text-2xl font-bold">Skup aut Małopolska</h2>
        <div className="mt-3 w-full text-base leading-relaxed" style={{ whiteSpace: "pre-line" }}>
{`W Małopolsce dojeżdżamy m.in. do: Krakowa, Olkusza, Tarnowa, Nowego Sącza, Oświęcimia, Wieliczki, Chrzanowa, Bochni.
Odkupujemy auta osobowe, dostawcze, powypadkowe i niesprawne – wszystko w atrakcyjnych cenach.`}
        </div>
      </section>

      <Gap size="xl" />
      <Gap size="xl" />

      {/* Finał */}
      <section className="w-full">
        <p className="mx-auto max-w-5xl text-center text-base md:text-sm leading-relaxed">
          Skup Aut 24h/7 to szybka, wygodna i bezpieczna sprzedaż samochodu na terenie Śląska, Małopolski, Świętokrzyskiego, Łódzkiego i Opolskiego. 
          
        </p>
        <p className="mx-auto max-w-5xl text-center text-base md:text-sm leading-relaxed">
          Skontaktuj się z nami – odbierzemy Twoje auto, gdziekolwiek się znajdujesz!
        </p>
      </section>

      <Gap size="lg" />

      <SocialBar />
    </main>
  );
}
