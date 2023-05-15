import React from 'react';

// export const dynamic = 'force-dynamic';
// export const revalidate = 420;

interface Post {
  id: string;
  title: string;
  content: string;
  slug: string;
}
interface Params {
  params: { id: string };
}

async function getBlogPostBasedOnSlug({ params }: Params) {
  const posts: Post[] = await fetch('http://localhost:3000/api/content', {
    // cache: 'no-cache'
  }).then((res) => res.json());
  const post = posts.find((post) => post.id === params.id);
  return post;
}

export default async function BlogPostPage({ params }: Params) {
  const post = await getBlogPostBasedOnSlug({ params });

  if (!post) return <p> no posts</p>;
  return (
    <main>
      <h1 className="text-2xl">{post.title}</h1>
      <p>{post.content}</p>
    </main>
  );
}
