import { redirect } from 'next/navigation'
import { requireAdmin } from '@/lib/auth'
import AdminSidebar from "@/components/admin/AdminSidebar";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  try {
    await requireAdmin()
  } catch {
    redirect('/auth/signin?callbackUrl=/admin')
  }

  return (
    <div className="flex min-h-screen bg-gray-100/50">
      <AdminSidebar />
      <main className="flex-1 p-4 sm:p-6 lg:p-8">{children}</main>
    </div>
  );
}
