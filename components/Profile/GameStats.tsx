"use client";
import React from "react";
import { FaCrown, FaGamepad, FaTrophy } from "react-icons/fa";

const GameStats = ({ level, gamesPlayed, achievements }) => {
  const stats = [
    { label: "Level", value: level, icon: FaCrown, color: "text-yellow-500" },
    {
      label: "Games Played",
      value: gamesPlayed,
      icon: FaGamepad,
      color: "text-green-500",
    },
    {
      label: "Achievements",
      value: achievements,
      icon: FaTrophy,
      color: "text-orange-500",
    },
  ];

  return (
    <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-3">
      {stats.map(({ label, value, icon: Icon, color }) => (
        <div key={label} className="rounded-xl bg-gray-800 p-6">
          <div className="flex items-center gap-4">
            <Icon className={`text-3xl ${color}`} />
            <div>
              <h3 className="text-gray-400">{label}</h3>
              <p className="text-2xl font-bold">{value}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GameStats;
