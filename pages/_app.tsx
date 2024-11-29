import '../styles/global.css';
import { Chakra_Petch } from 'next/font/google';

import { Toaster } from 'react-hot-toast';

import type { NextLayoutComponentType } from 'next';

const chakra = Chakra_Petch({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

export default function Nextra({
  Component,
  pageProps,
}: {
  Component: NextLayoutComponentType;
  pageProps: object;
}) {
  const getLayout = Component.getLayout || ((page: React.ReactElement) => page);
  return (
    <main className={chakra.className}>
      {getLayout(<Component {...pageProps} />)}
      <Toaster position="bottom-right" />
    </main>
  );
}
