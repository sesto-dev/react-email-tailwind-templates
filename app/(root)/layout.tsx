import { redirect } from "next/navigation";

import prismadb from "@/lib/prisma";

export default async function SetupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const store = await prismadb.vendor.findFirst({});

  if (store) {
    redirect(`/${store.id}`);
  }

  return <>{children}</>;
}
