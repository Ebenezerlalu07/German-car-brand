import type { Metadata } from "next";
import { Michroma } from "next/font/google";
import "./globals.css";
import SmoothScroll from "../components/SmoothScroll";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";








const michroma = Michroma({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "German Luxury Automotive",
  description:
    "Connecting premium German automotive brands worldwide. Explore partnerships, innovation, and luxury experiences with Mercedes-Benz, BMW, Audi, Porsche, Volkswagen, and Alpina.",
  keywords: [
    "Mercedes-Benz",
    "BMW",
    "Audi",
    "Porsche",
    "Volkswagen",
    "Alpina",
    "German Luxury Cars",
    "Automotive Network",
  ],


};


export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={michroma.className}>
        <Navbar />
        <SmoothScroll />
        {children}
        <Footer />
      </body>
    </html>
  );
}