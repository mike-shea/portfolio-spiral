import '../styles/globals.css';
import type { AppProps } from 'next/app';

import { AnimatePresence } from 'framer-motion';
import { MouseProvider } from '../contexts/mouse-context';
import useLoading from '../hooks/useLoading';
import LoadingScreen from '../components/LoadingScreen';

function MyApp({ Component, pageProps, router }: AppProps) {
  const isLoading = useLoading(router);

  return (
    <MouseProvider>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen />
        ) : (
          <Component key={`${router.route}-${new Date().getMilliseconds()}`} {...pageProps} />
        )}
      </AnimatePresence>
    </MouseProvider>
  );
}

export default MyApp;
