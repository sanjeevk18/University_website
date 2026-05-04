import { studentsData } from '@/data/students';
import { coursesData } from '@/data/courses';
import { feesData } from '@/data/fees';
import { staffData } from '@/data/staff';
import { examsData } from '@/data/exams';
import { resultsData } from '@/data/results';
import { certificatesData } from '@/data/certificates';
import { DashboardStats } from '@/types';

// Central Data Store
export const store = {
  students: studentsData,
  courses: coursesData,
  fees: feesData,
  staff: staffData,
  exams: examsData,
  results: resultsData,
  certificates: certificatesData,
};

// Dashboard Statistics Calculator
export const getDashboardStats = (): DashboardStats => {
  const totalStudents = store.students.length;
  const activeStudents = store.students.filter(s => s.status === 'Active').length;
  const totalCourses = store.courses.filter(c => c.status === 'Active').length;
  
  const totalRevenue = store.fees
    .filter(f => f.status === 'Paid' || f.status === 'Partial')
    .reduce((sum, f) => sum + f.paidAmount, 0);
  
  const pendingFees = store.fees
    .filter(f => f.status === 'Pending' || f.status === 'Partial')
    .reduce((sum, f) => sum + f.pendingAmount, 0);
  
  const totalStaff = store.staff.filter(s => s.status === 'Active').length;

  return {
    totalStudents,
    activeStudents,
    totalCourses,
    totalRevenue,
    pendingFees,
    totalStaff,
    upcomingExams: 5, // Mock data
    pendingApplications: 12, // Mock data
  };
};

// Helper Functions
export const getStudentById = (id: string) => {
  return store.students.find(s => s.id === id);
};

export const getStudentByEnrollment = (enrollmentNo: string) => {
  return store.students.find(s => s.enrollmentNo === enrollmentNo);
};

export const getCourseById = (id: string) => {
  return store.courses.find(c => c.id === id);
};

export const getStaffById = (id: string) => {
  return store.staff.find(s => s.id === id);
};

export const getFeesByStudentId = (studentId: string) => {
  return store.fees.filter(f => f.studentId === studentId);
};

export const getStudentsByCourse = (course: string) => {
  return store.students.filter(s => s.course === course);
};

export const getPendingFees = () => {
  return store.fees.filter(f => f.status === 'Pending' || f.status === 'Partial');
};

export const getActiveStaff = () => {
  return store.staff.filter(s => s.status === 'Active');
};

// Exam Helper Functions
export const getExamById = (id: string) => {
  return store.exams.find(e => e.id === id);
};

export const getExamsByCourse = (course: string) => {
  return store.exams.filter(e => e.course === course);
};

export const getUpcomingExams = () => {
  return store.exams.filter(e => e.status === 'Scheduled');
};

export const getCompletedExams = () => {
  return store.exams.filter(e => e.status === 'Completed');
};

// Result Helper Functions
export const getResultById = (id: string) => {
  return store.results.find(r => r.id === id);
};

export const getResultsByStudentId = (studentId: string) => {
  return store.results.filter(r => r.studentId === studentId);
};

export const getResultsByExamId = (examId: string) => {
  return store.results.filter(r => r.examId === examId);
};

export const getPassedResults = () => {
  return store.results.filter(r => r.result === 'Pass');
};

// Certificate Helper Functions
export const getCertificateById = (id: string) => {
  return store.certificates.find(c => c.id === id);
};

export const getCertificatesByStudentId = (studentId: string) => {
  return store.certificates.filter(c => c.studentId === studentId);
};

export const getIssuedCertificates = () => {
  return store.certificates.filter(c => c.status === 'Issued');
};

export const getPendingCertificates = () => {
  return store.certificates.filter(c => c.status === 'Pending');
};
