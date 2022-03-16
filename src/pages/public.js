import UserState from '@components/UserState';
import PageLinks from '@components/PageLinks';

const Public = () => {
  return (
    <div>
      <h1>Public page</h1>
      <p>This page is available for everyone</p>
      <UserState />
      <PageLinks />
    </div>
  );
};

export default Public;
