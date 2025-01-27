import type {
  NextComponentType,
  NextLayoutComponentType,
  NextPageContext,
} from 'next';
import type { AppProps } from 'next/app';

declare module 'next' {
  type NextLayoutComponentType<P = object> = NextComponentType<
    NextPageContext,
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    any,
    P
  > & {
    getLayout?: (page: ReactNode) => ReactNode;
  };
}

declare module 'next/app' {
  type AppLayoutProps<P = object> = AppProps & {
    Component: NextLayoutComponentType;
  };
}
