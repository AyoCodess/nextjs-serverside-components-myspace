import FollowButton from '@/components/FollowButton/FollowButton';
import { prisma } from '@/lib/prisma';
import { Metadata } from 'next';


export const dynamic = 'force-dynamic';

interface Props {
  params: {
    id: string;
  };
}
const wait = () => new Promise((resolve) => setTimeout(resolve, 5000));

// this page is extremely dynamic, so we need to generate metadata on the fly based on the user's id
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const user = await prisma.user.findUnique({ where: { id: params.id } });
  return { title: `User profile of ${user?.name}` };
}

export default async function UserProfile({ params }: Props) {
  await wait();
  const user = await prisma.user.findUnique({ where: { id: params.id } });
  const { name, bio, image, id } = user ?? {};

  return (
    <div className="p-5 shadow-sm bg-white w-fit">
      <h1>{name}</h1>

      <img
        width={300}
        src={image ?? '/mememan.webp'}
        alt={`${name}'s profile`}
      />

      <h3>Bio</h3>
      <p>{bio}</p>

      {/* @ts-expect-error Server Component */}
      <FollowButton targetUserId={params.id} />
    </div>
  );
}
