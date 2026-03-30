"use client";

import "./globals.css";
import Sidebar from "@/components/Sidebar";
import { getUser } from "@/lib/auth";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const user = getUser();

    // allow login page without auth
    if (!user && pathname !== "/login") {
      router.push("/login");
    }
  }, [pathname]);

  return (
    <html lang="en">
      <body className="bg-gray-50">
        <div className="flex h-screen">
          <Sidebar />
          <main className="flex-1 overflow-y-auto p-6">{children}</main>
        </div>
      </body>
    </html>
  );
}
