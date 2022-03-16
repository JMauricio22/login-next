import PageLinks from '@components/PageLinks';
import UserState from '@components/UserState';
import { useAuth } from '@components/AuthProvider';

const Profile = () => {
  return (
    <div>
      <h1>Profile</h1>
      <UserState />
      <PageLinks />
    </div>
  );
};

Profile.protected = true;

export default Profile;
