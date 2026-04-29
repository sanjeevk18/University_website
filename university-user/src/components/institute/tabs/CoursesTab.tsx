'use client';

import React from 'react';
import { getStudentsByInstituteId, getActiveStudentsByCourse } from '@/store/instituteStore';

interface CoursesTabProps {
  instituteId: string;
}

export default function CoursesTab({ instituteId }: CoursesTabProps) {
  const students = getStudentsByInstituteId(instituteId);
  const courseStats = getActiveStudentsByCourse(instituteId);
  
  // Get unique courses with details
  const courses = Array.from(new Set(students.map(s => s.course))).map(courseName => {
    const courseStudents = students.filter(s => s.course === courseName);
    return {
      name: courseName,
      totalStudents: courseStudents.length,
      activeStudents: courseStats[courseName] || 0,
      semesters: Array.from(new Set(courseStudents.map(s => s.semester))),
    };
  });

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">Course Management</h2>
        <p className="text-sm text-gray-600 mt-1">Manage courses and student enrollments</p>
      </div>

      {/* Course Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course, idx) => (
          <div key={idx} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">📚</span>
              </div>
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                Active
              </span>
            </div>
            
            <h3 className="font-bold text-gray-800 mb-2">{course.name}</h3>
            
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Total Students:</span>
                <span className="font-semibold text-gray-800">{course.totalStudents}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Active Students:</span>
                <span className="font-semibold text-green-600">{course.activeStudents}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Semesters:</span>
                <span className="font-semibold text-gray-800">{course.semesters.length}</span>
              </div>
            </div>

            <div className="flex gap-2">
              <button className="flex-1 px-3 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium hover:bg-blue-100">
                View Students
              </button>
              <button className="px-3 py-2 bg-gray-50 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-100">
                Assign
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Available Seats */}
      <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
        <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
          <span>📊</span> Seat Availability
        </h3>
        <div className="space-y-3">
          {courses.map((course, idx) => {
            const totalSeats = 60; // Mock data
            const filledSeats = course.totalStudents;
            const percentage = (filledSeats / totalSeats) * 100;
            
            return (
              <div key={idx} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-gray-800">{course.name}</span>
                  <span className="text-sm text-gray-600">{filledSeats} / {totalSeats} seats</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${
                      percentage >= 90 ? 'bg-red-500' :
                      percentage >= 70 ? 'bg-yellow-500' :
                      'bg-green-500'
                    }`}
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
