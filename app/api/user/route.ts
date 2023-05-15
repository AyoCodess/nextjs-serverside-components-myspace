import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';

export async function GET() {
  // can do stuff on the server here
  const session = await getServerSession();

  if (!session)
    return NextResponse.redirect('http://localhost:3000/api/auth/signin');

  return NextResponse.json(session);
}
