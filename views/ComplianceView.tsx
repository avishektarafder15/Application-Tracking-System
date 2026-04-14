
import React from 'react';
import { MOCK_AUDIT_LOGS } from '../constants';

const ComplianceView: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Compliance & Audit Logs</h2>
          <p className="text-sm text-slate-500">Track sensitive system actions and maintain transparency.</p>
        </div>
        <div className="flex items-center space-x-3">
           <div className="flex items-center space-x-2 px-3 py-1.5 bg-green-50 text-green-700 border border-green-200 rounded-lg text-xs font-bold">
             <span>✓ GDPR Compliant</span>
           </div>
           <button className="px-3 py-1.5 bg-slate-900 text-white rounded-lg text-xs font-bold">Export Logs</button>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-100 bg-slate-50 flex items-center justify-between">
           <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest">Recent Activity History</h3>
           <div className="flex items-center space-x-2">
             <select className="text-[10px] font-bold bg-white border-slate-200 rounded px-2 py-1">
               <option>All Actions</option>
               <option>Logins</option>
               <option>Job Edits</option>
             </select>
           </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 text-[10px] font-bold text-slate-400 uppercase">
              <tr>
                <th className="px-6 py-4">User</th>
                <th className="px-6 py-4">Action</th>
                <th className="px-6 py-4">Resource</th>
                <th className="px-6 py-4">IP Address</th>
                <th className="px-6 py-4">Timestamp</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {MOCK_AUDIT_LOGS.map((log) => (
                <tr key={log.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-500">
                        {log.user[0]}
                      </div>
                      <span className="text-sm font-semibold text-slate-900">{log.user}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-0.5 bg-slate-100 text-slate-700 rounded-md text-[10px] font-bold uppercase tracking-tighter">
                      {log.action}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-xs text-slate-600 font-medium">{log.resource}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-[10px] font-mono text-slate-400">{log.ip}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-xs text-slate-500">{log.timestamp}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 border-t border-slate-100 bg-slate-50 text-center">
           <p className="text-[10px] text-slate-400">Personal data is masked (GDPR Art. 4) for non-owner roles. Full logs available to Compliance Leads only.</p>
        </div>
      </div>
    </div>
  );
};

export default ComplianceView;
