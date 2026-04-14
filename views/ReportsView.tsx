
import React from 'react';

const ReportsView: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">Reports & Analytics</h2>
        <p className="text-sm text-slate-500">Export data and analyze historical hiring metrics.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="font-bold text-slate-800 mb-4">Export Data</h3>
          <div className="space-y-3">
             <ExportButton title="All Applicants (CSV)" icon="📊" />
             <ExportButton title="Interview Pipeline (XLS)" icon="📅" />
             <ExportButton title="Hiring Performance (PDF)" icon="📈" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
           <div>
            <h3 className="font-bold text-slate-800 mb-2">Time-to-Hire Analytics</h3>
            <p className="text-xs text-slate-400 mb-6">Current organization average: <span className="text-blue-600 font-bold">18 days</span></p>
            
            <div className="space-y-4">
              <MetricItem label="Applied → Shortlisted" value="2.4 days" percentage={45} />
              <MetricItem label="Shortlisted → Interview" value="5.1 days" percentage={70} />
              <MetricItem label="Interview → Selection" value="10.5 days" percentage={95} />
            </div>
           </div>
           <button className="mt-8 text-xs font-bold text-blue-600 hover:underline">View Historical Trends →</button>
        </div>
      </div>
    </div>
  );
};

const ExportButton: React.FC<{ title: string, icon: string }> = ({ title, icon }) => (
  <button className="w-full flex items-center justify-between p-3 bg-slate-50 border border-slate-100 rounded-xl hover:bg-slate-100 transition-all group">
    <div className="flex items-center">
      <span className="text-xl mr-3">{icon}</span>
      <span className="text-sm font-semibold text-slate-700">{title}</span>
    </div>
    <span className="text-slate-300 group-hover:text-blue-600">📥</span>
  </button>
);

const MetricItem: React.FC<{ label: string, value: string, percentage: number }> = ({ label, value, percentage }) => (
  <div>
    <div className="flex items-center justify-between text-xs mb-1">
      <span className="text-slate-500">{label}</span>
      <span className="font-bold text-slate-900">{value}</span>
    </div>
    <div className="w-full bg-slate-100 h-1 rounded-full">
      <div className="bg-blue-500 h-full rounded-full" style={{ width: `${percentage}%` }}></div>
    </div>
  </div>
);

export default ReportsView;
