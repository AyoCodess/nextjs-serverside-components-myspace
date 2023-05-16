import React from 'react';

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

// we get excellent performance and fresh data with this approach by using ISR to generate static pages at build time rather than at request time
export async function generateStaticParams() {
  const posts: Post[] = await fetch('http://localhost:3000/api/content').then(
    (res) => res.json()
  );

  return posts.map((post) => ({
    id: post.id
  }));
}

async function getBlogPostBasedOnId({ params }: Params) {
  const posts: Post[] = await fetch('http://localhost:3000/api/content').then(
    (res) => res.json()
  );
  const post = posts.find((post) => post.id === params.id);
  return post;
}

export default async function BlogPostPage({ params }: Params) {
  //deduped
  const post = await getBlogPostBasedOnId({ params });

  if (!post) return <p> no posts</p>;
  return (
    <main>
      <h1 className="text-2xl">{post.title}</h1>
      <p>{post.content}</p>
    </main>
  );
}
