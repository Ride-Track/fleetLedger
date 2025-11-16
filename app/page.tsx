'use client';

import { useState } from 'react';
import LoginPage from '@/components/login-page';
import DashboardPage from '@/components/dashboard-page';
import DriverDetailPage from '@/components/driver-detail-page';
import AdminPage from '@/components/admin-page';

export default function Home() {
  const [currentPage, setCurrentPage] = useState<'login' | 'dashboard' | 'driver-detail' | 'admin'>('login');
  const [userRole, setUserRole] = useState<'employee' | 'admin' | null>(null);

  const handleLogin = (role: 'employee' | 'admin') => {
    setUserRole(role);
    setCurrentPage(role === 'admin' ? 'admin' : 'dashboard');
  };

  const handleLogout = () => {
    setUserRole(null);
    setCurrentPage('login');
  };

  const handleViewDriver = () => {
    setCurrentPage('driver-detail');
  };

  const handleBackToDashboard = () => {
    setCurrentPage('dashboard');
  };

  if (currentPage === 'login') {
    return <LoginPage onLogin={handleLogin} />;
  }

  if (currentPage === 'driver-detail') {
    return <DriverDetailPage onBack={handleBackToDashboard} onLogout={handleLogout} />;
  }

  if (currentPage === 'admin') {
    return <AdminPage onViewDriver={handleViewDriver} onLogout={handleLogout} />;
  }

  return <DashboardPage onViewDriver={handleViewDriver} onLogout={handleLogout} />;
}
