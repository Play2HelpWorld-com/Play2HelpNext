import React from "react";
import { Metadata } from "next";
import AnimatedListDemo from "@/components/Rewards";

export const metadata: Metadata = {
  title: "Rewards Page - Play2Help | Play for Free Donation",
  description: "This is built by Moyasi",
  // other metadata
};

const RewardsPage = () => {
  return (
    <div className="flex justify-center pb-20 pt-40">
      <AnimatedListDemo />
    </div>
  );
};

export default RewardsPage;
