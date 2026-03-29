"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [userId, setUserId] = useState("");
  const [role, setRole] = useState("REGISTRAR");
  const router = useRouter();

  const handleLogin = () => {
    localStorage.setItem("userId", userId);
    localStorage.setItem("role", role);
    router.push("/cases/pending");
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-4">Login</h2>

      <input
        className="w-full border p-2 rounded mb-3"
        placeholder="User ID"
        onChange={(e) => setUserId(e.target.value)}
      />

      <select
        className="w-full border p-2 rounded mb-3"
        onChange={(e) => setRole(e.target.value)}
      >
        <option value="REGISTRAR">Registrar</option>
        <option value="JUDGE">Judge</option>
        <option value="LAWYER">Lawyer</option>
      </select>

      <button
        onClick={handleLogin}
        className="bg-blue-600 text-white px-4 py-2 rounded w-full"
      >
        Login
      </button>
    </div>
  );
}
