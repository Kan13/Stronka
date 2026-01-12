import { Metadata } from 'next';
import TopBarSticky from '../components/TopBarSticky';
import SocialBar from '../components/SocialBar';
import Gap from '../components/Gap';

export const metadata: Metadata = {
  title: 'Skup aut Kędzierzyn-Koźle – Auto skup 24h, gotówka',
  description: 'Skup aut Kędzierzyn-Koźle 24h/7. Kupujemy auta sprawne i uszkodzone. Odbiór auta gratis, uczciwa wycena, gotówka.',
};

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8 font-sans">
      <TopBarSticky />

      <Gap size="lg" />

      <h1 className="text-3xl font-bold mb-6">Skup aut Kędzierzyn-Koźle</h1>
      <article className="prose prose-lg max-w-none">
        <p>Skup aut Kędzierzyn-Koźle to wygodne rozwiązanie dla kierowców, którzy chcą sprzedać samochód szybko i bez zbędnych formalności. Skupujemy auta w każdym stanie technicznym – sprawne, uszkodzone, powypadkowe oraz bez ważnego przeglądu. Jesteśmy dostępni 24 godziny na dobę, 7 dni w tygodniu, dlatego możesz liczyć na kontakt i realizację transakcji o każdej porze.</p>
        <p>Zapewniamy rzetelną wycenę już podczas pierwszej rozmowy oraz płatność gotówką od ręki. Oferujemy darmowy dojazd na terenie Kędzierzyna-Koźla i okolic, a odbiór pojazdu odbywa się w miejscu wskazanym przez klienta. Wszystkie formalności załatwiamy na miejscu, dbając o bezpieczeństwo, przejrzystość i komfort całego procesu.</p>
        <p>Jeśli szukasz sprawdzonego i uczciwego skupu aut w Kędzierzynie-Koźlu, skontaktuj się z nami telefonicznie lub skorzystaj z formularza kontaktowego, aby szybko otrzymać wycenę i sprzedać auto bez stresu.</p>
      </article>

      <Gap size="lg" />

      <section className="w-full">
        <p className="mx-auto max-w-3xl text-center text-base md:text-lg leading-relaxed">
          Zapraszamy do skorzystania z usług Skupu Aut 24h/7 — odkryj, że sprzedaż samochodu może być szybka, prosta i bezproblemowa. Skontaktuj się z nami i przekonaj się sam — jesteśmy dostępni dla Ciebie zawsze i wszędzie.
        </p>
      </section>

      <Gap size="lg" />

      <SocialBar />
    </main>
  );
}