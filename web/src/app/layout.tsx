import type { Metadata } from "next";
import { DM_Sans, Noto_Sans_Bengali, Source_Serif_4 } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const notoBengali = Noto_Sans_Bengali({
  variable: "--font-bengali",
  subsets: ["bengali"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Nadiya Nusrat | Nutrition & Public Health",
  description:
    "Portfolio of Nadiya Nusrat — nutrition, public health, and health communication. Articles, experience, and contact.",
  openGraph: {
    title: "Nadiya Nusrat",
    description:
      "Nutrition · Public Health · Health Communication",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${sourceSerif.variable} ${notoBengali.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-white font-sans text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
