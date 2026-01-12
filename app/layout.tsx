import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SKUP AUT 24H/7 – Jesteśmy najszybsi",
  description:
    "Szybki i bezpieczny skup aut 24/7 na terenie Śląska, Łódzkiego, Opolskiego, Małopolskiego i Świętokrzyskiego. Błyskawiczna wycena, darmowy dojazd, płatność od ręki, zero formalności.",
  icons: { icon: "/favicon.jpg" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pl" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
