import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/animations/SmoothScroll";

import GlobalPreloader from "@/components/animations/GlobalPreloader";

export const metadata: Metadata = {
  title: "Miles Studio | Luxury Digital Invitations",
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
      <body>
        <GlobalPreloader />
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
