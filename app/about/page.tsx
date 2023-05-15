import React from 'react';
import { Metadata } from 'next';
export const dynamic = 'force-static'; // being explicit telling next.js how to handle this page

export const metadata: Metadata = {
  title: 'About',
  description: 'About NextSpace'
};
export default async function About() {
  return <main>About</main>;
}
