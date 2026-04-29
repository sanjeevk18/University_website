import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Academic Calendar 2024-25 | State Allied Healthcare University',
  description:
    'View the complete academic calendar for 2024-25 at State Allied Healthcare University, Lucknow — including semester dates, exams, holidays, and important events.',
};

interface CalendarEvent {
  date: string;
  event: string;
  type: 'academic' | 'exam' | 'holiday' | 'admission' | 'event';
}

const semester1: CalendarEvent[] = [
  { date: 'July 15, 2024',      event: 'Commencement of Odd Semester (Sem I, III, V)',  type: 'academic'   },
  { date: 'July 20, 2024',      event: 'Last Date for Admission (UG Programs)',          type: 'admission'  },
  { date: 'August 15, 2024',    event: 'Independence Day (Holiday)',                     type: 'holiday'    },
  { date: 'August 20, 2024',    event: 'Freshers\' Orientation & Welcome Week',          type: 'event'      },
  { date: 'September 5, 2024',  event: 'Teachers\' Day Celebration',                     type: 'event'      },
  { date: 'September 15, 2024', event: 'Mid-Semester Internal Assessment Begins',        type: 'exam'       },
  { date: 'September 25, 2024', event: 'Mid-Semester Internal Assessment Ends',          type: 'exam'       },
  { date: 'October 2, 2024',    event: 'Gandhi Jayanti (Holiday)',                       type: 'holiday'    },
  { date: 'October 10, 2024',   event: 'Annual Sports Meet',                             type: 'event'      },
  { date: 'October 24, 2024',   event: 'Dussehra (Holiday)',                             type: 'holiday'    },
  { date: 'November 1, 2024',   event: 'End-Semester Practical Examinations Begin',      type: 'exam'       },
  { date: 'November 1, 2024',   event: 'Diwali Vacation (Nov 1–5)',                      type: 'holiday'    },
  { date: 'November 15, 2024',  event: 'End-Semester Theory Examinations Begin',         type: 'exam'       },
  { date: 'November 30, 2024',  event: 'End-Semester Examinations End',                  type: 'exam'       },
  { date: 'December 1, 2024',   event: 'Winter Vacation Begins',                         type: 'holiday'    },
];

const semester2: CalendarEvent[] = [
  { date: 'January 2, 2025',    event: 'Commencement of Even Semester (Sem II, IV, VI)', type: 'academic'   },
  { date: 'January 10, 2025',   event: 'Last Date for Admission (PG Programs)',          type: 'admission'  },
  { date: 'January 26, 2025',   event: 'Republic Day (Holiday)',                         type: 'holiday'    },
  { date: 'February 10, 2025',  event: 'Annual Cultural Fest – MediCultura 2025',        type: 'event'      },
  { date: 'February 28, 2025',  event: 'Mid-Semester Internal Assessment Begins',        type: 'exam'       },
  { date: 'March 10, 2025',     event: 'Mid-Semester Internal Assessment Ends',          type: 'exam'       },
  { date: 'March 14, 2025',     event: 'Holi (Holiday)',                                 type: 'holiday'    },
  { date: 'March 25, 2025',     event: 'National Science Day Seminar',                   type: 'event'      },
  { date: 'April 5, 2025',      event: 'End-Semester Practical Examinations Begin',      type: 'exam'       },
  { date: 'April 14, 2025',     event: 'Dr. Ambedkar Jayanti (Holiday)',                 type: 'holiday'    },
  { date: 'April 20, 2025',     event: 'End-Semester Theory Examinations Begin',         type: 'exam'       },
  { date: 'May 10, 2025',       event: 'End-Semester Examinations End',                  type: 'exam'       },
  { date: 'May 15, 2025',       event: 'Result Declaration',                             type: 'academic'   },
  { date: 'May 20, 2025',       event: 'Annual Convocation Ceremony',                    type: 'event'      },
  { date: 'May 25, 2025',       event: 'Summer Vacation Begins',                         type: 'holiday'    },
];

