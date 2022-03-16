import Link from 'next/link';
import { useRouter } from 'next/router';

const links = [
  {
    text: 'index',
    route: '/',
  },
  {
    text: 'public',
    route: '/public',
  },
  {
    text: 'dashboard',
    route: '/dashboard',
  },
  {
    text: 'profile',
    route: '/profile',
  },
  {
    text: 'sign in',
    route: '/signin',
  },
  {
    text: 'sign out',
    route: '/signout',
  },
];

const PageLinks = () => {
  const router = useRouter();

  return (
    <nav>
      <ul>
        {links.map((link) =>
          router.route !== link.route ? (
            <li key={link.text}>
              <Link href={link.route}>{link.text}</Link>
            </li>
          ) : null
        )}
      </ul>
    </nav>
  );
};

export default PageLinks;
