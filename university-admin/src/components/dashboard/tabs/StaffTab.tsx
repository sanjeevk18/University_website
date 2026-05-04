'use client';

import React, { useState } from 'react';
import { store } from '@/store';

export default function StaffTab() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDepartment, setFilterDepartment] = useState('All');
  const [filterStatus, setFilterStatus] = useState('All');

  const staff = store.staff;

  // Get unique departments
  const departments = ['All', ...Array.from(new Set(staff.map(s => s.department)))];

  // Filter staff
  const filteredStaff = staff.filter(member => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.employeeId.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = filterDepartment === 'All' || member.department === filterDepartment;
    const matchesStatus = filterStatus === 'All' || member.status === filterStatus;
    return matchesSearch && matchesDepartment && matchesStatus;
  });

  const activeCount = staff.filter(s => s.status === 'Active').length;
  const totalSalary = staff.filter(s => s.status === 'Active').reduce((sum, s) => sum + s.salary, 0);
  const avgExperience = staff.reduce((sum, s) => sum + s.experience, 0) / staff.length;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-700';
      case 'Inactive': return 'bg-gray-100 text-gray-700';
      case 'On Leave': return 'bg-yellow-100 text-yellow-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">👨‍🏫 Staff Management</h2>
          <p className="text-gray-500 text-sm mt-1">Manage faculty and staff members</p>
        </div>
        <button className="px-6 py-2.5 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium shadow-md">
          + Add Staff Member
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-5 text-white shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm">Total Staff</p>
              <h3 className="text-3xl font-bold mt-1">{staff.length}</h3>
            </div>
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
              <span className="text-2xl">👥</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-5 text-white shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-sm">Active Staff</p>
              <h3 className="text-3xl font-bold mt-1">{activeCount}</h3>
            </div>
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
              <span className="text-2xl">✅</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-5 text-white shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100 text-sm">Total Salary</p>
              <h3 className="text-2xl font-bold mt-1">₹{(totalSalary / 1000).toFixed(0)}K</h3>
            </div>
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
              <span className="text-2xl">💰</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-5 text-white shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-orange-100 text-sm">Avg Experience</p>
              <h3 className="text-3xl font-bold mt-1">{avgExperience.toFixed(1)} yrs</h3>
            </div>
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
              <span className="text-2xl">⭐</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-md p-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Search Staff</label>
            <input
              type="text"
              placeholder="Search by name, ID or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
            <select
              value={filterDepartment}
              onChange={(e) => setFilterDepartment(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              {departments.map(dept => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="All">All Status</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
              <option value="On Leave">On Leave</option>
            </select>
          </div>
        </div>
      </div>

      {/* Staff Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredStaff.map((member) => (
          <div key={member.id} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-purple-600 font-bold text-lg">{member.name.charAt(0)}</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">{member.name}</h3>
                  <p className="text-xs text-gray-500 font-mono">{member.employeeId}</p>
                </div>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(member.status)}`}>
                {member.status}
              </span>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-sm">
                <span className="text-gray-500">💼</span>
                <span className="font-medium text-gray-800">{member.designation}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-gray-500">🏢</span>
                <span className="text-gray-700">{member.department}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-gray-500">🎓</span>
                <span className="text-gray-700">{member.qualification}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-gray-500">⏱️</span>
                <span className="text-gray-700">{member.experience} years exp.</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-gray-500">📧</span>
                <span className="text-gray-700 text-xs">{member.email}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-gray-500">📞</span>
                <span className="text-gray-700">{member.mobile}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-gray-500">💰</span>
                <span className="font-semibold text-gray-800">₹{member.salary.toLocaleString()}/mo</span>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-4 border-t">
              <button className="flex-1 px-3 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors text-xs font-medium">
                View Profile
              </button>
              <button className="flex-1 px-3 py-2 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-colors text-xs font-medium">
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredStaff.length === 0 && (
        <div className="bg-white rounded-xl shadow-md p-12 text-center">
          <p className="text-gray-500">No staff members found matching your criteria</p>
        </div>
      )}
    </div>
  );
}
