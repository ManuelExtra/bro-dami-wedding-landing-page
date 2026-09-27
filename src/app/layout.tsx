import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ololade Martha & Oluwadamilola Ayomide — Royal Wedding Celebration",
  description:
    "Mr & Mrs Oladele together with Mr & Mrs Adetunji cordially invite you to celebrate the holy matrimony of Ololade Martha & Oluwadamilola Ayomide on Saturday, November 21, 2026 at Eredo LCDA Secretariat, Epe, Lagos State.",
  keywords: ["Ololade and Damilola", "Dami Wedding", "Martha and Ayomide", "Eredo Epe Wedding", "Nigerian Wedding"],
  openGraph: {
    title: "Ololade Martha & Oluwadamilola Ayomide's Wedding",
    description: "Join us in celebrating the holy matrimony of Ololade & Oluwadamilola. Saturday, 21st November 2026 at Eredo LCDA Secretariat, Epe, Lagos.",
    url: "https://ololade-and-damilola.wedding",
    siteName: "Ololade & Oluwadamilola Wedding",
    images: [
      {
        url: "/images/couple_photo.jpg",
        width: 1200,
        height: 630,
        alt: "Ololade Martha & Oluwadamilola Ayomide",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans bg-[#FAF8F5] text-[#2C3531] min-h-screen flex flex-col antialiased selection:bg-[#2D6A4F] selection:text-[#FAF8F5]">
        {children}
      </body>
    </html>
  );
}
