export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen w-screen justify-center items-center overflow-hidden bg-slate-100">
      {children}
    </div>
  );
}
