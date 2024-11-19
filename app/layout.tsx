"use client";

import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "@/components/Navbar/navbar";
import Footer from "@/components/Footer/footer";
import StoreProvider from "./StoreProvider";
import { useEffect } from "react"; // Corrected import
import { fetchLoggedInUser } from "@/lib/features/auth/authSlice";
import { useAppDispatch } from "@/lib/hooks";
import Header from "@/components/Navbar/header";
import Hero from "@/components/home/hero/hero";

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
        <body className="bg-black">
          <ReduxInitializer>
            {/* <Navbar /> */}
            <Header />
            <Hero />
            <ToastContainer />
            <div className="min-h-screen bg-white">{children}</div>
            <Footer />
          </ReduxInitializer>
        </body>
      </html>
    </StoreProvider>
  );
}
