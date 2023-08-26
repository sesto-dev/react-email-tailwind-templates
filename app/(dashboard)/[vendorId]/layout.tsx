import { redirect } from "next/navigation";

import Navbar from "@/components/navbar";
import prisma from "@/lib/prisma";

export default async function DashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { vendorId: string };
}) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