const typeConfig = {
  academic:  { label: 'Academic',  bg: 'bg-blue-100',   text: 'text-blue-700',   dot: 'bg-blue-500',   border: 'border-blue-200'   },
  exam:      { label: 'Exam',      bg: 'bg-red-100',    text: 'text-red-700',    dot: 'bg-red-500',    border: 'border-red-200'    },
  holiday:   { label: 'Holiday',   bg: 'bg-green-100',  text: 'text-green-700',  dot: 'bg-green-500',  border: 'border-green-200'  },
  admission: { label: 'Admission', bg: 'bg-orange-100', text: 'text-orange-700', dot: 'bg-orange-500', border: 'border-orange-200' },
  event:     { label: 'Event',     bg: 'bg-purple-100', text: 'text-purple-700', dot: 'bg-purple-500', border: 'border-purple-200' },
};

function EventRow({ item }: { item: CalendarEvent }) {
  const cfg = typeConfig[item.type];
  return (
    <div className={`flex items-center gap-4 p-4 rounded-xl border ${cfg.border} bg-white hover:shadow-sm transition-shadow`}>
      <div className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${cfg.dot}`} />
      <div className="flex-1 min-w-0">
        <div className="text-sm font-medium text-gray-800">{item.event}</div>
        <div className="text-xs text-gray-500 mt-0.5">{item.date}</div>
      </div>
      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full flex-shrink-0 ${cfg.bg} ${cfg.text}`}>
        {cfg.label}
      </span>
    </div>
  );
}

const CalendarPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-700 to-teal-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
              📅 Academic Calendar
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Academic Calendar 2024–25
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Stay on top of important dates — semester schedules, examinations, holidays,
              and university events for the academic year 2024–25.
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b">
        <div className="container mx-auto px-4 py-3">
          <nav className="text-sm text-gray-500 flex items-center space-x-2">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-400">Academics</span>
            <span>/</span>
            <span className="text-gray-800 font-medium">Academic Calendar</span>
          </nav>
        </div>
      </div>

      {/* Legend */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {Object.entries(typeConfig).map(([key, cfg]) => (
              <div key={key} className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${cfg.dot}`} />
                <span className="text-sm text-gray-700 font-medium">{cfg.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calendar Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

            {/* Odd Semester */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold">
                  I
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Odd Semester</h2>
                  <p className="text-gray-500 text-sm">July 2024 – December 2024</p>
                </div>
              </div>
              <div className="space-y-3">
                {semester1.map((item, i) => (
                  <EventRow key={i} item={item} />
                ))}
              </div>
            </div>

            {/* Even Semester */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-teal-600 rounded-xl flex items-center justify-center text-white font-bold">
                  II
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">Even Semester</h2>
                  <p className="text-gray-500 text-sm">January 2025 – May 2025</p>
                </div>
              </div>
              <div className="space-y-3">
                {semester2.map((item, i) => (
                  <EventRow key={i} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Summary Cards */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Academic Year at a Glance
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { icon: '📚', label: 'Teaching Days', value: '180+', color: 'blue' },
              { icon: '📝', label: 'Exam Periods', value: '4', color: 'red' },
              { icon: '🎉', label: 'Public Holidays', value: '14', color: 'green' },
              { icon: '🏆', label: 'University Events', value: '8+', color: 'purple' },
            ].map((card) => (
              <div key={card.label} className="bg-white rounded-2xl p-6 shadow-sm text-center">
                <div className="text-4xl mb-3">{card.icon}</div>
                <div className="text-3xl font-bold text-gray-800 mb-1">{card.value}</div>
                <div className="text-gray-600 text-sm">{card.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Important Notes</h2>
          <div className="space-y-4">
            {[
              'The academic calendar is subject to change. Students are advised to check the university notice board and official website regularly.',
              'Examination schedules will be notified separately by the Examination Department at least 30 days in advance.',
              'Attendance of minimum 75% is mandatory for all theory and practical classes to be eligible for examinations.',
              'University reserves the right to reschedule holidays and events due to unforeseen circumstances.',
              'Students must clear all dues before the commencement of end-semester examinations.',
            ].map((note, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
                <span className="text-yellow-600 font-bold text-sm flex-shrink-0 mt-0.5">⚠</span>
                <p className="text-gray-700 text-sm leading-relaxed">{note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download / Contact */}
      <section className="py-16 bg-blue-700 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Need the Full Calendar?</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            Download the complete academic calendar PDF or contact the academic office for
            program-specific schedules.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-blue-700 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download PDF
            </button>
            <Link
              href="/contact"
              className="border border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition-colors"
            >
              Contact Academic Office
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CalendarPage;
