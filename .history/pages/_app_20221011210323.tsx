import '../styles/globals.css';
import '../styles/app.css';
import '@rainbow-me/rainbowkit/styles.css';
import { Footer } from '../components/Footer';
import type { AppProps } from 'next/app';
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme
} from '@rainbow-me/rainbowkit';
import {
  chain,
  configureChains,
  createClient,
  WagmiConfig,
} from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { ChakraProvider } from '@chakra-ui/react';

const { chains, provider } = configureChains(
  [chain.mainnet],
  [
    alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'SUPER! Minting Dapp',
  chains
});

const wagmiClient = createClient({
  autoConnect: false,
  connectors,
  provider
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>

    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}
       theme={darkTheme({
        accentColor: '#7b3fe4',
        accentColorForeground: 'white',
        borderRadius: 'medium',
      })}>
        <Component {...pageProps} />
        <Footer/>
      </RainbowKitProvider>
    </WagmiConfig>
    </ChakraProvider>

  );
}

export default MyApp;
