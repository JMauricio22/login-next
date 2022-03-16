import { useAuth } from '@components/AuthProvider';

const UserState = () => {
  const { user } = useAuth();
  return (
    <div>
      <h2>
        User status: <u>{user ? 'Signed in' : 'Not signed in'}</u>{' '}
      </h2>
      {user && (
        <div>
          <p>name: {user.name}</p>
          <p>email: {user.email}</p>
        </div>
      )}
    </div>
  );
};

export default UserState;
