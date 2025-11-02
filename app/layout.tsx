import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/Components/Navbar";
import Footer from "@/app/Components/Footer";
// import Loader from "@/app/Components/Loader";
import PageTransitionWrapper from "@/app/Components/PageTransitionWrapper"; // 👈 NEW client wrapper

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Proda Academy",
  description: "Empowering Future Leaders Through Excellence",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        {/* <Loader /> */}
        <Navbar />
        <PageTransitionWrapper>{children}</PageTransitionWrapper>
        <Footer />
      </body>
    </html>
  );
}
