import { Metadata } from 'next';
import TopBarSticky from '../components/TopBarSticky';
import Gap from '../components/Gap';
import SocialBar from '../components/SocialBar';

export const metadata: Metadata = {
  title: 'Skup aut Żarki Letnisko – Auto skup 24h, gotówka',
  description: 'Skup aut Żarki Letnisko 24h/7. Kupujemy auta w każdym stanie. Odbiór auta gratis, minimum formalności, gotówka od ręki.',
};

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8 font-sans">
      <TopBarSticky />

      <Gap size="lg" />

      <h1 className="text-3xl font-bold mb-6">Skup aut Żarki Letnisko</h1>
      <article className="prose prose-lg max-w-none">
        <p>Skup aut Żarki Letnisko to lokalna i sprawdzona usługa dla osób, które chcą sprzedać samochód bez czekania i zbędnych formalności. Odkupujemy auta w każdym stanie technicznym – zarówno sprawne, jak i uszkodzone, powypadkowe czy bez ważnego przeglądu. Działamy całodobowo, 7 dni w tygodniu, dlatego jesteśmy dostępni dokładnie wtedy, gdy nas potrzebujesz.</p>
        <p>Gwarantujemy uczciwą wycenę już przy pierwszym kontakcie oraz płatność gotówką od ręki. Zapewniamy darmowy dojazd na terenie Żarek Letniska i okolic, a odbiór pojazdu odbywa się szybko i bezpiecznie w miejscu wskazanym przez klienta. Całą dokumentację przygotowujemy na miejscu, dzięki czemu sprzedaż auta przebiega sprawnie i bez stresu.</p>
        <p>Jeśli interesuje Cię rzetelny skup aut w Żarkach Letnisku, skontaktuj się z nami telefonicznie lub skorzystaj z formularza kontaktowego, aby otrzymać szybką wycenę i sprzedać auto na dogodnych warunkach.</p>
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