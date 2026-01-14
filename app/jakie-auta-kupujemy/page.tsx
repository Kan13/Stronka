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
      <div id="page-2" className="sr-only" />
      <TopBarSticky />

      <Gap size="xl" />
      <Gap size="xl" />

      <h1 className="text-4xl md:text-2xl font-bold text-center" style={{ color: '#FFFF00' }}>
        Witamy na stronie Skup Aut 24h/7
      </h1>
      <h1 className="text-4xl md:text-2xl font-bold text-center" style={{ color: '#FFFF00' }}>
        partnera, na którego możesz liczyć o każdej porze !!
      </h1>

      <Gap size="xl" />
      <Gap size="xl" />
      <Gap size="xl" />

      <h1 className="text-4xl md:text-5xl font-extrabold text-center underline underline-offset-6 decoration-[color:var(--color-brand)] decoration-4">
        Jakie auta kupujemy ?
      </h1>

      <Gap size="xl" />

      <section className="w-full">
        <div className="w-full text-base md:text-lg leading-relaxed" style={{ whiteSpace: "pre-line" }}>
{`W Skup Aut 24h/7 wierzymy, że każdy samochód ma swoją wartość — niezależnie od jego wieku, przebiegu czy stanu technicznego.\n Dlatego kupujemy auta w każdym stanie: sprawne, uszkodzone, powypadkowe, bez przeglądu, a nawet niesprawne do jazdy.
Działamy na terenie województwa śląskiego, łódzkiego, opolskiego,małopolskiego i świętokrzyskiego, oferując szybką i bezpieczną sprzedaż auta bez formalności. Wystarczy jeden kontakt – my zajmujemy się resztą.

Naszą misją jest maksymalne uproszczenie procesu sprzedaży:

- bezpłatna wycena 
– poznaj realną wartość auta już podczas rozmowy,
- darmowy dojazd w wybrane przez Ciebie miejsce,
- natychmiastowa płatność gotówką,
- pełna obsługa formalności 
– Ty tylko podpisujesz umowę.

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
{`W Skup Aut 24h/7 kupujemy samochody wszystkich marek i modeli, niezależnie od ich wieku czy stanu technicznego. Nie ma dla nas znaczenia, czy Twój pojazd jest sprawny, czy wymaga naprawy – zawsze otrzymasz uczciwą wycenę i szybką gotówkę.
\n–Samochody osobowe
– zarówno w pełni sprawne, jak i wymagające napraw.
– Auta uszkodzone, powypadkowe i niesprawne 
– również te po kolizjach lub z uszkodzonym silnikiem.
– Pojazdy bez ważnego OC lub przeglądu technicznego 
– odbierzemy je bez dodatkowych kosztów.
– Samochody firmowe i flotowe 
– odbiór aut z firm, leasingów i działalności gospodarczych.
– Auta dostawcze, terenowe i busy 
– niezależnie od stanu technicznego.
– Starsze modele przeznaczone do kasacji lub złomowania.
– Nowsze samochody w bardzo dobrym stanie \n- oferujemy konkurencyjne stawki i natychmiastową płatność.`}
            </p>
          </div>
          <div className="sm:col-span-1">
            <Image src="/2.1.png" width={300} height={200} alt="Zdjęcie 2 (300×200)" className="rounded-full" />
          </div>
        </div>
      </section>
      
      <Gap size="xl" />
      <Gap size="xl" />
      <Gap size="xl" />

      <section className="w-full">
        <p className="mx-auto max-w-full text-center text-base md:text-sm leading-relaxed">
          Niezależnie od tego, jakie auto chcesz sprzedać znajdziemy dla niego uczciwą ofertę. 
        </p>
        <p className="mx-auto max-w-full text-center text-base md:text-sm leading-relaxed"> 
          Skontaktuj się z nami i przekonaj się, że sprzedaż samochodu może być prosta i bezproblemowa.
        </p>
      </section>

      <Gap size="lg" />
      <SocialBar />
    </main>
  );
}
