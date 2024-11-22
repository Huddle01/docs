import '../styles/global.css';

import { Toaster } from 'react-hot-toast';

import { NextLayoutComponentType } from 'next';

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
      {getLayout(<Component {...pageProps} />)}
      <Toaster position="bottom-right" />
    </>
  );
}
