"use client";

import "./globals.css";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "@/components/Navbar/navbar";
import Footer from "@/components/Footer/footer";
import StoreProvider from "./StoreProvider";
import { useEffect } from "react";
import { fetchLoggedInUser } from "@/lib/features/auth/authSlice";
import { useAppDispatch } from "@/lib/hooks";
import Header from "@/components/Navbar/header";
import Hero from "@/components/home/hero/hero";

const theme = {
  colors: {
    primary: "#0070f3",
  },
};

const ReduxInitializer = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchLoggedInUser());
  }, [dispatch]);
  return <>{children}</>;
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className="bg-[#091428]">
          <ThemeProvider theme={theme}>
            <ReduxInitializer>
              {/* <Navbar /> */}
              <Header />
              <Hero />
              <ToastContainer />
              <div className="min-h-screen">{children}</div>
              <Footer />
            </ReduxInitializer>
          </ThemeProvider>
        </body>
      </html>
    </StoreProvider>
  );
}
