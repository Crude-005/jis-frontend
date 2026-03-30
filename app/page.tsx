"use client";

import { getUser } from "@/lib/auth";
import Link from "next/link";

export default function Home() {
  const user = getUser();

  if (!user) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-gray-500">Redirecting...</p>
      </div>
    );
  }

  const role = user.role;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <p className="text-sm text-gray-500">Welcome, {role.toLowerCase()}</p>
      </div>

      {/* Registrar Dashboard */}
      {role === "REGISTRAR" && (
        <div className="grid md:grid-cols-3 gap-6">
          <Link
            href="/cases/create"
            className="bg-white p-6 rounded-xl border hover:shadow-md transition"
          >
            <h2 className="font-semibold">Create Case</h2>
            <p className="text-gray-500 text-sm">Register a new court case</p>
          </Link>

          <Link
            href="/cases/pending"
            className="bg-white p-6 rounded-xl border hover:shadow-md transition"
          >
            <h2 className="font-semibold">Pending Cases</h2>
            <p className="text-gray-500 text-sm">
              View and manage active cases
            </p>
          </Link>

          <div className="bg-white p-6 rounded-xl border">
            <h2 className="font-semibold">Hearings</h2>
            <p className="text-gray-500 text-sm">
              Schedule and manage hearings
            </p>
          </div>
        </div>
      )}

      {/* Judge Dashboard */}
      {role === "JUDGE" && (
        <div className="grid md:grid-cols-2 gap-6">
          <Link
            href="/cases/closed"
            className="bg-white p-6 rounded-xl border hover:shadow-md transition"
          >
            <h2 className="font-semibold">Browse Cases</h2>
            <p className="text-gray-500 text-sm">
              Review past cases for judgment reference
            </p>
          </Link>
        </div>
      )}

      {/* Lawyer Dashboard */}
      {role === "LAWYER" && (
        <div className="grid md:grid-cols-2 gap-6">
          <Link
            href="/cases/closed"
            className="bg-white p-6 rounded-xl border hover:shadow-md transition"
          >
            <h2 className="font-semibold">Browse Cases</h2>
            <p className="text-gray-500 text-sm">
              Access past cases (charges may apply)
            </p>
          </Link>
        </div>
      )}
    </div>
  );
}
