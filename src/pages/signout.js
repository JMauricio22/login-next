import { useEffect } from 'react';
import { useAuth } from 'components/AuthProvider';
import PageLinks from 'components/PageLinks';
import UserState from 'components/UserState';

export default function SignOut() {
  const { auth } = useAuth();

  useEffect(() => {
    auth.signout();
  }, [auth]);

  return (
    <div>
      <h1>Sign Out</h1>
      <p>You have been signed out:</p>
      <UserState />
      <PageLinks />
    </div>
  );
}
