"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [userId, setUserId] = useState("");
  const [role, setRole] = useState("REGISTRAR");
  const router = useRouter();

  const login = () => {
    if (!userId) return alert("Enter userId");

    localStorage.setItem("userId", userId);
    localStorage.setItem("role", role);

    router.push("/");
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded-xl border w-80 space-y-4">
        <h2 className="text-xl font-semibold text-center">Login to JIS</h2>

        <input
          className="w-full border p-2 rounded"
          placeholder="User ID"
          onChange={(e) => setUserId(e.target.value)}
        />

        <select
          className="w-full border p-2 rounded"
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="REGISTRAR">Registrar</option>
          <option value="JUDGE">Judge</option>
          <option value="LAWYER">Lawyer</option>
        </select>

        <button
          onClick={login}
          className="bg-blue-600 text-white w-full py-2 rounded"
        >
          Login
        </button>
      </div>
    </div>
  );
}
