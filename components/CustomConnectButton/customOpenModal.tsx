import React, { useState } from 'react';
import { CustomOpenModalProps } from "./interface";

export const CustomOpenModal: React.FC<CustomOpenModalProps> = ({ 
  account, 
  openChainModal, 
  setIsModalOpen 
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(account.address).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-100/30 to-purple-100/30 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-md rounded-2xl bg-white/60 backdrop-blur-xl border border-white/20 shadow-2xl overflow-hidden">
        
        <button 
          title="Close Modal"
          onClick={() => setIsModalOpen(false)}
          className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/40 backdrop-blur-sm p-2 rounded-full transition-all duration-300 group"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 text-gray-700 group-hover:rotate-90 transition-transform duration-300" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="relative bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-6 pb-8">
          <h2 className="text-3xl font-extralight text-gray-900 tracking-tight flex items-center">
            <svg 
              className="w-8 h-8 mr-3 text-blue-500 opacity-70"
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            Account Details
          </h2>
          <div className="mt-2 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 opacity-50"></div>

          <svg 
            className="absolute top-2 right-2 w-16 h-16 text-blue-200 opacity-30"
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
          </svg>
        </div>

        <div className="px-6 py-6 space-y-6">
          <div className="relative flex items-center justify-between">
            <span className="text-sm font-medium text-gray-600 uppercase tracking-wider flex items-center">
              <svg 
                className="w-5 h-5 mr-2 text-purple-300"
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Name
            </span>
            <span className="text-lg font-semibold text-gray-900 bg-white/50 px-3 py-1 rounded-full">
              {account.displayName}
            </span>
          </div>
          
          {/* Address Section with Copy Feature */}
          <div className="relative flex items-center justify-between">
            <span className="text-sm font-medium text-gray-600 uppercase tracking-wider flex items-center">
              <svg 
                className="w-5 h-5 mr-2 text-blue-300"
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Address
            </span>
            <div className="flex items-center">
              <span className="text-md text-gray-800 bg-white/50 px-3 py-1 rounded-full max-w-[180px] truncate mr-2">
                {account.address}
              </span>
              <button 
                onClick={handleCopyAddress}
                className="p-2 bg-white/30 hover:bg-white/50 rounded-full transition-all duration-300 group"
                title="Copy Address"
              >
                {copied ? (
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 text-green-500" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 text-gray-600 group-hover:text-blue-500 transition-colors" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
          
          {/* Balance Section */}
          <div className="relative flex items-center justify-between">
            <span className="text-sm font-medium text-gray-600 uppercase tracking-wider flex items-center">
              <svg 
                className="w-5 h-5 mr-2 text-green-300"
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Balance
            </span>
            <span className="text-lg font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full">
              {account.displayBalance} {account.balanceSymbol}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="px-6 pb-6 pt-4 flex space-x-4">
          <button 
            onClick={() => setIsModalOpen(false)}
            className="flex-1 px-4 py-3 text-gray-700 bg-white/30 hover:bg-white/50 backdrop-blur-sm rounded-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg flex items-center justify-center"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 mr-2" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            Close
          </button>
          
          <button 
            onClick={openChainModal}
            className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl flex items-center justify-center"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 mr-2" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Change Network
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomOpenModal;