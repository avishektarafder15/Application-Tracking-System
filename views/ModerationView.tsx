
import React from 'react';

const ModerationView: React.FC = () => {
  const reportedJobs = [
    { id: 1, title: 'Mystery Job Listing', org: 'Unknown Corp', reason: 'Misleading content', reports: 12, date: '2h ago' },
    { id: 2, title: 'CEO Position (Entry Level)', org: 'GetRichQuick Inc', reason: 'Spam / Phishing', reports: 45, date: '5h ago' },
    { id: 3, title: 'Data Entry (No Pay)', org: 'CheapLabor', reason: 'Policy violation: Unpaid work', reports: 8, date: '1d ago' },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">Content Moderation</h2>
        <p className="text-sm text-slate-500">Review flagged job posts and handle policy violations.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Flagged Jobs List */}
        <div className="lg:col-span-2 space-y-4">
          {reportedJobs.map((job) => (
            <div key={job.id} className="bg-white p-5 rounded-2xl border border-red-100 shadow-sm flex items-center justify-between hover:border-red-300 transition-colors">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-red-50 text-red-500 rounded-xl flex items-center justify-center font-bold">!</div>
                <div>
                  <h3 className="font-bold text-slate-900">{job.title}</h3>
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-tight">{job.org} • {job.reason}</p>
                  <p className="text-[10px] text-slate-400 mt-1">Flagged by {job.reports} users • Reported {job.date}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button className="px-3 py-1.5 bg-red-600 text-white rounded-lg text-xs font-bold hover:bg-red-700">Reject</button>
                <button className="px-3 py-1.5 bg-slate-100 text-slate-600 rounded-lg text-xs font-bold hover:bg-slate-200">View</button>
              </div>
            </div>
          ))}
        </div>

        {/* Action Sidebar */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          <div>
            <h3 className="font-bold text-slate-800 text-sm mb-4">Quick Stats</h3>
            <div className="grid grid-cols-2 gap-3">
               <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <p className="text-xl font-bold text-slate-900">124</p>
                  <p className="text-[10px] text-slate-400 font-bold uppercase">Pending</p>
               </div>
               <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <p className="text-xl font-bold text-green-600">92%</p>
                  <p className="text-[10px] text-slate-400 font-bold uppercase">Accuracy</p>
               </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Policy Enforcement</h4>
            <div className="space-y-2">
               <label className="flex items-center space-x-2 p-2 rounded-lg hover:bg-slate-50 cursor-pointer">
                 <input type="checkbox" defaultChecked />
                 <span className="text-xs font-medium text-slate-700">Auto-flag listings with external links</span>
               </label>
               <label className="flex items-center space-x-2 p-2 rounded-lg hover:bg-slate-50 cursor-pointer">
                 <input type="checkbox" />
                 <span className="text-xs font-medium text-slate-700">Require manual review for all new orgs</span>
               </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModerationView;
