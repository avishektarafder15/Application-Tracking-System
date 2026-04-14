
import React, { useState } from 'react';
import { User, UserRole } from './types';
import LoginView from './views/LoginView';
import DashboardLayout from './components/DashboardLayout';
import OrgDashboard from './views/OrgDashboard';
import ProductDashboard from './views/ProductDashboard';
import OpportunitiesView from './views/OpportunitiesView';
import ApplicantsView from './views/ApplicantsView';
import RecruitersView from './views/RecruitersView';
import ReportsView from './views/ReportsView';
import ModerationView from './views/ModerationView';
import ConfigurationView from './views/ConfigurationView';
import ComplianceView from './views/ComplianceView';

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [currentView, setCurrentView] = useState('dashboard');

  const handleLogin = (role: UserRole) => {
    // Directly authenticating user without 2FA
    const mockUser: User = {
      id: role === UserRole.ORG_OWNER ? 'owner-1' : 'prod-1',
      email: role === UserRole.ORG_OWNER ? 'owner@techcorp.com' : 'admin@platform.com',
      name: role === UserRole.ORG_OWNER ? 'Jane Org-Owner' : 'Alex Product-Owner',
      role: role,
      organization: role === UserRole.ORG_OWNER ? 'TechCorp' : undefined,
      lastLogin: new Date().toLocaleString(),
    };
    setUser(mockUser);
  };

  const handleLogout = () => {
    setUser(null);
    setCurrentView('dashboard');
  };

  if (!user) {
    return <LoginView onLogin={handleLogin} />;
  }

  const renderContent = () => {
    if (user.role === UserRole.ORG_OWNER) {
      switch (currentView) {
        case 'dashboard': return <OrgDashboard />;
        case 'opportunities': return <OpportunitiesView />;
        case 'applicants': return <ApplicantsView />;
        case 'recruiters': return <RecruitersView />;
        case 'reports': return <ReportsView />;
        case 'logs': return <ComplianceView />; // Org logs
        default: return <OrgDashboard />;
      }
    } else {
      switch (currentView) {
        case 'dashboard': return <ProductDashboard />;
        case 'opportunities': return <OpportunitiesView isReadOnly />;
        case 'moderation': return <ModerationView />;
        case 'config': return <ConfigurationView />;
        case 'compliance': return <ComplianceView />;
        default: return <ProductDashboard />;
      }
    }
  };

  return (
    <DashboardLayout
      user={user}
      onLogout={handleLogout}
      currentView={currentView}
      onNavigate={setCurrentView}
    >
      {renderContent()}
    </DashboardLayout>
  );
};

export default App;
