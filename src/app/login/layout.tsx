export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
  params: { vendorId: string };
}) {
  return <>{children}</>;
}
