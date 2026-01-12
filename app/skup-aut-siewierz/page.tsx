import { Metadata } from 'next';
import { useEffect, useState } from "react";

export const metadata: Metadata = {
  title: 'Skup aut Siewierz 24h – Auto skup, gotówka od ręki',
  description: 'Skup aut Siewierz 24h/7. Skupujemy auta sprawne i uszkodzone. Darmowy dojazd, szybka wycena i płatność gotówką.',
};

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-8 font-sans">
      <TopBarSticky />

      <Gap size="xl" />

      <h1 className="text-3xl font-bold text-center mb-6">Skup aut Siewierz</h1>

      <article className="prose prose-lg max-w-none text-center">
        <p>Skup aut Siewierz to szybki i bezproblemowy sposób na sprzedaż samochodu w każdej sytuacji. Skupujemy auta sprawne, uszkodzone, powypadkowe oraz bez aktualnego przeglądu. Działamy całodobowo, 7 dni w tygodniu, dzięki czemu możesz sprzedać auto dokładnie wtedy, kiedy jest Ci to wygodne.</p>
        <p>Zapewniamy rzetelną wycenę już przy pierwszym kontakcie oraz płatność gotówką od ręki. Oferujemy darmowy dojazd na terenie Siewierza i okolic, a odbiór pojazdu odbywa się bez żadnych dodatkowych kosztów. Wszystkie formalności załatwiamy na miejscu — przygotowujemy umowę i dbamy o bezpieczeństwo całej transakcji.</p>
        <p>Jeśli interesuje Cię uczciwy i profesjonalny skup aut w Siewierzu, skontaktuj się z nami telefonicznie lub skorzystaj z formularza kontaktowego, aby szybko otrzymać wycenę i sprzedać samochód bez stresu.</p>
      </article>

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
          <a href="/" className="hover:text-[color:var(--color-brand)] transition-colors">Strona główna</a>
          <a href="/jakie-auta-kupujemy" className="hover:text-[color:var(--color-brand)] transition-colors">Jakie auta kupujemy</a>
          <a href="/obszar-dzialania" className="hover:text-[color:var(--color-brand)] transition-colors">Obszar działania</a>
          <a href="/kontakt" className="hover:text-[color:var(--color-brand)] transition-colors">Kontakt</a>
          <a href="/formularz" className="hover:text-[color:var(--color-brand)] transition-colors">Formularz</a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-md hover:bg-gray-100"
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-200 py-3">
          <nav className="flex flex-col gap-3">
            <a href="/" className="hover:text-[color:var(--color-brand)] transition-colors">Strona główna</a>
            <a href="/jakie-auta-kupujemy" className="hover:text-[color:var(--color-brand)] transition-colors">Jakie auta kupujemy</a>
            <a href="/obszar-dzialania" className="hover:text-[color:var(--color-brand)] transition-colors">Obszar działania</a>
            <a href="/kontakt" className="hover:text-[color:var(--color-brand)] transition-colors">Kontakt</a>
            <a href="/formularz" className="hover:text-[color:var(--color-brand)] transition-colors">Formularz</a>
          </nav>
        </div>
      )}
    </header>
  );
}

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

function Gap({ size = "md" }: { size?: "sm" | "md" | "lg" | "xl" }) {
  const map = { sm: "h-4", md: "h-6", lg: "h-8", xl: "h-12" };
  return <div className={map[size]} aria-hidden="true" />;
}

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
    { name: "Gmail", href: "https://mail.google.com/mail/?view=cm&fs=1&to=skuppodglad@gmail.com", icon: GmailIcon },
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