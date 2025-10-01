import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import './Layout.css';

// Recibimos "user" y "onLogout" y se los pasamos a los hijos que los necesitan
const Layout = ({ user, onLogout }) => {
  return (
    <div className="app-layout">
      <Header user={user} />
      <div className="app-body">
        <Sidebar user={user} onLogout={onLogout} />
        <main className="app-content">
          <Outlet /> 
        </main>
      </div>
    </div>
  );
};

export default Layout;