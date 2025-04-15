'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

const db = getFirestore();

export default function AuthForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      if (isRegistering) {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Store name in Firestore
        await setDoc(doc(db, 'users', user.uid), {
          name,
          email,
          createdAt: new Date()
        });
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }

      router.push('/members');
    } 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-black border border-gray-800 rounded-xl text-white shadow-lg">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        {isRegistering ? 'Create Your Portal Key' : 'Enter the Portal'}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {isRegistering && (
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={e => setName(e.target.value)}
            className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded"
            required
          />
        )}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded"
          required
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button
          type="submit"
          className="w-full py-2 bg-white text-black rounded hover:bg-gray-300 transition"
        >
          {isRegistering ? 'Register' : 'Sign In'}
        </button>
      </form>
      <p className="mt-4 text-center text-sm text-gray-400">
        {isRegistering ? 'Already have an account?' : 'Need an account?'}{' '}
        <button onClick={() => setIsRegistering(!isRegistering)} className="underline">
          {isRegistering ? 'Sign In' : 'Register'}
        </button>
      </p>
    </div>
  );
}
