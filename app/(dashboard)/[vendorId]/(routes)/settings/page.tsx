import { redirect } from "next/navigation";

import prisma from "@/lib/prisma";

import { SettingsForm } from "./components/settings-form";

const SettingsPage = async ({ params }: { params: { vendorId: string } }) => {
  const vendor = await prisma.vendor.findFirst();

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <SettingsForm initialData={vendor} />
      </div>
    </div>
  );
};

export default SettingsPage;
