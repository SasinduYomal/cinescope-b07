export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex-1 bg-green-200 text-black p-4">
        <p>Dashboard Header</p>
      </header>
      <main className="flex-7 bg-amber-200 text-black p-4">
        {children}
      </main>
      <footer className="flex-4 bg-sky-200 text-black p-4">
        <p>Dashboard Footer</p>
      </footer>
    </div>
  );
}