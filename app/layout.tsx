import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Preloader from "../components/Preloader";
import Cursor from "../components/Cursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Xpandify | Premium Digital Agency",
  description: "Providing world-class digital services and web development across the UK and internationally.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Cursor />
        <Preloader/>
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
