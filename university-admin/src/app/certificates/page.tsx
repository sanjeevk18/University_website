import AdminLayout from '@/components/layout/AdminLayout';
import CertificatesTab from '@/components/dashboard/tabs/CertificatesTab';

export default function CertificatesPage() {
  return (
    <AdminLayout>
      <CertificatesTab />
    </AdminLayout>
  );
}
