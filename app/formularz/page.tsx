"use client";
import { useEffect, useState } from "react";
import TopBarSticky from '../components/TopBarSticky';
import SocialBar from '../components/SocialBar';
import Gap from '../components/Gap';

const PHONE = "792905099";
const PHONE_FMT = "792 - 905 - 099";
const EMAIL = "skupaut24hcz@gmail.com";

export default function Page() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `Imię: ${name}\nEmail: ${email}\nTelefon: ${phone}\nWiadomość: ${message}`;
    const url = `https://mail.google.com/mail/?view=cm&fs=1&to=skupaut24hcz@gmail.com&su=Wiadomość z formularza&body=${encodeURIComponent(body)}`;
    window.open(url, '_blank');
  };

  return (
    <main className="mx-auto max-w-6xl px-4 py-8 font-sans">
      <TopBarSticky />

      <h1 className="mt-6 text-4xl md:text-5xl font-extrabold text-center underline underline-offset-6 decoration-[color:var(--color-brand)] decoration-4">
        Formularz
      </h1>

      <form className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium">Imię i nazwisko</label>
          <input className="mt-1 w-full rounded-md border border-gray-300 p-3" placeholder="Jan Kowalski" required value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label className="block text-sm font-medium">E‑mail</label>
          <input type="email" className="mt-1 w-full rounded-md border border-gray-300 p-3" placeholder="adres@domena.pl" required value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium">Telefon</label>
          <input className="mt-1 w-full rounded-md border border-gray-300 p-3" placeholder={PHONE_FMT} value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium">Wiadomość</label>
          <textarea className="mt-1 w-full rounded-md border border-gray-300 p-3 min-h-[140px]" placeholder="Napisz kilka słów o aucie..." required value={message} onChange={(e) => setMessage(e.target.value)} />
        </div>
        <div className="md:col-span-2 flex items-center gap-3">
          <button type="submit" className="px-6 py-3 rounded-md bg-[color:var(--color-brand)] text-white font-medium hover:bg-[color:var(--color-brand-dark)]">
            Wyślij
          </button>
          <a href={`tel:${PHONE}`} className="px-6 py-3 rounded-md border border-gray-300 hover:bg-gray-50">
            Zadzwoń: {PHONE_FMT}
          </a>
        </div>
      </form>

      <div className="mt-12">
        <SocialBar />
      </div>
    </main>
  );
}
