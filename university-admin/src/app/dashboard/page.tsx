import type { Metadata } from 'next';
import AdminDashboard from '@/components/dashboard/AdminDashboard';

export const metadata: Metadata = {
  title: 'Admin Dashboard | SAHU',
  description: 'University admin dashboard - manage all university operations.',
};

export default function DashboardPage() {
  return <AdminDashboard />;
}
