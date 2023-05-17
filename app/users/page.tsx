import { prisma } from '@/lib/prisma';
import React from 'react';

import styles from './page.module.css';
import UserCard from '@/components/UserCard/UserCard';
import { FetchError } from '@/lib/exceptions';

export default async function UsersList() {
  // throw new FetchError(); // This will be caught by the ErrorBoundary
  const users = await prisma.user.findMany();
  return (
    <main>
      <h1 className="text-2xl mb-4">
        List of all users in the prisma database
      </h1>
      <pre>{JSON.stringify(users, null, 2)}</pre>

      <div className={styles.grid}>
        {users.map((user) => {
          return <UserCard key={user.id} {...user} />;
        })}
      </div>
    </main>
  );
}
