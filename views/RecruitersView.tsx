
import React from 'react';
import { MOCK_RECRUITERS } from '../constants';

const RecruitersView: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Recruiters & Team</h2>
          <p className="text-sm text-slate-500">Assign roles and monitor hiring efficiency.</p>
        </div>
        <button className="bg-slate-900 text-white px-4 py-2 rounded-lg font-bold text-sm shadow-md hover:bg-black transition-all">
          + Add Team Member
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_RECRUITERS.map((r) => (
          <div key={r.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-400 text-lg">
                  {r.name[0]}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">{r.name}</h3>
                  <p className="text-xs text-slate-500">{r.email}</p>
                </div>
              </div>
              <button className="text-slate-400 hover:text-slate-600">⋮</button>
            </div>
            
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-slate-50 p-2 rounded-lg text-center">
                <p className="text-xs font-bold text-slate-900">{r.activeJobs}</p>
                <p className="text-[10px] text-slate-400 uppercase">Jobs</p>
              </div>
              <div className="bg-slate-50 p-2 rounded-lg text-center">
                <p className="text-xs font-bold text-slate-900">{r.interviewsScheduled}</p>
                <p className="text-[10px] text-slate-400 uppercase">Meetings</p>
              </div>
              <div className="bg-green-50 p-2 rounded-lg text-center">
                <p className="text-xs font-bold text-green-700">{r.hiresClosed}</p>
                <p className="text-[10px] text-green-600 uppercase">Hires</p>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-50">
               <div className="flex items-center justify-between text-[10px] font-bold text-slate-400 uppercase mb-2">
                 <span>Hiring Efficiency</span>
                 <span className="text-slate-900">{Math.round((r.hiresClosed / (r.interviewsScheduled || 1)) * 100)}%</span>
               </div>
               <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                 <div 
                   className="bg-blue-600 h-full" 
                   style={{ width: `${(r.hiresClosed / (r.interviewsScheduled || 1)) * 100}%` }}
                 ></div>
               </div>
            </div>
            
            <button className="w-full py-2 bg-slate-100 hover:bg-slate-200 rounded-lg text-xs font-bold text-slate-600 transition-all">
               Assign to Jobs
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecruitersView;
