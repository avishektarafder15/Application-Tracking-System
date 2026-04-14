
import React from 'react';
import { User, UserRole } from '../types';

interface HeaderProps {
  user: User;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ user, onLogout }) => {
  return (
    <header className="h-16 bg-white border-b border-slate-200 px-8 flex items-center justify-between shadow-sm z-10">
      <div className="flex items-center space-x-6">
        {user.role === UserRole.ORG_OWNER && (
          <div className="flex items-center space-x-2">
            <span className="text-xs font-semibold uppercase text-slate-400">Organization</span>
            <select className="bg-slate-100 border-none rounded-md text-sm font-medium focus:ring-2 focus:ring-blue-500 py-1 pl-2 pr-8 cursor-pointer">
              <option>{user.organization}</option>
              <option>Global Sub-Org A</option>
              <option>Global Sub-Org B</option>
            </select>
          </div>
        )}
        {user.role === UserRole.PRODUCT_OWNER && (
          <div className="flex items-center space-x-2 px-3 py-1 bg-amber-50 text-amber-700 border border-amber-200 rounded-full text-xs font-bold animate-pulse">
            <span>●</span>
            <span>SUPER ADMIN MODE</span>
          </div>
        )}
      </div>

      <div className="flex items-center space-x-4">
        <button className="p-2 text-slate-400 hover:text-slate-600 relative">
          <span className="text-xl">🔔</span>
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        
        <div className="h-8 w-px bg-slate-200"></div>

        <div className="flex items-center space-x-3 group cursor-pointer relative">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-semibold text-slate-900 leading-tight">{user.name}</p>
            <p className="text-xs text-slate-500 leading-tight">{user.role === UserRole.ORG_OWNER ? 'Owner' : 'Platform Lead'}</p>
          </div>
          <div className="w-9 h-9 bg-slate-200 rounded-full border-2 border-white shadow-sm overflow-hidden">
             <img src={`https://picsum.photos/seed/${user.id}/100/100`} alt="Avatar" />
          </div>
          
          <button 
            onClick={onLogout}
            className="ml-2 text-xs font-medium text-red-600 hover:text-red-700 transition-colors"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
