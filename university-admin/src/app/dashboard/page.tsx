import AdminLayout from '@/components/layout/AdminLayout';
import OverviewTab from '@/components/dashboard/tabs/OverviewTab';

export default function DashboardPage() {
  return (
    <AdminLayout>
      <OverviewTab />
    </AdminLayout>
  );
}
