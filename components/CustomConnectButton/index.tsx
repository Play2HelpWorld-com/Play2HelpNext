"use client"
import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';


export const CustomConnectButton = () => {
  return (
    <ConnectButton.Custom>
      {({
        account,            // Account details (e.g., address, ENS name)
        chain,              // Chain details (e.g., name, ID)
        openAccountModal,   // Opens the account modal
        openChainModal,     // Opens the network switch modal
        openConnectModal,   // Opens the wallet connect modal
        mounted,            // Checks if the button is ready to display
      }) => {
        const ready = mounted;
        const connected = ready && account && chain;

        return (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            {!connected && (
              <button
                onClick={openConnectModal} // Trigger wallet connection modal
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
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <button
                  onClick={openChainModal} // Trigger network switch modal
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
              </div>
            )}

            {connected && !chain.unsupported && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <button
                  onClick={openAccountModal} // Trigger account modal
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

                <button
                  onClick={openChainModal} // Trigger network switch modal
                  style={{
                    padding: '10px 20px',
                    fontSize: '16px',
                    background: '#FFC107',
                    color: 'black',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                  }}
                >
                  Change Network
                </button>
              </div>
            )}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};