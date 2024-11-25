"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Lines from "@/components/Lines";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

import ToasterContext from "./utils/context/ToastContext";
import StoreProvider from "./utils/provider/StoreProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StoreProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={`dark:bg-black ${inter.className}`}>
          <ThemeProvider
            enableSystem={false}
            attribute="class"
            defaultTheme="light"
          >
            <Lines />
            <Header />
            <ToasterContext />
            {children}
            <Footer />
            <ScrollToTop />
          </ThemeProvider>
        </body>
      </html>
    </StoreProvider>
  );
}
