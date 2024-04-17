export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-3">
      <div>Dashboard</div>
      {children}
    </div>
  );
}
