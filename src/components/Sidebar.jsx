import React from 'react';
import '../styles/Sidebar.css'; // RUTA CORREGIDA

const Sidebar = ({ user, onLogout }) => {
  return (
    <aside className="app-sidebar">
      <div className="profile">
        <div className="profile-icon"></div>
        <h2 className="profile-name">{user.name}</h2>
        <p className="profile-role">{user.role}</p>
      </div>
      <button onClick={onLogout} className="logout-button">
        Cerrar Sesión
      </button>
    </aside>
  );
};

export default Sidebar;