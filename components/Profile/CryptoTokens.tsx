import React from "react";
import { FaEthereum, FaChartLine } from "react-icons/fa";

const CryptoTokens = ({ tokens }) => {
  return (
    <div className="mb-8 rounded-xl bg-slate-200 p-6 dark:bg-gray-800">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold">Crypto Tokens</h2>
        <div className="flex items-center gap-2 rounded-lg bg-slate-300 px-4 py-2 dark:bg-blue-900">
          <FaEthereum className="text-blue-600 dark:text-blue-400" />
          <span className="font-bold">{tokens}</span>
        </div>
      </div>
      <div className="relative mb-6 h-48">
        <FaChartLine className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-6xl text-purple-500" />
      </div>
      <button className="w-full rounded-lg bg-purple-600 py-3 font-bold hover:bg-purple-700">
        Redeem Tokens
      </button>
    </div>
  );
};

export default CryptoTokens;
