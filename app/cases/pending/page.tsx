"use client";

import { useEffect, useState } from "react";
import { API } from "@/lib/api";
import { Case } from "@/types/case";
import Link from "next/link";

export default function PendingCases() {
  const [cases, setCases] = useState<Case[]>([]);

  useEffect(() => {
    API.get("/cases/pending")
      .then((res) => setCases(res.data))
      .catch(console.error);
  }, []);

  return (
    <div>
      <div className="flex justify-between mb-4">
        <h2 className="text-2xl font-semibold">Pending Cases</h2>
        <Link
          href="/cases/create"
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          + New Case
        </Link>
      </div>

      <div className="grid gap-4">
        {cases.map((c) => (
          <Link
            key={c.cin}
            href={`/cases/${c.cin}`}
            className="bg-white p-4 rounded-xl shadow hover:bg-gray-50"
          >
            <p className="font-medium">{c.cin}</p>
            <p className="text-sm text-gray-600">{c.defendantDetails}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
