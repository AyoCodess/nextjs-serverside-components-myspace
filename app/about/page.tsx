import React from 'react';
import { Metadata } from 'next';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '../api/auth/[...nextauth]/route';
// export const dynamic = 'force-static'; // being explicit telling next.js how to handle this page

export const metadata: Metadata = {
  title: 'About',
  description: 'About NextSpace'
};
export default async function About() {
  const session = await getServerSession(authOptions);

  console.log('session 2', session); // console.log('session', session

  if (!session) {
    return redirect('/api/auth/signin');
  }

  return <main>About</main>;
}
