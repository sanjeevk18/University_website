# Institute Dashboard - Complete Implementation

## Overview
A comprehensive Institute/Center management dashboard for affiliated institutes to manage students, fees, exams, and communications with the university.

## Features Implemented

### 1. **Authentication System**
- **Login Page**: `/centers/login`
- **Registration Page**: `/centers/register`
- Dummy login accepts any credentials
- Stores institute data in localStorage
- Redirects to dashboard after login

### 2. **Dashboard Structure**
- **Main Dashboard**: `/centers/dashboard`
- Responsive sidebar navigation
- 11 functional tabs
- Beautiful gradient UI (blue/indigo theme)
- Mobile-friendly with hamburger menu

### 3. **Dashboard Tabs**

#### **Overview Tab** 🏠
- Real-time statistics from store
- Total Students, Active Courses, Fees Collected, Unread Notices
- Quick action buttons
- Recent activities feed
- Pending tasks list

#### **Students Tab** 👥
- Complete student list with search and filters
- Filter by course, status
- Bulk upload option (Excel)
- Export data functionality
- Add new student modal
- View/Edit student details

#### **Courses Tab** 📚
- Course cards with enrollment stats
- Active students per course
- Seat availability visualization
- Progress bars for seat filling
- Assign students to courses

#### **Fees Tab** 💰
- Fee collection summary
- Total, Collected, Pending amounts
- Filter by payment status
- Detailed fee records table
- Update payment functionality

#### **Exams Tab** 📝
- Submit exam forms
- Generate admit cards
- View exam schedule
- Track exam form status
- Recent submissions list

#### **Results Tab** 📊
- View published results
- Upload internal marks
- Pass percentage statistics
- Average CGPA display
- Distinction count

#### **Documents Tab** 📄
- Upload documents (drag & drop)
- Document categories
- Recent uploads list
- Download/Delete files
- Student documents, Attendance, Exam data

#### **Certificates Tab** 🎓
- Request certificates for students
- Track certificate status
- Certificate types: Provisional, Final, Migration, Character, Bonafide
- Status tracking table

#### **Notices Tab** 📢
- University notices and announcements
- Filter by category and priority
- Unread notice indicators
- High/Medium/Low priority badges
- Download notices

#### **Support Tab** 🎫
- Raise support tickets
- Track ticket status
- Ticket statistics
- Contact information
- Email, Phone, Working hours

#### **Profile Tab** 🏢
- Institute information display
- Basic details, Contact info
- Principal details
- Active programs list
- Complete address
- Edit profile functionality

## Data Structure

### Store Location
`university-website/src/store/instituteStore.ts`

### Data Files
- `university-website/src/data/institutes.ts` - Institute data
- `university-website/src/data/instituteStudents.ts` - Student records
- `university-website/src/data/instituteFees.ts` - Fee records
- `university-website/src/data/instituteNotices.ts` - University notices

### Types
`university-website/src/types/institute.ts`
- Institute
- InstituteStudent
- InstituteFeeRecord
- InstituteExamForm
- InstituteNotice
- InstituteSupportTicket
- InstituteCertificateRequest
- InstituteDashboardStats

## Helper Functions in Store

- `getInstituteDashboardStats(instituteId)` - Calculate dashboard statistics
- `getInstituteById(id)` - Get institute by ID
- `getInstituteByCode(code)` - Get institute by code
- `getInstituteByEmail(email)` - Get institute by email
- `getStudentsByInstituteId(instituteId)` - Get all students
- `getStudentByEnrollment(enrollmentNo)` - Find student
- `getFeesByInstituteId(instituteId)` - Get fee records
- `getPendingFeesByInstituteId(instituteId)` - Get pending fees
- `getStudentsByCourse(instituteId, course)` - Filter by course
- `getStudentsByStatus(instituteId, status)` - Filter by status
- `searchStudents(instituteId, searchTerm)` - Search functionality
- `getActiveStudentsByCourse(instituteId)` - Course-wise count
- `getFeeCollectionSummary(instituteId)` - Fee summary

