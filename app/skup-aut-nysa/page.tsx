import { Metadata } from 'next';
import TopBarSticky from '../components/TopBarSticky';
import Gap from '../components/Gap';
import SocialBar from '../components/SocialBar';

export const metadata: Metadata = {
  title: 'Skup aut Nysa 24h/7 – Skup samochodów, gotówka od ręki',
  description: 'Skup aut Nysa 24h/7. Skupujemy auta sprawne i uszkodzone. Darmowy dojazd, szybka wycena i płatność gotówką.',
};

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8 font-sans">
      <TopBarSticky />

      <Gap size="lg" />

      <h1 className="text-3xl font-bold mb-6">Skup aut Nysa</h1>
      <article className="prose prose-lg max-w-none">
        <p>Skup aut Nysa to szybki i bezpieczny sposób na sprzedaż samochodu bez czekania i bez stresu. Skupujemy auta w każdym stanie – sprawne, uszkodzone, powypadkowe oraz bez aktualnego przeglądu. Działamy 24 godziny na dobę, 7 dni w tygodniu, dzięki czemu możesz sprzedać auto dokładnie wtedy, kiedy Ci wygodnie.</p>
        <p>Oferujemy uczciwą wycenę już przy pierwszym kontakcie oraz płatność gotówką od ręki. Zapewniamy darmowy dojazd na terenie Nysy i okolic, a odbiór pojazdu odbywa się bez żadnych dodatkowych kosztów. Wszystkie formalności załatwiamy na miejscu — przygotowujemy umowę i dbamy o bezpieczeństwo całej transakcji.</p>
        <p>Jeśli interesuje Cię rzetelny skup aut w Nysie, skontaktuj się z nami telefonicznie lub skorzystaj z formularza kontaktowego, aby szybko otrzymać wycenę i sprzedać auto bez stresu.</p>
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