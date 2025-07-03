import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HeaderNav from "../components/HeaderNav";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import { businessConfig } from "../config/business";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Grupo Materialo",
  description: "Casa de materiales y construcción",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <HeaderNav />
        {children}
        <Footer />
        <WhatsAppButton
          phoneNumber={businessConfig.contact.whatsapp}
          message={businessConfig.whatsapp.defaultMessage}
        />
      </body>
    </html>
  );
}
