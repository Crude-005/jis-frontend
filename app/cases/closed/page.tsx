"use client";

import { useState } from "react";
import { API } from "@/lib/api";

export default function ClosedCases() {
  const [cin, setCin] = useState("");
  const [data, setData] = useState<any>(null);

  const handleAccess = async () => {
    const userId = localStorage.getItem("userId");

    const res = await API.post("/cases/access", {
      userId: Number(userId),
      cin,
    });

    setData(res.data);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-4">Browse Closed Case</h2>

      <input
        placeholder="Enter CIN"
        onChange={(e) => setCin(e.target.value)}
        className="w-full border p-2 rounded mb-3"
      />

      <button
        onClick={handleAccess}
        className="bg-blue-600 text-white px-4 py-2 rounded w-full"
      >
        Access Case
      </button>

      {data && (
        <pre className="mt-4 bg-gray-100 p-3 rounded text-sm">
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
    </div>
  );
}
