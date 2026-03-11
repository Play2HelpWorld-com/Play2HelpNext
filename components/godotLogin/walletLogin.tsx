"use client";
import React, { useState, useEffect } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import CustomOpenModal from '../CustomConnectButton/customOpenModal';
import axios from 'axios';

export const WalletLogin = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  interface SendAddressResponse {
    status: number;
  }

  const sendAddressToGodot = async (address: string): Promise<void> => {
    try {
      const response: SendAddressResponse = await axios.post(`http://localhost:4242`, {
        "wallet-address": address
      });
      if (response.status === 200) {
        console.log('Successfully sent address to Godot');
      }
    } catch (error) {
      console.error('Failed to send address to Godot:', error);
    }
  };
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openChainModal,
        openConnectModal,
        mounted,
      }) => {
        const ready = mounted;
        const connected = ready && account && chain;
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
          if (!connected) {
            openConnectModal();
          } else {
            console.log('Connected wallet address:', account.address);
            sendAddressToGodot(account.address);
          }
        }, [connected, openConnectModal, account?.address]);

        return (
          <div className="flex flex-col items-center gap-2.5 mt-44">
            {connected && chain.unsupported && (
              <button
                onClick={openChainModal}
                className="px-5 py-2.5 text-lg bg-red-600 text-white border-none rounded-lg cursor-pointer"
              >
                Wrong Network
              </button>
            )}

            {connected && !chain.unsupported && (
              <div className="relative">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="group flex items-center justify-center space-x-1.5 px-4 py-2.5 
                    bg-gradient-to-r from-blue-500 to-purple-500 
                    text-white 
                    rounded-xl 
                    shadow-md 
                    hover:shadow-lg 
                    transition-all 
                    duration-300 
                    ease-in-out 
                    transform 
                    hover:-translate-y-0.5
                    active:scale-95"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-1 opacity-70 group-hover:opacity-100 transition-opacity"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span className="text-sm font-medium tracking-tight truncate max-w-[120px]">
                    {account.displayName}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 opacity-70 group-hover:opacity-100 transition-opacity ml-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isModalOpen && (
                  <CustomOpenModal
                    account={account}
                    openChainModal={openChainModal}
                    setIsModalOpen={setIsModalOpen}
                  />
                )}
              </div>
            )}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
}
