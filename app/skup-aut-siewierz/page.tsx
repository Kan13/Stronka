import { Metadata } from 'next';
import TopBarSticky from '../components/TopBarSticky';
import SocialBar from '../components/SocialBar';
import Gap from '../components/Gap';

export const metadata: Metadata = {
  title: 'Skup aut Siewierz 24h – Auto skup, gotówka od ręki',
  description: 'Skup aut Siewierz 24h/7. Skupujemy auta sprawne i uszkodzone. Darmowy dojazd, szybka wycena i płatność gotówką.',
};

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8 font-sans">
      <TopBarSticky />

      <Gap size="lg" />

      <h1 className="text-3xl font-bold mb-6">Skup aut Siewierz</h1>
      <article className="prose prose-lg max-w-none">
        <p>Skup aut Siewierz to szybki i bezproblemowy sposób na sprzedaż samochodu w każdej sytuacji. Skupujemy auta sprawne, uszkodzone, powypadkowe oraz bez aktualnego przeglądu. Działamy całodobowo, 7 dni w tygodniu, dzięki czemu możesz sprzedać auto dokładnie wtedy, kiedy jest Ci to wygodne.</p>
        <p>Zapewniamy rzetelną wycenę już przy pierwszym kontakcie oraz płatność gotówką od ręki. Oferujemy darmowy dojazd na terenie Siewierza i okolic, a odbiór pojazdu odbywa się bez żadnych dodatkowych kosztów. Wszystkie formalności załatwiamy na miejscu — przygotowujemy umowę i dbamy o bezpieczeństwo całej transakcji.</p>
        <p>Jeśli interesuje Cię uczciwy i profesjonalny skup aut w Siewierzu, skontaktuj się z nami telefonicznie lub skorzystaj z formularza kontaktowego, aby szybko otrzymać wycenę i sprzedać samochód bez stresu.</p>
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