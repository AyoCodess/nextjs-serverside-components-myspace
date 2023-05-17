import { SignOutButton } from '@/components/buttons';
import { ProfileForm } from './ProfileForm';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { prisma } from '@/lib/prisma';

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/api/auth/signin');
  }

  const currentUserEmail = session?.user?.email!;

  console.log('SESSION', session);
  const user = await prisma.user.findUnique({
    where: {
      email: currentUserEmail
    }
  });

  return (
    <div className=" flex items-center justify-center">
      <div className="p-4 w-1/3 my-6 h-fit bg-gray-100 shadow">
        <h1 className="text-2xl mb-2">Dashboard</h1>
        <SignOutButton />
        <ProfileForm user={user} />
      </div>
    </div>
  );
}
