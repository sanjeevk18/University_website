export interface NoticeItem {
  id: string;
  date: string;
  day: string;
  month: string;
  year: string;
  title: string;
  description?: string;
  link?: string;
  category: 'notice' | 'exam' | 'admission' | 'result' | 'general';
  isNew?: boolean;
  priority?: 'high' | 'medium' | 'low';
  createdAt: string;
}

export const noticesData: NoticeItem[] = [
  {
    id: 'N001',
    date: '04',
    day: 'FEB',
    month: 'February',
    year: '2026',
    title: '3rd SEM IA AND TUTORIAL MARKS SCIENCES',
    description: 'Internal Assessment and Tutorial marks for 3rd semester Science students are now available.',
    link: '/notices/N001',
    category: 'notice',
    isNew: true,
    priority: 'high',
    createdAt: '2026-02-04T10:00:00Z',
  },
  {
    id: 'N002',
    date: '27',
    day: 'MAR',
    month: 'March',
    year: '2026',
    title: 'Exam Notification - Mid Semester',
    description: 'Mid-semester examination schedule has been released for all courses.',
    link: '/notices/N002',
    category: 'exam',
    isNew: true,
    priority: 'high',
    createdAt: '2026-03-27T09:00:00Z',
  },
  {
    id: 'N003',
    date: '15',
    day: 'APR',
    month: 'April',
    year: '2026',
    title: 'Admission Notice for New Session 2026-27',
    description: 'Admissions are now open for the academic session 2026-27. Apply before the last date.',
    link: '/admissions/apply',
    category: 'admission',
    isNew: false,
    priority: 'high',
    createdAt: '2026-04-15T08:00:00Z',
  },
  {
    id: 'N004',
    date: '10',
    day: 'APR',
    month: 'April',
    year: '2026',
    title: 'Fee Payment Last Date Extended',
    description: 'The last date for fee payment has been extended to 30th April 2026.',
    link: '/notices/N004',
    category: 'general',
    isNew: false,
    priority: 'medium',
    createdAt: '2026-04-10T11:00:00Z',
  },
  {
    id: 'N005',
    date: '05',
    day: 'APR',
    month: 'April',
    year: '2026',
    title: 'Library Timing Update',
    description: 'Library will remain open from 8 AM to 10 PM during examination period.',
    link: '/notices/N005',
    category: 'general',
    isNew: false,
    priority: 'low',
    createdAt: '2026-04-05T07:00:00Z',
  },
  {
    id: 'N006',
    date: '01',
    day: 'APR',
    month: 'April',
    year: '2026',
    title: 'Annual Sports Day Announcement',
    description: 'Annual Sports Day will be held on 20th May 2026. Registration open now.',
    link: '/notices/N006',
    category: 'general',
    isNew: false,
    priority: 'medium',
    createdAt: '2026-04-01T10:00:00Z',
  },
];

export const examUpdatesData: NoticeItem[] = [
  {
    id: 'E001',
    date: '04',
    day: 'MAY',
    month: 'May',
    year: '2023',
    title: "Vice Chancellor's Internship Scheme - Summer Internship 2023",
    description: 'Applications invited for VC Internship Scheme for summer 2023.',
    link: '/notices/E001',
    category: 'exam',
    isNew: true,
    priority: 'high',
    createdAt: '2023-05-04T09:00:00Z',
  },
  {
    id: 'E002',
    date: '18',
    day: 'MAY',
    month: 'May',
    year: '2026',
    title: 'Final Year Examination Schedule Released',
    description: 'Final year examination schedule for all programs has been published.',
    link: '/notices/E002',
    category: 'exam',
    isNew: true,
    priority: 'high',
    createdAt: '2026-05-18T08:00:00Z',
  },
  {
    id: 'E003',
    date: '25',
    day: 'MAY',
    month: 'May',
    year: '2026',
    title: 'Admit Card Download Available',
    description: 'Students can now download their admit cards from the student portal.',
    link: '/student-portal/admit-card',
    category: 'exam',
    isNew: false,
    priority: 'high',
    createdAt: '2026-05-25T07:00:00Z',
  },
  {
    id: 'E004',
    date: '20',
    day: 'MAY',
    month: 'May',
    year: '2026',
    title: 'Practical Exam Dates Announced',
    description: 'Practical examination dates for all science and engineering courses announced.',
    link: '/notices/E004',
    category: 'exam',
    isNew: false,
    priority: 'medium',
    createdAt: '2026-05-20T10:00:00Z',
  },
  {
    id: 'E005',
    date: '15',
    day: 'MAY',
    month: 'May',
    year: '2026',
    title: 'Re-evaluation Form Submission',
    description: 'Last date for re-evaluation form submission is 31st May 2026.',
    link: '/notices/E005',
    category: 'result',
    isNew: false,
    priority: 'medium',
    createdAt: '2026-05-15T09:00:00Z',
  },
  {
    id: 'E006',
    date: '10',
    day: 'MAY',
    month: 'May',
    year: '2026',
    title: 'Result Declaration Date',
    description: 'Semester results will be declared on 5th June 2026.',
    link: '/notices/E006',
    category: 'result',
    isNew: false,
    priority: 'high',
    createdAt: '2026-05-10T11:00:00Z',
  },
];

// Helper functions
export const getNoticesByCategory = (category: NoticeItem['category']) => {
  return [...noticesData, ...examUpdatesData].filter(notice => notice.category === category);
};

export const getRecentNotices = (limit: number = 5) => {
  return [...noticesData, ...examUpdatesData]
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, limit);
};

export const getNoticeById = (id: string) => {
  return [...noticesData, ...examUpdatesData].find(notice => notice.id === id);
};

export const getNewNotices = () => {
  return [...noticesData, ...examUpdatesData].filter(notice => notice.isNew);
};
