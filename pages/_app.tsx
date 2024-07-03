import "../styles/global.css";

import { Toaster } from "react-hot-toast";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NextLayoutComponentType } from "next";

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
        {getLayout(<Component {...pageProps} />)}
        <Toaster position="bottom-right" />
      </QueryClientProvider>
    </>
  );
}
