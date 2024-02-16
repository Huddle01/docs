import '../styles/global.css';

import { Toaster } from 'react-hot-toast';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NextLayoutComponentType } from 'next';
import { rainbowWallet, metaMaskWallet } from '@rainbow-me/rainbowkit/wallets';

import '@rainbow-me/rainbowkit/styles.css';

import {
  RainbowKitProvider,
  connectorsForWallets,
  darkTheme,
  getDefaultWallets,
} from '@rainbow-me/rainbowkit';
import { WagmiConfig, configureChains, createClient } from 'wagmi';
import { mainnet } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import { m } from 'framer-motion';
import { rainbowWeb3AuthConnector } from '@components/RainbowWeb3AuthConnector';

const { chains, provider } = configureChains([mainnet], [publicProvider()]);

const connectors = connectorsForWallets([
  {
    groupName: 'Recommended',
    wallets: [
      rainbowWallet({
        projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT,
        chains,
      }),
      metaMaskWallet({
        projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT,
        chains,
      }),
      rainbowWeb3AuthConnector({ chains }),
    ],
  },
]);

const wagmiClient = createClient({
  autoConnect: false,
  connectors,
  provider,
});

const client = new QueryClient();

export default function Nextra({
  Component,
  pageProps,
}: {
  Component: NextLayoutComponentType;
  pageProps: object;
}) {
  const getLayout = Component.getLayout || ((page: React.ReactElement) => page);
  return (
    <>
      <QueryClientProvider client={client}>
        <WagmiConfig client={wagmiClient}>
          <RainbowKitProvider
            coolMode
            chains={chains}
            theme={darkTheme({ overlayBlur: 'small' })}
          >
            {getLayout(<Component {...pageProps} />)}
          </RainbowKitProvider>
        </WagmiConfig>
        <Toaster position='bottom-right' />
      </QueryClientProvider>
    </>
  );
}