## Dummy Data

### Sample Institute
- **Code**: SAHCU-CTR-2024-001
- **Name**: Lucknow Medical Institute
- **Type**: Nursing College
- **Students**: 10 students across different courses
- **Programs**: B.Sc Nursing, GNM

### Sample Login Credentials
- **User ID**: Any text (e.g., SAHCU-CTR-2024-001)
- **Email**: Any email
- **Password**: Any password

## File Structure

```
university-website/
├── src/
│   ├── app/
│   │   └── centers/
│   │       ├── login/page.tsx
│   │       ├── register/page.tsx
│   │       └── dashboard/page.tsx
│   ├── components/
│   │   ├── centers/
│   │   │   └── CenterAuthForm.tsx
│   │   ├── institute/
│   │   │   ├── InstituteDashboard.tsx
│   │   │   └── tabs/
│   │   │       ├── OverviewTab.tsx
│   │   │       ├── StudentsTab.tsx
│   │   │       ├── CoursesTab.tsx
│   │   │       ├── FeesTab.tsx
│   │   │       ├── ExamsTab.tsx
│   │   │       ├── ResultsTab.tsx
│   │   │       ├── DocumentsTab.tsx
│   │   │       ├── CertificatesTab.tsx
│   │   │       ├── NoticesTab.tsx
│   │   │       ├── SupportTab.tsx
│   │   │       └── ProfileTab.tsx
│   │   └── layout/
│   │       └── ConditionalLayout.tsx (updated)
│   ├── data/
│   │   ├── institutes.ts
│   │   ├── instituteStudents.ts
│   │   ├── instituteFees.ts
│   │   └── instituteNotices.ts
│   ├── store/
│   │   └── instituteStore.ts
│   └── types/
│       └── institute.ts
```

## Key Features

### ✅ Responsive Design
- Mobile-friendly sidebar
- Collapsible navigation
- Touch-friendly buttons
- Responsive tables

### ✅ Real Data Integration
- Connected to central store
- Dynamic statistics
- Filter and search functionality
- Real-time updates

### ✅ User Experience
- Beautiful gradient UI
- Smooth transitions
- Loading states
- Empty states
- Status badges
- Priority indicators

### ✅ Security
- Login required for dashboard
- localStorage session management
- Logout functionality
- Protected routes

## How to Use

1. **Login**
   - Go to `/centers/login`
   - Enter any User ID, Email, Password
   - Click "Sign In to Portal"
   - Redirects to dashboard

2. **Navigate Dashboard**
   - Use sidebar to switch between tabs
   - View statistics on Overview
   - Manage students, fees, exams
   - Track notices and support tickets

3. **Logout**
   - Click "Logout" button in header
   - Redirects to login page
   - Session cleared

## Next Steps (Future Enhancements)

1. **Backend Integration**
   - Connect to real API
   - Database integration
   - Real authentication

2. **Advanced Features**
   - Excel bulk upload implementation
   - PDF generation for reports
   - Email notifications
   - Real-time chat support

3. **Additional Functionality**
   - Student attendance tracking
   - Internal marks upload
   - Exam form submission
   - Certificate generation

## Testing

### Test Login
1. Visit: `http://localhost:3000/centers/login`
2. Enter:
   - User ID: `SAHCU-CTR-2024-001`
   - Email: `admin@lmi.edu.in`
   - Password: `password123`
3. Click "Sign In to Portal"
4. Dashboard loads with dummy data

### Test Features
- ✅ Overview statistics
- ✅ Student list with filters
- ✅ Course management
- ✅ Fee tracking
- ✅ Notices display
- ✅ Support tickets
- ✅ Profile view

## Notes

- Header and Footer are hidden on dashboard routes
- All data is currently dummy/mock data
- Store functions are ready for real API integration
- UI matches admin panel design pattern
- Same folder structure as admin panel for consistency
