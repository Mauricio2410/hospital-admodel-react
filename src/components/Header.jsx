import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = ({ user }) => {
  return (
    <header className="app-header">
      <h1 className="app-title">Hospital ADMODEL</h1>
      <nav>
        {/* Botones para el Admin (ACTUALIZADOS) */}
        {user.role === 'Admin' && (
          <>
            <Link to="/pacientes" className="nav-button">Pacientes</Link>
            <Link to="/especialistas" className="nav-button">Especialistas</Link> {/* CAMBIO */}
            <Link to="/horarios" className="nav-button">Horarios</Link>
            <Link to="/reportes" className="nav-button">Reportes</Link>
          </>
        )}
        {/* Botones para el Especialista */}
        {user.role === 'Especialista' && (
          <>
            <Link to="/pacientes" className="nav-button">Pacientes</Link>
            <Link to="/horarios" className="nav-button">Horarios</Link>
            <Link to="/reportes" className="nav-button">Reportes</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;