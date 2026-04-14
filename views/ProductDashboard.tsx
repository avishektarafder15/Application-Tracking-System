
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { DASHBOARD_STATS } from '../constants';
import { UserRole } from '../types';

const trendData = [
  { day: 'Mon', apps: 450, conversions: 12 },
  { day: 'Tue', apps: 520, conversions: 15 },
  { day: 'Wed', apps: 480, conversions: 11 },
  { day: 'Thu', apps: 610, conversions: 18 },
  { day: 'Fri', apps: 580, conversions: 14 },
  { day: 'Sat', apps: 320, conversions: 8 },
  { day: 'Sun', apps: 290, conversions: 7 },
];

const ProductDashboard: React.FC = () => {
  const stats = DASHBOARD_STATS[UserRole.PRODUCT_OWNER];

  return (
    <div className="space-y-6">
      {/* Platform Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-slate-900 text-white p-5 rounded-2xl shadow-md flex flex-col justify-between">
          <p className="text-xs font-semibold uppercase opacity-60">Global Opportunities</p>
          <div className="flex items-end justify-between mt-2">
            <h3 className="text-3xl font-bold">{stats.totalOpportunities}</h3>
            <span className="text-xs font-bold text-green-400">+5.2%</span>
          </div>
          <div className="mt-4 flex space-x-3 text-[10px]">
             <span>🟢 1,200 Live</span>
             <span>🟡 450 Draft</span>
             <span>🔴 800 Expired</span>
          </div>
        </div>
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200 flex flex-col justify-between">
          <p className="text-xs font-semibold uppercase text-slate-400">Total Applications</p>
          <div className="flex items-end justify-between mt-2">
            <h3 className="text-3xl font-bold text-slate-900">{stats.totalApplicationsTrend}</h3>
            <span className="text-xs font-bold text-blue-600">+1.2k today</span>
          </div>
          <p className="text-[10px] text-slate-400 mt-2">Weekly growth on target</p>
        </div>
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200 flex flex-col justify-between">
          <p className="text-xs font-semibold uppercase text-slate-400">Active Employers</p>
          <div className="flex items-end justify-between mt-2">
            <h3 className="text-3xl font-bold text-slate-900">{stats.activeEmployers}</h3>
            <span className="text-xs font-bold text-green-600">8 new</span>
          </div>
          <p className="text-[10px] text-slate-400 mt-2">12 awaiting onboarding</p>
        </div>
        <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200 flex flex-col justify-between">
          <p className="text-xs font-semibold uppercase text-slate-400">Avg conversion rate</p>
          <div className="flex items-end justify-between mt-2">
            <h3 className="text-3xl font-bold text-slate-900">{stats.avgConversion}</h3>
            <span className="text-xs font-bold text-red-600">-0.4%</span>
          </div>
          <p className="text-[10px] text-slate-400 mt-2">Target: 15.0%</p>
        </div>
      </div>

      {/* Main Trend Chart */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="font-bold text-slate-800 text-lg">Application Velocity</h3>
            <p className="text-xs text-slate-400">7-day performance trend across all organizations</p>
          </div>
          <div className="flex bg-slate-100 p-1 rounded-lg">
             <button className="px-3 py-1 bg-white shadow-sm text-xs font-bold rounded-md text-blue-600">Weekly</button>
             <button className="px-3 py-1 text-xs font-bold text-slate-500">Monthly</button>
          </div>
        </div>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={trendData}>
              <defs>
                <linearGradient id="colorApps" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1}/>
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
              <Tooltip 
                 contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
              />
              <Area type="monotone" dataKey="apps" stroke="#3b82f6" fillOpacity={1} fill="url(#colorApps)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Risk & Quality Indicators */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 lg:col-span-2">
           <h3 className="font-bold text-slate-800 mb-6">Risk & Quality Alerts</h3>
           <div className="space-y-4">
             <AlertItem 
                type="critical" 
                title="8 jobs flagged for content violation" 
                description="Reported by multiple applicants in the last 24h."
                cta="Review Now"
             />
             <AlertItem 
                type="warning" 
                title="Abnormal drop-offs at TechGlobal Corp" 
                description="Selected-to-Joined conversion rate fell to 2%."
                cta="Analyze Flow"
             />
             <AlertItem 
                type="info" 
                title="System latency spike detected (ATS API)" 
                description="Mean response time: 850ms (Expected <200ms)"
                cta="Logs"
             />
           </div>
        </div>

        {/* Operational Widgets */}
        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col justify-between">
           <div>
            <h3 className="font-bold text-slate-800 mb-4">Operational Status</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-slate-100 shadow-sm">
                <span className="text-xs font-bold text-slate-700">Jobs Awaiting Review</span>
                <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full text-xs font-bold">42</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-slate-100 shadow-sm">
                <span className="text-xs font-bold text-slate-700">ATS Failure Alerts</span>
                <span className="px-2 py-0.5 bg-red-100 text-red-700 rounded-full text-xs font-bold">0</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-slate-100 shadow-sm">
                <span className="text-xs font-bold text-slate-700">High Traffic Ops</span>
                <span className="px-2 py-0.5 bg-amber-100 text-amber-700 rounded-full text-xs font-bold">12</span>
              </div>
            </div>
           </div>
           <button className="mt-8 w-full py-3 bg-slate-900 text-white rounded-xl font-bold text-sm hover:bg-black transition-all">
             Generate System Audit
           </button>
        </div>
      </div>
    </div>
  );
};

const AlertItem: React.FC<{ type: 'critical' | 'warning' | 'info', title: string, description: string, cta: string }> = ({ type, title, description, cta }) => {
  const styles = {
    critical: 'border-red-100 bg-red-50 text-red-800',
    warning: 'border-amber-100 bg-amber-50 text-amber-800',
    info: 'border-blue-100 bg-blue-50 text-blue-800',
  };

  return (
    <div className={`p-4 border rounded-xl flex items-start justify-between ${styles[type]}`}>
      <div>
        <p className="font-bold text-sm">{title}</p>
        <p className="text-xs opacity-80 mt-1">{description}</p>
      </div>
      <button className="text-[10px] font-bold uppercase tracking-wider underline">{cta}</button>
    </div>
  );
}

export default ProductDashboard;
