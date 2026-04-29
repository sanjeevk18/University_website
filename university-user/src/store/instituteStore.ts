import { institutesData } from '@/data/institutes';
import { instituteStudentsData } from '@/data/instituteStudents';
import { instituteFeesData } from '@/data/instituteFees';
import { instituteNoticesData } from '@/data/instituteNotices';
import { InstituteDashboardStats } from '@/types/institute';

// Central Institute Data Store
export const instituteStore = {
  institutes: institutesData,
  students: instituteStudentsData,
  fees: instituteFeesData,
  notices: instituteNoticesData,
};

// Dashboard Statistics Calculator for Institute
export const getInstituteDashboardStats = (instituteId: string): InstituteDashboardStats => {
  const instituteStudents = instituteStore.students.filter(s => s.instituteId === instituteId);
  const instituteFees = instituteStore.fees.filter(f => f.instituteId === instituteId);
  
  const totalStudents = instituteStudents.length;
  const activeStudents = instituteStudents.filter(s => s.status === 'Active').length;
  
  // Get unique courses for this institute
  const activeCourses = Array.from(new Set(instituteStudents.map(s => s.course))).length;
  
  const totalFeesCollected = instituteFees
    .filter(f => f.status === 'Paid' || f.status === 'Partial')
    .reduce((sum, f) => sum + f.paidAmount, 0);
  
  const pendingFees = instituteFees
    .filter(f => f.status === 'Pending' || f.status === 'Partial')
    .reduce((sum, f) => sum + f.pendingAmount, 0);
  
  const unreadNotices = instituteStore.notices.filter(n => !n.isRead).length;

  return {
    totalStudents,
    activeStudents,
    activeCourses,
    totalFeesCollected,
    pendingFees,
    pendingExamForms: 3, // Mock data
    pendingCertificates: 2, // Mock data
    unreadNotices,
  };
};

// Helper Functions for Institute

// Get institute by ID
export const getInstituteById = (id: string) => {
  return instituteStore.institutes.find(i => i.id === id);
};

// Get institute by code
export const getInstituteByCode = (code: string) => {
  return instituteStore.institutes.find(i => i.instituteCode === code);
};

// Get institute by email
export const getInstituteByEmail = (email: string) => {
  return instituteStore.institutes.find(i => i.email === email);
};

// Get all students for an institute
export const getStudentsByInstituteId = (instituteId: string) => {
  return instituteStore.students.filter(s => s.instituteId === instituteId);
};

// Get student by enrollment number
export const getStudentByEnrollment = (enrollmentNo: string) => {
  return instituteStore.students.find(s => s.enrollmentNo === enrollmentNo);
};

// Get student by ID
export const getStudentById = (id: string) => {
  return instituteStore.students.find(s => s.id === id);
};

// Get fees for a specific institute
export const getFeesByInstituteId = (instituteId: string) => {
  return instituteStore.fees.filter(f => f.instituteId === instituteId);
};

// Get fees for a specific student
export const getFeesByStudentId = (studentId: string) => {
  return instituteStore.fees.filter(f => f.studentId === studentId);
};

// Get pending fees for an institute
export const getPendingFeesByInstituteId = (instituteId: string) => {
  return instituteStore.fees.filter(
    f => f.instituteId === instituteId && (f.status === 'Pending' || f.status === 'Partial')
  );
};

// Get students by course
export const getStudentsByCourse = (instituteId: string, course: string) => {
  return instituteStore.students.filter(
    s => s.instituteId === instituteId && s.course === course
  );
};

// Get students by status
export const getStudentsByStatus = (instituteId: string, status: string) => {
  return instituteStore.students.filter(
    s => s.instituteId === instituteId && s.status === status
  );
};

// Get students by fees status
export const getStudentsByFeesStatus = (instituteId: string, feesStatus: string) => {
  return instituteStore.students.filter(
    s => s.instituteId === instituteId && s.feesStatus === feesStatus
  );
};

// Get unread notices
export const getUnreadNotices = () => {
  return instituteStore.notices.filter(n => !n.isRead);
};

// Get notices by category
export const getNoticesByCategory = (category: string) => {
  return instituteStore.notices.filter(n => n.category === category);
};

// Get notices by priority
export const getNoticesByPriority = (priority: string) => {
  return instituteStore.notices.filter(n => n.priority === priority);
};

// Search students by name or enrollment
export const searchStudents = (instituteId: string, searchTerm: string) => {
  const term = searchTerm.toLowerCase();
  return instituteStore.students.filter(
    s => s.instituteId === instituteId && 
    (s.name.toLowerCase().includes(term) || 
     s.enrollmentNo.toLowerCase().includes(term))
  );
};

// Get active students count by course
export const getActiveStudentsByCourse = (instituteId: string) => {
  const students = getStudentsByInstituteId(instituteId).filter(s => s.status === 'Active');
  const courseCount: { [key: string]: number } = {};
  
  students.forEach(student => {
    courseCount[student.course] = (courseCount[student.course] || 0) + 1;
  });
  
  return courseCount;
};

// Get fee collection summary
export const getFeeCollectionSummary = (instituteId: string) => {
  const fees = getFeesByInstituteId(instituteId);
  
  return {
    totalAmount: fees.reduce((sum, f) => sum + f.totalAmount, 0),
    collectedAmount: fees.reduce((sum, f) => sum + f.paidAmount, 0),
    pendingAmount: fees.reduce((sum, f) => sum + f.pendingAmount, 0),
    paidCount: fees.filter(f => f.status === 'Paid').length,
    pendingCount: fees.filter(f => f.status === 'Pending').length,
    partialCount: fees.filter(f => f.status === 'Partial').length,
  };
};
