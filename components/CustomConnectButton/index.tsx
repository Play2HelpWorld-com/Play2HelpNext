"use client"
import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';

export const CustomConnectButton = () => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        mounted,
      }) => {
        const ready = mounted;
        const connected = ready && account && chain;

        return (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {!connected && (
              <button
                onClick={openConnectModal}
                style={{
                  padding: '10px 20px',
                  fontSize: '16px',
                  background: '#4CAF50',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                }}
              >
                Connect Wallet
              </button>
            )}

            {connected && chain.unsupported && (
              <button
                onClick={openChainModal}
                style={{
                  padding: '10px 20px',
                  fontSize: '16px',
                  background: '#f44336',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                }}
              >
                Wrong Network
              </button>
            )}

            {connected && !chain.unsupported && (
              <button
                onClick={openAccountModal}
                style={{
                  padding: '10px 20px',
                  fontSize: '16px',
                  background: '#2196F3',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                }}
              >
               {account.balanceSymbol} {account.displayBalance} {account.displayName}
              </button>
            )}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};