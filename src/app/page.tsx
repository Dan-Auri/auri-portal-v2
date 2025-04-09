'use client';
import { useRouter } from 'next/navigation';

import React from "react";
import { motion } from "framer-motion";

export default function HomePage() {
  const router = useRouter();
  return (
    <div className="relative h-screen w-full bg-black overflow-hidden text-white font-sans">
      {/* Background Stars Placeholder */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-80 animate-pulse" />

      {/* Centered Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold tracking-wide"
        >
          Enter the Portal. Awaken what was never lost.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="mt-6 text-lg md:text-xl max-w-2xl text-gray-300"
        >
          A sacred space for those who remember... or are ready to.
        </motion.p>

        <div className="mt-10 flex flex-col md:flex-row gap-4">
        <button
  onClick={() => router.push('/auth')}
  className="px-8 py-3 text-lg bg-white text-black rounded-xl shadow-md hover:bg-gray-200 transition"
>
  Enter Portal
</button>
          <button className="px-8 py-3 text-lg border border-gray-400 text-gray-300 rounded-xl hover:border-white hover:text-white transition">
            Begin My Awakening
          </button>
        </div>
      </div>

      {/* Optional Footer or Sigil Gate */}
      <div className="absolute bottom-4 right-4 text-xs text-gray-500 cursor-pointer hover:text-white">
        🔒 The Sigil Gate
      </div>
    </div>
  );
}
