import { NextResponse } from 'next/server';

const posts = [
  {
    id: '1',
    title: 'Lorem Ipsum',
    slug: 'lorem-ipsum',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.'
  },
  {
    id: '2',
    title: 'Dolor Sit Amet',
    slug: 'dolor-sit-amet',
    content:
      'Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.'
  },
  {
    id: '3',
    title: 'Consectetur Adipiscing',
    slug: 'consectetur-adipiscing',
    content:
      'Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.'
  },
  {
    id: '4',
    title: 'Integer Nec Odio',
    slug: 'integer-nec-odio',
    content:
      'Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent.'
  },
  {
    id: '5',
    title: 'Praesent Libero',
    slug: 'praesent-libero',
    content:
      'Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna.'
  }
];

export async function GET() {
  // can do stuff on the server here
  return NextResponse.json(posts);
}


