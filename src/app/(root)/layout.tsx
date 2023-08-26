import { redirect } from "next/navigation";

import prisma from "@/lib/prisma";

export default async function SetupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const store = await prisma.vendor.findFirst({});

  if (store) {
    redirect(`/${store.id}`);
  }

  return <>{children}</>;
}
