import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Award-Winning Mulia Hotels | Luxury Stays in Bali and Jakarta",
  description: "Experience the ultimate luxury at Mulia Hotels & Resorts. Book directly for exclusive rates in Bali and Jakarta.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased font-sans`}>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
