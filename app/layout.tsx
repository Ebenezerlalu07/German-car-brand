import { Michroma } from "next/font/google";
import "./globals.css";
import SmoothScroll from "../components/SmoothScroll";
import Navbar from "@/components/navbar";


const michroma = Michroma({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={michroma.className}>
        <Navbar />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}