"use client";
import React, { useEffect, useState, useRef } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import CustomOpenModal from './customOpenModal';
import { AxiosReqInstance } from '../accounts/utils/axiosInstance';

export const CustomConnectButton = () => {
  const protectedUrl = AxiosReqInstance();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const previousAddressRef = useRef<string | null>(null);

  const saveWalletAddress = async (walletAddress: string) => {
    try {
      const url = process.env.NEXT_PUBLIC_BACKEND_BASE_URL + '/api/users/saveWalletAddress/';
      const response = await protectedUrl.post(url, { "wallet_address": walletAddress });
      if (response.status === 200) {
        console.log('wallet address saved successfully');
      }
    } catch (error) {
      console.error('error while saving wallet address', error);
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
          if (connected && account.address) {
            if (previousAddressRef.current !== account.address) {
              console.log('Wallet address changed or newly connected, saving to database');
              saveWalletAddress(account.address);
              previousAddressRef.current = account.address;
            }
          } else {
            previousAddressRef.current = null;
          }
        }, [connected, account?.address]);

        return (
          <div className="flex flex-col items-center gap-2.5">
            {!connected && (
              <button
                onClick={openConnectModal}
                className="px-5 py-2.5 text-lg bg-green-600 text-white border-none rounded-lg cursor-pointer"
              >
                Connect Wallet
              </button>
            )}

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