'use client';

import React, { useState } from 'react';
import { coursesData, getFaculties, getCoursesByFaculty, searchCourses } from '@/data/courses';

export default function CoursesPage() {
  const [selectedFaculty, setSelectedFaculty] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const faculties = ['All', ...getFaculties()];
  
  const filteredCourses = searchQuery
    ? searchCourses(searchQuery)
    : selectedFaculty === 'All'
    ? coursesData
    : getCoursesByFaculty(selectedFaculty);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">Our Courses</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive range of healthcare and allied medical science programs
          </p>
          <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-500">
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-semibold">
              {filteredCourses.length} Courses Available
            </span>
            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full font-semibold">
              {faculties.length - 1} Faculties
            </span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search courses by name, code, or faculty..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 pr-12 rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none text-lg shadow-lg"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-2xl">🔍</span>
          </div>
        </div>

        {/* Faculty Filter */}
        <div className="mb-8 overflow-x-auto">
          <div className="flex gap-3 justify-center flex-wrap">
            {faculties.map((faculty) => (
              <button
                key={faculty}
                onClick={() => {
                  setSelectedFaculty(faculty);
                  setSearchQuery('');
                }}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 whitespace-nowrap ${
                  selectedFaculty === faculty
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border-2 border-gray-200'
                }`}
              >
                {faculty}
              </button>
            ))}
          </div>
        </div>

        {/* Courses Table */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">S.No.</th>
                  <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">Course Code</th>
                  <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">Course Name</th>
                  <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">Duration</th>
                  <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">Faculty</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredCourses.length > 0 ? (
                  filteredCourses.map((course, index) => (
                    <tr
                      key={course.sNo}
                      className="hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-colors duration-200"
                    >
                      <td className="px-6 py-4 text-sm font-semibold text-gray-700">{index + 1}</td>
                      <td className="px-6 py-4">
                        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-lg font-mono text-sm font-bold">
                          {course.courseCode}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm font-semibold text-gray-800">{course.courseName}</td>
                      <td className="px-6 py-4">
                        <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-lg text-sm font-semibold">
                          {course.duration}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">{course.faculty}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="px-6 py-12 text-center">
                      <div className="text-gray-400">
                        <span className="text-6xl mb-4 block">🔍</span>
                        <p className="text-xl font-semibold">No courses found</p>
                        <p className="text-sm mt-2">Try adjusting your search or filter</p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white shadow-xl">
            <div className="text-4xl mb-2">📚</div>
            <div className="text-3xl font-bold">{coursesData.length}</div>
            <div className="text-blue-100">Total Courses</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white shadow-xl">
            <div className="text-4xl mb-2">🏛️</div>
            <div className="text-3xl font-bold">{faculties.length - 1}</div>
            <div className="text-purple-100">Faculties</div>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white shadow-xl">
            <div className="text-4xl mb-2">⏱️</div>
            <div className="text-3xl font-bold">1-4.5</div>
            <div className="text-green-100">Years Duration</div>
          </div>
        </div>
      </div>
    </div>
  );
}
