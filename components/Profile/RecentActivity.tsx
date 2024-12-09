"use client";
import React from "react";
import { FaEthereum } from "react-icons/fa";

const RecentActivity = ({ activities }) => (
  <div className="rounded-xl bg-slate-200 p-6 dark:bg-gray-800">
    <h2 className="mb-6 text-2xl font-bold">Recent Activity</h2>
    <div className="space-y-4">
      {activities.map(({ id, activity, time, reward }) => (
        <div
          key={id}
          className="flex items-center justify-between rounded-lg bg-white p-4 transition-colors hover:bg-gray-600 dark:bg-gray-700"
        >
          <div>
            <p className="font-semibold">{activity}</p>
            <p className="text-sm text-gray-400">{time}</p>
          </div>
          <div className="flex items-center gap-2 text-green-400">
            <FaEthereum />
            <span>+{reward}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default RecentActivity;
