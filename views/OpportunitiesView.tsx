
import React, { useState } from 'react';
import { MOCK_OPPORTUNITIES } from '../constants';
import { Opportunity } from '../types';

interface OpportunitiesViewProps {
  isReadOnly?: boolean;
}

const OpportunitiesView: React.FC<OpportunitiesViewProps> = ({ isReadOnly = false }) => {
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All' 
    ? MOCK_OPPORTUNITIES 
    : MOCK_OPPORTUNITIES.filter(o => o.status === filter);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">{isReadOnly ? 'Global Opportunity Oversight' : 'Manage Opportunities'}</h2>
          <p className="text-sm text-slate-500">Track and manage your {isReadOnly ? 'platform-wide' : ''} job listings.</p>
        </div>
        {!isReadOnly && (
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-bold text-sm shadow-md shadow-blue-100 hover:bg-blue-700 transition-all">
            + Create New
          </button>
        )}
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-100 flex flex-wrap items-center gap-4">
          <div className="flex bg-slate-100 p-1 rounded-lg">
            {['All', 'Published', 'Draft', 'Expired'].map((s) => (
              <button 
                key={s}
                onClick={() => setFilter(s)}
                className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all ${filter === s ? 'bg-white shadow-sm text-blue-600' : 'text-slate-500 hover:text-slate-700'}`}
              >
                {s}
              </button>
            ))}
          </div>
          
          <input 
            type="text" 
            placeholder="Search opportunities..." 
            className="flex-1 min-w-[200px] bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 text-xs focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 border-b border-slate-100 text-[10px] uppercase font-bold text-slate-500">
              <tr>
                <th className="px-6 py-4">Job Title</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Applications</th>
                <th className="px-6 py-4">Date Created</th>
                <th className="px-6 py-4">SEO Score</th>
                <th className="px-6 py-4">Recruiter</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.map((opp) => (
                <tr key={opp.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-6 py-4">
                    <div>
                      <p className="text-sm font-bold text-slate-900">{opp.title}</p>
                      <p className="text-[10px] text-slate-400">{opp.type} • {opp.organization}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                      opp.status === 'Published' ? 'bg-green-50 text-green-700' :
                      opp.status === 'Draft' ? 'bg-slate-100 text-slate-700' :
                      'bg-red-50 text-red-700'
                    }`}>
                      {opp.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                       <span className="text-sm font-medium text-slate-700">{opp.applicationsCount}</span>
                       <div className="w-16 bg-slate-100 h-1 rounded-full overflow-hidden">
                          <div className="bg-blue-500 h-full" style={{ width: `${Math.min(opp.applicationsCount, 100)}%` }}></div>
                       </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500">{opp.createdDate}</td>
                  <td className="px-6 py-4">
                     <span className={`text-xs font-bold ${
                       opp.seoStatus === 'Optimized' ? 'text-green-600' :
                       opp.seoStatus === 'Warning' ? 'text-amber-600' : 'text-slate-400'
                     }`}>
                       {opp.seoStatus === 'Optimized' ? '✓ Optimized' : opp.seoStatus}
                     </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-700">{opp.recruiter}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      {!isReadOnly ? (
                        <>
                          <button className="p-1.5 hover:bg-slate-100 rounded-md text-slate-400 hover:text-blue-600" title="Edit">✏️</button>
                          <button className="p-1.5 hover:bg-slate-100 rounded-md text-slate-400 hover:text-red-600" title="Expire">🛑</button>
                        </>
                      ) : (
                        <button className="text-xs font-bold text-blue-600 hover:underline">View Details</button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OpportunitiesView;
