import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ user }) => {
  return (
    <header className="app-header">
      <h1 className="app-title">Hospital ADMODEL</h1>
      <nav>
        {/* Lógica para el rol de Admin */}
        {user.role === 'Admin' && (
          <>
            <Link to="/pacientes" className="nav-button">Pacientes</Link>
            <Link to="/medicos" className="nav-button">Médicos</Link>
            <Link to="/citas" className="nav-button">Citas</Link>
          </>
        )}
        {/* Lógica para el rol de Especialista */}
        {user.role === 'Especialista' && (
          <>
            <Link to="/pacientes" className="nav-button">Pacientes</Link>
            <Link to="/citas" className="nav-button">Citas</Link>
            <Link to="/horarios" className="nav-button">Horarios</Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;