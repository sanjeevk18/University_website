# Data Store Documentation

## Notices Data Structure

### Location
- **File**: `src/data/notices.ts`
- **Store Export**: `src/store/index.ts`

### Interface: `NoticeItem`

```typescript
interface NoticeItem {
  id: string;              // Unique identifier (e.g., "N001", "E001")
  date: string;            // Day of month (e.g., "04")
  day: string;             // Month abbreviation (e.g., "FEB")
  month: string;           // Full month name (e.g., "February")
  year: string;            // Year (e.g., "2026")
  title: string;           // Notice title
  description?: string;    // Optional detailed description
  link?: string;           // Optional link to full notice
  category: 'notice' | 'exam' | 'admission' | 'result' | 'general';
  isNew?: boolean;         // Show "NEW" badge
  priority?: 'high' | 'medium' | 'low';
  createdAt: string;       // ISO date string
}
```

### Data Arrays

1. **`noticesData`** - General notices and announcements
2. **`examUpdatesData`** - Exam-related updates

### Helper Functions

#### `getNoticesByCategory(category)`
Get all notices filtered by category.

```typescript
const examNotices = getNoticesByCategory('exam');
```

#### `getRecentNotices(limit)`
Get most recent notices sorted by date.

```typescript
const latest5 = getRecentNotices(5);
```

#### `getNoticeById(id)`
Get a specific notice by ID.

```typescript
const notice = getNoticeById('N001');
```

#### `getNewNotices()`
Get all notices marked as new.

```typescript
const newNotices = getNewNotices();
```

## Usage Example

```typescript
import { noticesData, examUpdatesData, getRecentNotices } from '@/store';

// Use in component
export default function MyComponent() {
  const notices = noticesData;
  const exams = examUpdatesData;
  const recent = getRecentNotices(3);
  
  return (
    <div>
      {notices.map(notice => (
        <div key={notice.id}>{notice.title}</div>
      ))}
    </div>
  );
}
```

## Adding New Notices

To add a new notice, edit `src/data/notices.ts`:

```typescript
{
  id: 'N007',                    // Increment ID
  date: '20',
  day: 'JUN',
  month: 'June',
  year: '2026',
  title: 'Your Notice Title',
  description: 'Detailed description',
  link: '/notices/N007',
  category: 'general',           // Choose appropriate category
  isNew: true,                   // Mark as new
  priority: 'high',              // Set priority
  createdAt: '2026-06-20T10:00:00Z',
}
```

## Categories

- **notice**: General university notices
- **exam**: Examination-related updates
- **admission**: Admission announcements
- **result**: Result declarations
- **general**: Other announcements

## Priority Levels

- **high**: Important/urgent notices (shown prominently)
- **medium**: Regular notices
- **low**: Informational notices
