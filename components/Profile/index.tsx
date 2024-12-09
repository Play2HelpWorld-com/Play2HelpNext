"use client";
import React, { useState } from "react";
import {
  FaEdit,
  FaCrown,
  FaGamepad,
  FaTrophy,
  FaChartLine,
  FaEthereum,
  FaTimes,
  FaTwitter,
  FaTwitch,
  FaDiscord,
} from "react-icons/fa";

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
    username: editedUser.username,
    bio: editedUser.bio,
    level: 42,
    gamesPlayed: 1289,
    achievements: 76,
    tokens: 3450,
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
      {
        id: 4,
        activity: "New Achievement Unlocked",
        time: "2 days ago",
        reward: 75,
      },
    ],
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 p-4 text-white md:p-8">
      {/* Profile Header */}
      <div className="relative mb-8 rounded-xl bg-gradient-to-r from-purple-900 to-blue-900 p-6">
        <div className="flex flex-col items-center gap-6 md:flex-row">
          <img
            src="https://images.unsplash.com/photo-1566577134770-3d85bb3a9cc4"
            alt="Profile"
            className="h-32 w-32 rounded-full border-4 border-purple-500 object-cover"
          />
          <div className="flex-1 text-center md:text-left">
            <h1 className="mb-2 text-3xl font-bold">{userStats.username}</h1>
            <p className="mb-4 text-gray-300">{userStats.bio}</p>
            <button
              onClick={() => setIsEditing(true)}
              className="mx-auto flex items-center gap-2 rounded-full bg-purple-600 px-6 py-2 hover:bg-purple-700 md:mx-0"
            >
              <FaEdit /> Edit Profile
            </button>
          </div>
        </div>
      </div>

      {/* Edit Profile Modal */}
      {isEditing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="relative w-full max-w-md rounded-xl bg-gray-800 p-6">
            <button
              onClick={() => setIsEditing(false)}
              className="absolute right-4 top-4 text-gray-400 hover:text-white"
            >
              <FaTimes className="text-xl" />
            </button>
            <h2 className="mb-6 text-2xl font-bold">Edit Profile</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  value={editedUser.username}
                  onChange={handleInputChange}
                  className="w-full rounded-lg bg-gray-700 px-4 py-2 text-white"
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-medium">Bio</label>
                <textarea
                  name="bio"
                  value={editedUser.bio}
                  onChange={handleInputChange}
                  className="h-24 w-full rounded-lg bg-gray-700 px-4 py-2 text-white"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Social Links</h3>
                <div>
                  <label className="mb-2 flex items-center gap-2 text-sm font-medium">
                    <FaTwitter className="text-blue-400" /> Twitter
                  </label>
                  <input
                    type="text"
                    name="twitter"
                    value={editedUser.twitter}
                    onChange={handleInputChange}
                    className="w-full rounded-lg bg-gray-700 px-4 py-2 text-white"
                  />
                </div>
                <div>
                  <label className="mb-2 flex items-center gap-2 text-sm font-medium">
                    <FaTwitch className="text-purple-400" /> Twitch
                  </label>
                  <input
                    type="text"
                    name="twitch"
                    value={editedUser.twitch}
                    onChange={handleInputChange}
                    className="w-full rounded-lg bg-gray-700 px-4 py-2 text-white"
                  />
                </div>
                <div>
                  <label className="mb-2 flex items-center gap-2 text-sm font-medium">
                    <FaDiscord className="text-indigo-400" /> Discord
                  </label>
                  <input
                    type="text"
                    name="discord"
                    value={editedUser.discord}
                    onChange={handleInputChange}
                    className="w-full rounded-lg bg-gray-700 px-4 py-2 text-white"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="mt-6 w-full rounded-lg bg-purple-600 py-3 font-bold hover:bg-purple-700"
              >
                Save Changes
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Stats Grid */}
      <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="rounded-xl bg-gray-800 p-6">
          <div className="mb-4 flex items-center gap-4">
            <FaCrown className="text-3xl text-yellow-500" />
            <div>
              <h3 className="text-gray-400">Level</h3>
              <p className="text-2xl font-bold">{userStats.level}</p>
            </div>
          </div>
          <div className="h-2 w-full rounded-full bg-gray-700">
            <div className="h-2 w-3/4 rounded-full bg-yellow-500"></div>
          </div>
        </div>

        <div className="rounded-xl bg-gray-800 p-6">
          <div className="flex items-center gap-4">
            <FaGamepad className="text-3xl text-green-500" />
            <div>
              <h3 className="text-gray-400">Games Played</h3>
              <p className="text-2xl font-bold">{userStats.gamesPlayed}</p>
            </div>
          </div>
        </div>

        <div className="rounded-xl bg-gray-800 p-6">
          <div className="flex items-center gap-4">
            <FaTrophy className="text-3xl text-orange-500" />
            <div>
              <h3 className="text-gray-400">Achievements</h3>
              <p className="text-2xl font-bold">{userStats.achievements}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Crypto Tokens Section */}
      <div className="mb-8 rounded-xl bg-gray-800 p-6">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Crypto Tokens</h2>
          <div className="flex items-center gap-2 rounded-lg bg-blue-900 px-4 py-2">
            <FaEthereum className="text-blue-400" />
            <span className="font-bold">{userStats.tokens}</span>
          </div>
        </div>
        <div className="relative mb-6 h-48">
          <FaChartLine className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-6xl text-purple-500" />
        </div>
        <button className="w-full rounded-lg bg-purple-600 py-3 font-bold hover:bg-purple-700">
          Redeem Tokens
        </button>
      </div>

      {/* Activity Feed */}
      <div className="rounded-xl bg-gray-800 p-6">
        <h2 className="mb-6 text-2xl font-bold">Recent Activity</h2>
        <div className="space-y-4">
          {userStats.recentActivities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-center justify-between rounded-lg bg-gray-700 p-4 transition-colors hover:bg-gray-600"
            >
              <div>
                <p className="font-semibold">{activity.activity}</p>
                <p className="text-sm text-gray-400">{activity.time}</p>
              </div>
              <div className="flex items-center gap-2 text-green-400">
                <FaEthereum />
                <span>+{activity.reward}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
