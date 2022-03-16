import { useEffect } from 'react';
import { useAuth } from '@components/AuthProvider';
import { useRouter } from 'next/router';

const AuthGuard = ({ children }) => {
  const { user, initializing, setRedirect } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!initializing) {
      if (!user) {
        setRedirect(router.route);
        router.push('/signin');
      }
    }
  }, [initializing, router, user]);

  if (initializing) {
    return <h1>Application Loading</h1>;
  }

  if (!initializing && user) {
    return <>{children}</>;
  }

  return null;
};

export default AuthGuard;
