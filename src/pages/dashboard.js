import PageLinks from '@components/PageLinks';
import UserState from '@components/UserState';
import { useAuth } from '@components/AuthProvider';

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <UserState />
      <PageLinks />
    </div>
  );
};

Dashboard.protected = true;

export default Dashboard;
