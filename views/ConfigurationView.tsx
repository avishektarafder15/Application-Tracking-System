
import React from 'react';

const ConfigurationView: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">Platform Configuration</h2>
        <p className="text-sm text-slate-500">Global settings and taxonomy management.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ConfigSection title="Opportunity Types">
           <div className="space-y-3">
             <ConfigItem label="Job" active />
             <ConfigItem label="Internship" active />
             <ConfigItem label="Fellowship" active />
             <ConfigItem label="Contract" />
             <ConfigItem label="Volunteer" />
           </div>
        </ConfigSection>

        <ConfigSection title="Application Pipeline Stages">
           <div className="space-y-3">
             <ConfigItem label="Applied" active mandatory />
             <ConfigItem label="Reviewing" active />
             <ConfigItem label="Shortlisted" active />
             <ConfigItem label="Interview" active />
             <ConfigItem label="Offer" />
             <ConfigItem label="Hired" active mandatory />
           </div>
        </ConfigSection>

        <ConfigSection title="Mandatory ATS Fields">
           <div className="space-y-3">
             <ConfigItem label="Full Name" active mandatory />
             <ConfigItem label="Email" active mandatory />
             <ConfigItem label="Resume Upload" active mandatory />
             <ConfigItem label="Cover Letter" />
             <ConfigItem label="Portfolio URL" />
           </div>
        </ConfigSection>

        <ConfigSection title="System Controls">
           <div className="space-y-4 p-2">
             <div className="flex items-center justify-between">
               <div>
                 <p className="text-sm font-bold text-slate-800">Public API Access</p>
                 <p className="text-[10px] text-slate-400">Enable third-party job aggregators</p>
               </div>
               <div className="w-10 h-5 bg-blue-600 rounded-full flex items-center px-1">
                 <div className="w-3 h-3 bg-white rounded-full ml-auto"></div>
               </div>
             </div>
             <div className="flex items-center justify-between">
               <div>
                 <p className="text-sm font-bold text-slate-800">AI Resume Screening</p>
                 <p className="text-[10px] text-slate-400">Automated initial filtering</p>
               </div>
               <div className="w-10 h-5 bg-slate-200 rounded-full flex items-center px-1">
                 <div className="w-3 h-3 bg-white rounded-full"></div>
               </div>
             </div>
           </div>
        </ConfigSection>
      </div>
    </div>
  );
};

const ConfigSection: React.FC<{ title: string, children: React.ReactNode }> = ({ title, children }) => (
  <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
    <div className="p-4 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
      <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest">{title}</h3>
      <button className="text-[10px] font-bold text-blue-600">Manage</button>
    </div>
    <div className="p-4">{children}</div>
  </div>
);

const ConfigItem: React.FC<{ label: string, active?: boolean, mandatory?: boolean }> = ({ label, active, mandatory }) => (
  <div className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 transition-colors">
    <div className="flex items-center space-x-3">
      <div className={`w-2 h-2 rounded-full ${active ? 'bg-green-500' : 'bg-slate-300'}`}></div>
      <span className="text-sm font-medium text-slate-700">{label}</span>
      {mandatory && <span className="text-[10px] font-bold text-slate-400 italic">MANDATORY</span>}
    </div>
    <button className="text-[10px] font-bold text-slate-400 hover:text-red-500 transition-colors">Remove</button>
  </div>
);

export default ConfigurationView;
