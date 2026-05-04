import AdminLayout from '@/components/layout/AdminLayout';
import StudentsTab from '@/components/dashboard/tabs/StudentsTab';

export default function StudentsPage() {
  return (
    <AdminLayout>
      <StudentsTab />
    </AdminLayout>
  );
}
