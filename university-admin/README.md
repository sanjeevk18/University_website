# University Admin Panel

Super Admin dashboard for State Allied Healthcare University management system.

## Features

- 🔐 Secure Admin Login
- 👥 Student Management
- 📚 Course Management
- 💰 Fee Management
- 📝 Exam Management
- 📊 Results Management
- 🎓 Certificate Management
- 👨‍🏫 Staff Management
- 📈 Reports & Analytics
- ⚙️ System Settings

## Setup Instructions

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3001](http://localhost:3001) in your browser

## Login Credentials

- **Username**: admin (any username works)
- **Password**: admin (any password works)

## Project Structure

```
university-admin/
├── src/
│   ├── app/
│   │   ├── dashboard/
│   │   │   └── page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx (Login)
│   └── components/
│       ├── auth/
│       │   └── AdminLoginForm.tsx
│       └── dashboard/
│           └── AdminDashboard.tsx
├── package.json
├── next.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI**: React 19

## Admin Dashboard Sections

1. **Overview** - Dashboard with stats and quick actions
2. **Students** - Manage student enrollments and records
3. **Courses** - Create and manage courses
4. **Fees** - Track fee payments and receipts
5. **Exams** - Schedule and manage examinations
6. **Results** - Publish and manage results
7. **Certificates** - Issue and verify certificates
8. **Staff** - Manage faculty and staff
9. **Reports** - Analytics and reports
10. **Settings** - System configuration

## Port Configuration

This admin panel runs on port **3001** to avoid conflicts with the main university website (port 3000).

## Development

- Main website: http://localhost:3000
- Admin panel: http://localhost:3001

Both can run simultaneously!
