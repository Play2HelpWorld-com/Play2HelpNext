import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { bsc, bscTestnet, mainnet  } from 'wagmi/chains'

// Get projectId from https://cloud.walletconnect.com
export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID

if (!projectId) throw new Error('Project ID is not defined')



export const config = getDefaultConfig({
    appName: 'Play2Help',
    projectId,
    chains: [
      bsc,
      mainnet,
      ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [bscTestnet] : []),
    ],
    ssr: true,
  });