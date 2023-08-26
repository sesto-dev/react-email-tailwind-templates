export default async function DashboardLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { vendorId: string };
}) {
  return <>{children}</>;
}
