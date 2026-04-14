
import React, { useState } from 'react';
import { User, UserRole } from '../types';
import Sidebar from './Sidebar';
import Header from './Header';

interface DashboardLayoutProps {
  user: User;
  onLogout: () => void;
  children: React.ReactNode;
  currentView: string;
  onNavigate: (view: string) => void;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ user, onLogout, children, currentView, onNavigate }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50">
      {/* Sidebar */}
      <Sidebar
        role={user.role}
        currentView={currentView}
        onNavigate={onNavigate}
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden relative">
        <Header user={user} onLogout={onLogout} />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          <div className="max-w-7xl mx-auto space-y-6">
            <div className="flex items-center space-x-2 text-sm text-slate-500 mb-2">
              <span className="capitalize">{user.role.replace('_', ' ').toLowerCase()}</span>
              <span>/</span>
              <span className="text-slate-900 font-medium capitalize">{currentView.replace('-', ' ')}</span>
            </div>
            {children}
          </div>
        </main>

        <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur border border-slate-200 px-3 py-1.5 rounded-full text-[10px] text-slate-400 font-medium shadow-sm">
          Session expires in 23m 45s • Last login: {user.lastLogin}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
