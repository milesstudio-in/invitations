import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";
import SmoothScroll from "@/components/animations/SmoothScroll";
import GlobalPreloader from "@/components/animations/GlobalPreloader";
import { LanguageProvider } from "@/context/LanguageContext";

const tropika = localFont({
  src: '../../public/fonts/aiyari-tropika-island-int.otf',
  variable: '--font-tropika',
});

export const metadata: Metadata = {
  title: "MilesStudio.Invitations | Luxury Digital Invitations",
  description: "Bespoke digital experiences for your most important moments.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=League+Spartan:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className={tropika.variable}>
        <LanguageProvider>
          <GlobalPreloader />
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </LanguageProvider>
      </body>
    </html>
  );
}
