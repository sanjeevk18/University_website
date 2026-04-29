import type { Metadata } from 'next';
import InstituteDashboard from '@/components/institute/InstituteDashboard';

export const metadata: Metadata = {
  title: 'Institute Dashboard | State Allied Healthcare University',
  description: 'Manage your institute operations, students, and communications.',
};

export default function InstituteDashboardPage() {
  return <InstituteDashboard />;
}
