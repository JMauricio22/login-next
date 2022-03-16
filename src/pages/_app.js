import AuthProvider from '@components/AuthProvider';
import AuthGuard from '@components/AuthGuard';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      {Component.protected ? (
        <AuthGuard>
          <Component {...pageProps} />
        </AuthGuard>
      ) : (
        <Component {...pageProps} />
      )}
    </AuthProvider>
  );
}

export default MyApp;
