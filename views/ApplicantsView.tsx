
import React, { useState } from 'react';
import { MOCK_APPLICANTS } from '../constants';
import { Applicant } from '../types';

const ApplicantsView: React.FC = () => {
  const [selectedApplicant, setSelectedApplicant] = useState<Applicant | null>(null);

  const stages = ['Applied', 'Shortlisted', 'Interview', 'Selected', 'Rejected'];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Applicant Pipeline</h2>
          <p className="text-sm text-slate-500">Monitor and manage candidates across all active jobs.</p>
        </div>
        <button className="flex items-center space-x-2 px-3 py-1.5 border border-slate-200 rounded-lg text-sm font-medium hover:bg-slate-50">
          <span>📅</span>
          <span>Interview Calendar</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Main List */}
        <div className="lg:col-span-4 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
          <table className="w-full text-left">
             <thead className="bg-slate-50 text-[10px] font-bold text-slate-500 uppercase">
               <tr>
                 <th className="px-6 py-4">Candidate</th>
                 <th className="px-6 py-4">Opportunity</th>
                 <th className="px-6 py-4">Stage</th>
                 <th className="px-6 py-4">Applied</th>
                 <th className="px-6 py-4 text-right">Actions</th>
               </tr>
             </thead>
             <tbody className="divide-y divide-slate-100">
               {MOCK_APPLICANTS.map((applicant) => (
                 <tr 
                    key={applicant.id} 
                    className="hover:bg-slate-50 cursor-pointer"
                    onClick={() => setSelectedApplicant(applicant)}
                 >
                   <td className="px-6 py-4">
                     <div className="flex items-center space-x-3">
                       <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs">
                         {applicant.name[0]}
                       </div>
                       <div>
                         <p className="text-sm font-bold text-slate-900">{applicant.name}</p>
                         <p className="text-[10px] text-slate-500">{applicant.email}</p>
                       </div>
                     </div>
                   </td>
                   <td className="px-6 py-4">
                      <p className="text-xs font-medium text-slate-700">{applicant.opportunityTitle}</p>
                   </td>
                   <td className="px-6 py-4">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                        applicant.stage === 'Selected' ? 'bg-green-100 text-green-700' :
                        applicant.stage === 'Rejected' ? 'bg-red-100 text-red-700' :
                        applicant.stage === 'Interview' ? 'bg-purple-100 text-purple-700' :
                        'bg-blue-50 text-blue-700'
                      }`}>
                        {applicant.stage}
                      </span>
                   </td>
                   <td className="px-6 py-4 text-xs text-slate-500">{applicant.appliedDate}</td>
                   <td className="px-6 py-4 text-right">
                      <button className="text-blue-600 font-bold text-xs hover:underline">View Profile</button>
                   </td>
                 </tr>
               ))}
             </tbody>
          </table>
        </div>
      </div>

      {/* Profile Drawer Placeholder */}
      {selectedApplicant && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" onClick={() => setSelectedApplicant(null)}></div>
          <div className="relative w-full max-w-lg bg-white h-full shadow-2xl flex flex-col">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
              <h3 className="font-bold text-slate-900">Candidate Profile</h3>
              <button onClick={() => setSelectedApplicant(null)} className="p-2 text-slate-400 hover:text-slate-600">✕</button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6 space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center text-2xl font-bold text-slate-400">
                   {selectedApplicant.name[0]}
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">{selectedApplicant.name}</h2>
                  <p className="text-sm text-slate-500">{selectedApplicant.email}</p>
                  <p className="text-xs font-semibold text-blue-600 mt-1 uppercase tracking-wider">{selectedApplicant.stage} Stage</p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Pipeline Control</h4>
                <div className="flex flex-wrap gap-2">
                  {stages.map(s => (
                    <button 
                      key={s} 
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all ${
                        selectedApplicant.stage === s 
                          ? 'bg-blue-600 border-blue-600 text-white' 
                          : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                 <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Internal Notes</h4>
                 <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                   <p className="text-sm text-slate-700 italic">"{selectedApplicant.notes || 'No notes yet.'}"</p>
                 </div>
                 <textarea 
                   placeholder="Add a new note..." 
                   className="w-full bg-white border border-slate-200 rounded-xl p-3 text-sm focus:ring-2 focus:ring-blue-500 min-h-[100px]"
                 ></textarea>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button className="flex flex-col items-center justify-center p-4 bg-slate-50 border border-slate-200 rounded-2xl hover:bg-slate-100 transition-all">
                  <span className="text-xl mb-1">📄</span>
                  <span className="text-xs font-bold text-slate-700">View Resume</span>
                </button>
                <button className="flex flex-col items-center justify-center p-4 bg-slate-50 border border-slate-200 rounded-2xl hover:bg-slate-100 transition-all">
                  <span className="text-xl mb-1">📅</span>
                  <span className="text-xs font-bold text-slate-700">Schedule Interview</span>
                </button>
              </div>
            </div>

            <div className="p-6 border-t border-slate-100 bg-slate-50/50 flex gap-3">
              <button className="flex-1 py-3 bg-green-600 text-white rounded-xl font-bold text-sm hover:bg-green-700 shadow-md shadow-green-100">Hired / Select</button>
              <button className="flex-1 py-3 bg-red-50 text-red-600 border border-red-100 rounded-xl font-bold text-sm hover:bg-red-100">Reject Candidate</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApplicantsView;
