"use client";

import React from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Lines from "@/components/Lines";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import StoreProvider from "./utils/provider/StoreProvider";
import { useEffect } from "react";
import { useAppDispatch } from "@/configs/redux/hooks";
import { fetchLoggedInUser } from "@/configs/redux/auth/authSlice";
import {
  LoadingProvider,
  useLoading,
} from "@/app/utils/context/LoadingContext"; // Import LoadingProvider
import Loader from "@/components/Loader/Preloader";
import RouteChangeHandler from "@/utils/loader/RouteChangeHandler";

const inter = Inter({ subsets: ["latin"] });

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
      <html lang="en" suppressHydrationWarning>
        <body className={`${inter.className}`}>
          <ThemeProvider
            enableSystem={false}
            attribute="class"
            defaultTheme="light"
          >
            <ReduxInitializer>
              <Lines />
              <Header />
              <ToastContainer />
              <LoadingProvider>
                <LayoutWithLoader>{children}</LayoutWithLoader>
              </LoadingProvider>
              <Footer />
              <ScrollToTop />
            </ReduxInitializer>
          </ThemeProvider>
        </body>
      </html>
    </StoreProvider>
  );
}

// A separate component that uses the Loading context
const LayoutWithLoader = ({ children }: { children: React.ReactNode }) => {
  const { loading } = useLoading(); // Use the hook inside the provider
  return (
    <>
      <RouteChangeHandler />
      <Loader
        isLoading={loading}
        onTransitionEnd={() => console.log("Transition ended")}
      />
      {children}
    </>
  );
};
