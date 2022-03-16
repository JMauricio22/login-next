import PageLinks from '@components/PageLinks';
import UserState from '@components/UserState';

export default function Home() {
  return (
    <div>
      <h1>Index</h1>
      <UserState />
      <PageLinks />
    </div>
  );
}
