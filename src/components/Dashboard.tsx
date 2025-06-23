import React, { useState } from 'react';
import {
  RefreshCw,
  LogOut,
  Phone,
  Menu,
  X,
  User,
  FileText,
  Building2,
  AlertTriangle,
  FileWarning,
  TrendingUp,
} from 'lucide-react';
import { useAuth, useSidebar } from '../hooks';
import Overview from './dashboard/Overview';
import '../styles/Dashboard.css';

interface DashboardProps {
  onLogout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onLogout }) => {
  const { user } = useAuth();
  const { isOpen: sidebarOpen, toggle: toggleSidebar, close: closeSidebar } = useSidebar();
  const [loading, setLoading] = useState(false);
  const [lastUpdate] = useState('02/05/2024');

  const handleRefresh = async () => {
    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      window.location.reload();
    } finally {
      setLoading(false);
    }
  };

  const handleSupport = () => {
    window.open('https://wa.me/5511999999999', '_blank');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    closeSidebar();
  };

  const menuItems = [
    { id: 'overview', label: 'Informações Cadastrais', icon: User },
    { id: 'sintegra', label: 'Sintegra', icon: FileText },
    { id: 'economic-group', label: 'Grupo Econômico', icon: Building2 },
    { id: 'restrictives', label: 'Restritivos Nacional', icon: AlertTriangle },
    { id: 'protests', label: 'Protestos', icon: FileWarning },
    { id: 'financial', label: 'Endividamento Financeiro', icon: TrendingUp },
    { id: 'cprs', label: 'CPRs Ativas', icon: FileText },
  ];

  return (
    <div className="dashboard-container">
      {/* Header */}
      <header className="dashboard-header">
        <div className="header-left">
          <button 
            className="logo-button" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            title="Voltar ao topo"
          >
            <img src="/logo-nagro.svg" alt="Nagro" className="header-logo" onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }} />
          </button>
          <span className="last-update">Última atualização: {lastUpdate}</span>
        </div>
        <div className="header-right">
          <button 
            className="header-button refresh-button" 
            onClick={handleRefresh}
            disabled={loading}
          >
            <RefreshCw size={20} className={loading ? 'spinning' : ''} />
            <span>Atualizar dados</span>
          </button>
          <button 
            className="header-button support-button" 
            onClick={handleSupport}
          >
            <Phone size={20} />
            <span>Suporte</span>
          </button>
          <button 
            className="header-button logout-button" 
            onClick={onLogout}
          >
            <LogOut size={20} />
            <span>Sair</span>
          </button>
        </div>
        <button 
          className="mobile-menu-button"
          onClick={toggleSidebar}
        >
          {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      <div className="dashboard-content">
        {/* Sidebar */}
        <aside className={`dashboard-sidebar ${sidebarOpen ? 'open' : ''}`}>
          <div className="user-info">
            <div className="user-avatar">
              <span>{user?.nome?.split(' ').map((n: string) => n[0]).join('')}</span>
            </div>
            <div className="user-details">
              <h3>{user?.nome || 'José Carlos Vicentino'}</h3>
              <p>{user?.cpf || '123.456.789-00'}</p>
            </div>
          </div>

          <nav className="sidebar-nav">
            <h4>NAVEGAÇÃO</h4>
            {menuItems.map((item) => (
              <button
                key={item.id}
                className="nav-item"
                onClick={() => scrollToSection(item.id)}
              >
                <item.icon size={20} />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content - OnePage */}
        <main className="dashboard-main">
          <Overview />
        </main>
      </div>
    </div>
  );
};

export default Dashboard; 