"use client";

import type { Metadata } from "next";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "@/components/Navbar/navbar";
import Footer from "@/components/Footer/footer";
import StoreProvider from "./StoreProvider";
import { useEffect } from "react"; // Corrected import
import { fetchLoggedInUser } from "@/lib/features/auth/authSlice";
import { fetchNotifications } from "@/lib/features/notifications/notificationSlice";
import { useAppDispatch } from "@/lib/hooks";


const ReduxInitializer = ({ children } : { children: React.ReactNode}) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchLoggedInUser());
    dispatch(fetchNotifications());
  }, [dispatch]);
  return <>{children}</>;
}

export default function RootLayout({ children } : { children: React.ReactNode }) {
  return (
    <StoreProvider>
      <html lang="en">
        <body className="bg-white">
          <ReduxInitializer>
          <Navbar />
          <ToastContainer />
          <div className="min-h-screen bg-white">{children}</div>
          <Footer />
          </ReduxInitializer>
        </body>
      </html>
    </StoreProvider>
  );
}
