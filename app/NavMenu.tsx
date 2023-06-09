import Link from 'next/link';
import styles from './NavMenu.module.css';
import Image from 'next/image';
import { SignInButton, SignOutButton } from '@/components/buttons';
import AuthCheck from '@/components/AuthCheck';

export default function NavMenu() {
  return (
    <nav className={`${styles.nav} p-4 flex-col sm:flex-row sm:h-[70px] `}>
      <Link href={'/'}>
        <Image
          src="/logo.svg" // Route of the image file
          width={216}
          height={30}
          alt="NextSpace Logo"
        />
      </Link>
      <ul className={styles.links}>
        <li>
          <Link href={'/about'}>About</Link>
        </li>
        <li>
          <Link href={'/blog-isr'}>Blog-isr</Link>
        </li>
        <li>
          <Link href={'/blog-static'}>Blog-static</Link>
        </li>
        <li>
          <Link href={'/api/user'}>Auth User</Link>
        </li>
        <li>
          <Link href={'/api/users'}>DB Session</Link>
        </li>
        <li>
          <Link href={'/users'}>DB Users</Link>
        </li>
        <li>
          <Link href={'/dashboard'}>Dashboard</Link>
        </li>
        <li className="ml-4">
          <SignInButton />
        </li>
        <li>
          <AuthCheck>
            <SignOutButton />
          </AuthCheck>
        </li>
      </ul>
    </nav>
  );
}
