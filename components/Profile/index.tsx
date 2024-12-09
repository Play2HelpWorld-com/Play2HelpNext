"use client";
import React, { useState } from "react";
import EditProfileModal from "./EditProfileModal";
import GameStats from "./GameStats";
import RecentActivity from "./RecentActivity";

const UserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({
    username: "CryptoGamer2024",
    bio: "Professional gamer and crypto enthusiast",
    twitter: "@cryptogamer",
    twitch: "cryptogamer_live",
    discord: "cryptogamer#1234",
  });

  const userStats = {
    level: 42,
    gamesPlayed: 1289,
    achievements: 76,
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
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 p-4 text-white md:p-8">
      <div className="relative mb-8 rounded-xl bg-gradient-to-r from-purple-900 to-blue-900 p-6">
        <div className="flex items-center gap-6">
          <img
            src="https://images.unsplash.com/photo-1566577134770-3d85bb3a9cc4"
            alt="Profile"
            className="h-32 w-32 rounded-full border-4 border-purple-500 object-cover"
          />
          <div>
            <h1 className="text-3xl font-bold">{editedUser.username}</h1>
            <p className="text-gray-300">{editedUser.bio}</p>
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
        editedUser={editedUser}
        onChange={handleInputChange}
        onSubmit={handleSubmit}
      />
      <GameStats
        level={userStats.level}
        gamesPlayed={userStats.gamesPlayed}
        achievements={userStats.achievements}
      />
      <RecentActivity activities={userStats.recentActivities} />
    </div>
  );
};

export default UserProfile;
