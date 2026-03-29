"use client";

import { useEffect, useState } from "react";
import { API } from "@/lib/api";
import { useParams } from "next/navigation";
import { Case } from "@/types/case";

export default function CaseDetails() {
  const { cin } = useParams<{ cin: string }>();
  const [data, setData] = useState<Case | null>(null);

  useEffect(() => {
    API.get(`/cases/${cin}`).then((res) => setData(res.data));
  }, [cin]);

  if (!data) return <p>Loading...</p>;

  const closeCase = async () => {
    await API.post(`/cases/${cin}/close`, {
      judgmentSummary: "Closed via UI",
    });
    alert("Case Closed");
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-4">{cin}</h2>

      <p>
        <b>Defendant:</b> {data.defendantDetails}
      </p>
      <p>
        <b>Crime:</b> {data.crimeType}
      </p>
      <p>
        <b>Status:</b> {data.status}
      </p>

      <div className="flex gap-3 mt-4">
        <button
          onClick={closeCase}
          className="bg-red-600 text-white px-4 py-2 rounded"
        >
          Close Case
        </button>
      </div>
    </div>
  );
}
