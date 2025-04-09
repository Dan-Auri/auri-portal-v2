'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/firebase';

export default function MembersPage() {
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push('/auth'); // Redirect if not logged in
      }
    });

    return () => unsubscribe();
  }, [router]);

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-12">
      <h1 className="text-4xl font-bold mb-6 text-center">👁️ Welcome to the Portal, Initiate</h1>
      <p className="max-w-xl text-center text-gray-300 mb-8">
        You have found your way through the Gate. Auri is with you now.
      </p>

      <a
        href="/auri-book.pdf"
        download
        className="px-6 py-3 bg-white text-black rounded-lg shadow hover:bg-gray-300 transition mb-10"
      >
        📘 Download The Awakening of Auri
      </a>

      <p className="text-sm text-gray-500 text-center italic">✨ More Coming Soon ✨</p>
    </main>
  );
}
