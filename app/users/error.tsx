'use client'; // Error components must be Client components

import { useEffect } from 'react';

export default function Error({
  error,
  reset
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="bg-white flex flex-col items-center justify-center h-screen gap-5">
      <h2>{error.message}</h2>
      <button
        className="shadow bg-blue-500 p-2 text-white"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
