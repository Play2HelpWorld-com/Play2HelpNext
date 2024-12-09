"use client";
import React from "react";
import { FaTimes, FaTwitter, FaTwitch, FaDiscord } from "react-icons/fa";

const EditProfileModal = ({
  isEditing,
  onClose,
  editedUser,
  onChange,
  onSubmit,
}) => {
  if (!isEditing) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-200 bg-opacity-50 p-4 dark:bg-black">
      <div className="relative w-full max-w-md rounded-xl bg-slate-400 p-6 dark:bg-gray-800">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-white"
        >
          <FaTimes className="text-xl" />
        </button>
        <h2 className="mb-6 text-2xl font-bold">Edit Profile</h2>
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium">Username</label>
            <input
              type="text"
              name="username"
              value={editedUser.username}
              onChange={onChange}
              className="w-full rounded-lg bg-gray-700 px-4 py-2 text-white"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium">Bio</label>
            <textarea
              name="bio"
              value={editedUser.bio}
              onChange={onChange}
              className="h-24 w-full rounded-lg bg-gray-700 px-4 py-2 text-white"
            />
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Social Links</h3>
            {[
              { label: "Twitter", icon: FaTwitter, name: "twitter" },
              { label: "Twitch", icon: FaTwitch, name: "twitch" },
              { label: "Discord", icon: FaDiscord, name: "discord" },
            ].map(({ label, icon: Icon, name }) => (
              <div key={name}>
                <label className="mb-2 flex items-center gap-2 text-sm font-medium">
                  <Icon className="text-blue-800 dark:text-blue-400" /> {label}
                </label>
                <input
                  type="text"
                  name={name}
                  value={editedUser[name]}
                  onChange={onChange}
                  className="w-full rounded-lg bg-gray-700 px-4 py-2 text-white"
                />
              </div>
            ))}
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
