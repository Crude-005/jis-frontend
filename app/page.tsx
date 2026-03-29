"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="bg-white p-10 rounded-2xl shadow-lg text-center max-w-lg">
        <h1 className="text-3xl font-bold mb-4">
          Judiciary Information System
        </h1>

        <p className="text-gray-600 mb-6">
          Manage court cases, hearings, and historical records efficiently.
        </p>

        <button
          onClick={() => router.push("/login")}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg w-full"
        >
          Enter System
        </button>
      </div>
    </div>
  );
}
