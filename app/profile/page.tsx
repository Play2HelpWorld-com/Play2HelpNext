import React from "react";
import { Metadata } from "next";
import UserProfile from "@/components/Profile";

export const metadata: Metadata = {
  title: "Profile Page - Play2Help",
  description: "This is profile page for P2H",
  // other metadata
};

const ProfilePage = () => {
  return (
    <div className="pb-20 pt-40">
      <UserProfile />
    </div>
  );
};

export default ProfilePage;
