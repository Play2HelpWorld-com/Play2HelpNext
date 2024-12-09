"use client";
import React from "react";
import { FaTimes, FaTwitter, FaTwitch, FaDiscord } from "react-icons/fa";

const EditProfileModal = ({
  isOpen,
  onClose,
  editedUser,
  handleInputChange,
  handleSubmit,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="relative w-full max-w-md rounded-xl bg-gray-800 p-6">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-white"
        >
          <FaTimes className="text-xl" />
        </button>
        <h2 className="mb-6 text-2xl font-bold">Edit Profile</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium">Username</label>
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
  );
};

export default EditProfileModal;
