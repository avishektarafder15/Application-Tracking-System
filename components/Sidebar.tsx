
import React from 'react';
import { UserRole } from '../types';

interface SidebarProps {
  role: UserRole;
  currentView: string;
  onNavigate: (view: string) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ role, currentView, onNavigate, isOpen }) => {
  const navItems = role === UserRole.ORG_OWNER ? [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'opportunities', label: 'Opportunities', icon: '🧾' },
    { id: 'applicants', label: 'Applicants', icon: '👥' },
    { id: 'recruiters', label: 'Team', icon: '🧑‍🤝‍🧑' },
    { id: 'reports', label: 'Reports', icon: '📤' },
    { id: 'logs', label: 'Activity Logs', icon: '📜' },
  ] : [
    { id: 'dashboard', label: 'Platform Dashboard', icon: '📈' },
    { id: 'opportunities', label: 'Global Oversight', icon: '🌐' },
    { id: 'moderation', label: 'Moderation', icon: '🚨' },
    { id: 'config', label: 'Configuration', icon: '⚙️' },
    { id: 'compliance', label: 'Compliance & Audit', icon: '🛡️' },
  ];

  return (
    <aside className={`bg-slate-900 text-white transition-all duration-300 flex flex-col ${isOpen ? 'w-64' : 'w-20'}`}>
      <div className="p-6 flex items-center space-x-3 h-16 border-b border-slate-800">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white italic">A</div>
        {isOpen && <span className="font-bold text-lg tracking-tight">ATS Admin</span>}
      </div>

      <nav className="flex-1 mt-6 px-3 space-y-1">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`w-full flex items-center px-3 py-2.5 rounded-lg transition-colors group ${
              currentView === item.id 
                ? 'bg-blue-600 text-white' 
                : 'text-slate-400 hover:bg-slate-800 hover:text-white'
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            {isOpen && <span className="ml-3 font-medium text-sm">{item.label}</span>}
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-slate-800">
        <div className="bg-slate-800/50 rounded-lg p-3">
          {isOpen ? (
            <div className="text-xs text-slate-400">
              <p className="font-semibold text-slate-300">System v2.4.0</p>
              <p className="mt-1 opacity-75">All systems operational</p>
            </div>
          ) : (
            <div className="w-2 h-2 bg-green-500 rounded-full mx-auto animate-pulse"></div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
