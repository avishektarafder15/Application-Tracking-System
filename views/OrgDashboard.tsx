
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, PieChart, Pie } from 'recharts';
import { DASHBOARD_STATS, MOCK_RECRUITERS } from '../constants';
import { UserRole } from '../types';

const funnelData = [
  { name: 'Applied', value: 450, color: '#3b82f6' },
  { name: 'Shortlisted', value: 280, color: '#6366f1' },
  { name: 'Interview', value: 120, color: '#8b5cf6' },
  { name: 'Selected', value: 18, color: '#10b981' },
];

const jobDistribution = [
  { name: 'Frontend', count: 145 },
  { name: 'Backend', count: 88 },
  { name: 'Sales', count: 112 },
  { name: 'Interns', count: 65 },
  { name: 'HR', count: 40 },
];

const OrgDashboard: React.FC = () => {
  const stats = DASHBOARD_STATS[UserRole.ORG_OWNER];

  return (
    <div className="space-y-6">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <KpiCard title="Active Opportunities" value={stats.activeOpportunities} trend="+2 new today" icon="🧾" />
        <KpiCard title="Total Applications" value={stats.totalApplications} trend="+12% from last week" icon="👥" subtext="Last 30 days" />
        <KpiCard title="Interviews Scheduled" value={stats.interviewsScheduled} trend="8 today" icon="📅" />
        <KpiCard title="Positions Closed" value={stats.positionsClosed} trend="3 ahead of target" icon="✅" />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-slate-800">Recruitment Funnel</h3>
            <span className="text-xs font-medium text-slate-400">Total Pipeline</span>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={funnelData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f1f5f9" />
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" width={100} tick={{ fontSize: 12, fontWeight: 500 }} axisLine={false} tickLine={false} />
                <Tooltip 
                   cursor={{ fill: '#f8fafc' }}
                   contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                />
                <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={32}>
                  {funnelData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
           <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-slate-800">Applicant Distribution</h3>
            <span className="text-xs font-medium text-slate-400">By Department</span>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={jobDistribution}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" tick={{ fontSize: 12 }} axisLine={false} tickLine={false} />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip 
                   cursor={{ fill: '#f8fafc' }}
                   contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                />
                <Bar dataKey="count" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Recruiter Leaderboard */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <h3 className="font-bold text-slate-800">Recruiter Performance Leaderboard</h3>
          <button className="text-xs font-semibold text-blue-600 hover:text-blue-700">View All Detailed Analytics →</button>
        </div>
        <table className="w-full text-left">
          <thead className="bg-slate-50 text-slate-500 text-[10px] uppercase font-bold">
            <tr>
              <th className="px-6 py-3">Recruiter</th>
              <th className="px-6 py-3 text-center">Active Jobs</th>
              <th className="px-6 py-3 text-center">Interviews</th>
              <th className="px-6 py-3 text-center">Hires</th>
              <th className="px-6 py-3">Efficiency</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {MOCK_RECRUITERS.map((recruiter) => (
              <tr key={recruiter.id} className="hover:bg-slate-50/50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-600">
                      {recruiter.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">{recruiter.name}</p>
                      <p className="text-xs text-slate-500">{recruiter.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-center text-sm font-medium text-slate-700">{recruiter.activeJobs}</td>
                <td className="px-6 py-4 text-center text-sm font-medium text-slate-700">{recruiter.interviewsScheduled}</td>
                <td className="px-6 py-4 text-center text-sm font-medium text-slate-700">{recruiter.hiresClosed}</td>
                <td className="px-6 py-4">
                  <div className="w-full bg-slate-100 rounded-full h-1.5 max-w-[100px]">
                    <div 
                      className="bg-green-500 h-1.5 rounded-full" 
                      style={{ width: `${(recruiter.hiresClosed / (recruiter.interviewsScheduled || 1)) * 100}%` }}
                    ></div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <button className="flex items-center justify-between p-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all shadow-md shadow-blue-100 group">
          <div className="flex items-center">
            <span className="text-2xl mr-3">✨</span>
            <div className="text-left">
              <p className="font-bold text-sm">Post New Opportunity</p>
              <p className="text-[10px] opacity-80">Launch a new hiring campaign</p>
            </div>
          </div>
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </button>
        <button className="flex items-center justify-between p-4 bg-white text-slate-900 border border-slate-200 rounded-xl hover:bg-slate-50 transition-all shadow-sm group">
          <div className="flex items-center">
            <span className="text-2xl mr-3">👥</span>
            <div className="text-left">
              <p className="font-bold text-sm">View Applicants</p>
              <p className="text-[10px] text-slate-500">Manage candidate pipeline</p>
            </div>
          </div>
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </button>
        <button className="flex items-center justify-between p-4 bg-white text-slate-900 border border-slate-200 rounded-xl hover:bg-slate-50 transition-all shadow-sm group">
          <div className="flex items-center">
            <span className="text-2xl mr-3">📅</span>
            <div className="text-left">
              <p className="font-bold text-sm">Schedule Interview</p>
              <p className="text-[10px] text-slate-500">Quickly set up a meeting</p>
            </div>
          </div>
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </button>
      </div>
    </div>
  );
};

interface KpiCardProps {
  title: string;
  value: string | number;
  trend: string;
  icon: string;
  subtext?: string;
}

const KpiCard: React.FC<KpiCardProps> = ({ title, value, trend, icon, subtext }) => (
  <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200 flex flex-col justify-between">
    <div className="flex items-center justify-between mb-2">
      <span className="text-2xl">{icon}</span>
      <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">{trend}</span>
    </div>
    <div>
      <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{title}</p>
      <h3 className="text-2xl font-bold text-slate-900 mt-1">{value}</h3>
      {subtext && <p className="text-[10px] text-slate-400 mt-1 italic">{subtext}</p>}
    </div>
  </div>
);

export default OrgDashboard;
