"use client";
import React, { FC } from "react";

type Props = {
  isLoading: boolean;
  onTransitionEnd: VoidFunction;
};

const Loader: FC<Props> = ({ isLoading, onTransitionEnd }) => (
  <div
    id="loader"
    aria-label="Loading..."
    onTransitionEnd={onTransitionEnd}
    className={`fixed inset-0 z-20 grid place-items-center
      ${isLoading ? "visible scale-100 opacity-100" : "invisible scale-0 opacity-0"}
      transition-scale bg-gray-50 transition-opacity duration-300 dark:bg-gray-900`}
  >
    <div className="relative h-40 w-40 rounded-lg bg-gradient-to-br from-gray-600/30 to-gray-800/10 shadow-md shadow-cyan-500/30 dark:from-gray-800/90 dark:to-black/70">
      {/* Console Screen */}
      <div className="absolute bottom-14 left-6 right-6 top-6 rounded-md bg-black dark:bg-gray-800">
        <div
          className="animate-fill absolute inset-0 m-2 rounded-md bg-gradient-to-r from-blue-500
          to-green-500 dark:from-blue-400 dark:to-purple-500"
        />
      </div>

      {/* Buttons */}
      <div className="absolute bottom-4 left-8 flex space-x-2">
        <div className="h-4 w-4 animate-pulse rounded-full bg-red-500"></div>
        <div className="h-4 w-4 rounded-full bg-yellow-500"></div>
      </div>

      <div className="absolute bottom-4 right-8 h-4 w-12 rounded-lg bg-gray-600 dark:bg-gray-700"></div>
    </div>
  </div>
);

export default Loader;
