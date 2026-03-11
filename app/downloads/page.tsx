import React from "react";
import { Metadata } from "next";
import Downloads from "@/components/Download";

export const metadata: Metadata = {
  title: "Download Page - weplay2help | Play for Free Donation",
  description: "This is built by Moyasi",
  // other metadata
};

const DownloadPage = () => {
  return (
    <div className="pb-20 pt-40">
      <Downloads />
    </div>
  );
};

export default DownloadPage;
