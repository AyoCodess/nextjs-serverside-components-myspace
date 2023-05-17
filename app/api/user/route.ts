import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';
import { authOptions } from '../auth/[...nextauth]/route';
import { prisma } from '@/lib/prisma';

export async function GET() {
  // can do stuff on the server here
  const session = await getServerSession(authOptions);

  console.log(session);

  if (!session)
    return NextResponse.redirect('http://localhost:3000/api/auth/signin');

  return NextResponse.json(session);
}

export async function PUT(req: NextRequest) {
  const session = await getServerSession(authOptions);

  const currentEmail = session?.user?.email!;

  const data = await req.json();
  data.age = Number(data.age);

  const user = await prisma.user.update({
    where: {
      email: currentEmail
    },
    data
  });

  return NextResponse.json(session);
}

export async function POST(req: NextRequest) {
  const session = await getServerSession();
  const currentUserEmail = session?.user?.email!;
  const { targetUserId } = await req.json();

  const currentUserId = await prisma.user
    .findUnique({ where: { email: currentUserEmail } })
    .then((user) => user?.id!);

  const record = await prisma.follows.create({
    data: {
      followerId: currentUserId,
      followingId: targetUserId
    }
  });

  return NextResponse.json(record);
}

export async function DELETE(req: NextRequest) {
  const session = await getServerSession(authOptions);
  const currentUserEmail = session?.user?.email!;
  const targetUserId = req.nextUrl.searchParams.get('targetUserId');

  const currentUserId = await prisma.user
    .findUnique({ where: { email: currentUserEmail } })
    .then((user) => user?.id!);

  const record = await prisma.follows.delete({
    where: {
      followerId_followingId: {
        followerId: currentUserId,
        followingId: targetUserId!
      }
    }
  });

  return NextResponse.json(record);
}
