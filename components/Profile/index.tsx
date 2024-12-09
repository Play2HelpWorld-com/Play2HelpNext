"use client";
import React, { useState } from "react";
import EditProfileModal from "./EditProfileModal";
import GameStats from "./GameStats";
import RecentActivity from "./RecentActivity";
import CryptoTokens from "./CryptoTokens";

const UserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);

  // Dynamic user data as an object
  const [user, setUser] = useState({
    profile: {
      username: "CryptoGamer2024",
      bio: "Professional gamer and crypto enthusiast",
      twitter: "@cryptogamer",
      twitch: "cryptogamer_live",
      discord: "cryptogamer#1234",
      image: "https://images.unsplash.com/photo-1566577134770-3d85bb3a9cc4",
    },
    stats: {
      level: 42,
      gamesPlayed: 1289,
      achievements: 76,
      tokens: 1250, // Added tokens
    },
    recentActivities: [
      {
        id: 1,
        activity: "Won Fortnite Tournament",
        time: "2 hours ago",
        reward: 100,
      },
      {
        id: 2,
        activity: "Completed Daily Challenge",
        time: "5 hours ago",
        reward: 50,
      },
      { id: 3, activity: "Reached Level 42", time: "1 day ago", reward: 200 },
    ],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      profile: { ...prev.profile, [name]: value },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4 text-black dark:bg-gray-900 dark:text-white md:p-8">
      <div className="relative mb-8 rounded-xl bg-gradient-to-r from-purple-900 to-blue-900 p-6">
        <div className="flex items-center gap-6">
          <img
            src={user.profile.image}
            alt="Profile"
            className="h-32 w-32 rounded-full border-4 border-purple-500 object-cover"
          />
          <div>
            <h1 className="text-3xl font-bold text-slate-50">
              {user.profile.username}
            </h1>
            <p className="text-gray-300">{user.profile.bio}</p>
            <button
              onClick={() => setIsEditing(true)}
              className="mt-4 rounded-full bg-purple-600 px-6 py-2 hover:bg-purple-700"
            >
              Edit Profile
            </button>
          </div>
        </div>
      </div>

      <EditProfileModal
        isEditing={isEditing}
        onClose={() => setIsEditing(false)}
        editedUser={user.profile}
        onChange={handleInputChange}
        onSubmit={handleSubmit}
      />

      {/* Game Stats Section */}
      <GameStats
        level={user.stats.level}
        gamesPlayed={user.stats.gamesPlayed}
        achievements={user.stats.achievements}
      />

      {/* Crypto Tokens Section */}
      <CryptoTokens tokens={user.stats.tokens} />

      {/* Recent Activity Section */}
      <RecentActivity activities={user.recentActivities} />
    </div>
  );
};

export default UserProfile;
