import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Skup aut Opole 24h/7 – Skup samochodów, gotówka',
  description: 'Skup aut Opole. Skupujemy auta osobowe i dostawcze. Darmowy dojazd, szybka transakcja i płatność gotówką od ręki.',
};

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8 font-sans">
      <h1 className="text-3xl font-bold mb-6">Skup aut Opole</h1>
      <article className="prose prose-lg max-w-none">
        <p>Skup aut Opole to profesjonalna usługa dla osób, które chcą szybko i bezpiecznie sprzedać samochód bez zbędnego oczekiwania. Skupujemy auta osobowe i dostawcze w każdym stanie – sprawne, uszkodzone, powypadkowe oraz bez aktualnego przeglądu. Działamy 24 godziny na dobę, 7 dni w tygodniu, również w weekendy i święta.</p>
        <p>Oferujemy błyskawiczną wycenę już przy pierwszym kontakcie oraz płatność gotówką od ręki. Zapewniamy darmowy dojazd na terenie Opola i okolic, a odbiór pojazdu odbywa się w dogodnym dla Ciebie miejscu. Wszystkie formalności związane ze sprzedażą auta przygotowujemy na miejscu, dbając o pełne bezpieczeństwo i przejrzystość transakcji.</p>
        <p>Jeśli interesuje Cię rzetelny i uczciwy skup aut w Opolu, skontaktuj się z nami telefonicznie lub skorzystaj z formularza kontaktowego, aby szybko otrzymać wycenę i sprzedać auto bez stresu.</p>
      </article>
    </main>
  );
}