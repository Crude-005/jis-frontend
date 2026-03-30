"use client";

import { useState } from "react";
import { API } from "@/lib/api";
import { useRouter } from "next/navigation";

export default function CreateCase() {
  const [form, setForm] = useState<any>({});
  const router = useRouter();

  const submit = async () => {
    const userId = localStorage.getItem("userId");

    await API.post("/cases", {
      ...form,
      createdBy: Number(userId),
    });

    router.push("/cases/pending");
  };

  return (
    <div className="max-w-xl space-y-4">
      <h1 className="text-2xl font-semibold">Create Case</h1>

      <input className="w-full border p-2 rounded" placeholder="Defendant"
        onChange={(e)=>setForm({...form, defendantDetails:e.target.value})} />

      <input className="w-full border p-2 rounded" placeholder="Crime Type"
        onChange={(e)=>setForm({...form, crimeType:e.target.value})} />

      <input className="w-full border p-2 rounded" placeholder="Arrest Info"
        onChange={(e)=>setForm({...form, arrestInfo:e.target.value})} />

      <input className="w-full border p-2 rounded" placeholder="Prosecutor"
        onChange={(e)=>setForm({...form, prosecutorDetails:e.target.value})} />

      <button onClick={submit} className="bg-blue-600 text-white px-4 py-2 rounded">
        Create
      </button>
    </div>
  );
}
