"use client";

import { useState } from "react";
import { API } from "@/lib/api";
import { useRouter } from "next/navigation";

export default function CreateCase() {
  const [form, setForm] = useState({
    defendantDetails: "",
    crimeType: "",
    arrestInfo: "",
    prosecutorDetails: "",
  });

  const router = useRouter();

  const handleSubmit = async () => {
    const userId = localStorage.getItem("userId");

    await API.post("/cases", {
      ...form,
      createdBy: Number(userId),
    });

    router.push("/cases/pending");
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-4">Create Case</h2>

      {Object.entries(form).map(([key, value]) => (
        <input
          key={key}
          placeholder={key}
          value={value}
          onChange={(e) => setForm({ ...form, [key]: e.target.value })}
          className="w-full border p-2 rounded mb-3"
        />
      ))}

      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-4 py-2 rounded w-full"
      >
        Submit
      </button>
    </div>
  );
}
