import type { Metadata } from 'next';
import StudentDashboard from '@/components/student/StudentDashboard';

export const metadata: Metadata = {
  title: 'Student Dashboard | State Allied Healthcare University',
  description: 'Student dashboard - manage your profile, courses, fees, exams, results and certificates.',
};

export default function StudentDashboardPage() {
  return <StudentDashboard />;
}
