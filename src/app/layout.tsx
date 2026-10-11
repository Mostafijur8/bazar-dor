import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import PriceTicker from "@/components/layout/PriceTicker";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bazar-Dor",
  description: "বাজারদর জানুন সহজেই",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div>
          <Navbar />
          <PriceTicker />
          {children}
          <Toaster
            position="top-center"
            toastOptions={{
              duration: 5000,
            }}
          />
          <Footer />
        </div>
      </body>
    </html>
  );
}
