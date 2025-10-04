import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Login from './components/Login';
import Layout from './components/Layout';
import Pacientes from './components/Pacientes';
import Especialistas from './components/Especialistas'; // CAMBIO: Importamos Especialistas
import Citas from './components/Citas';
import Horarios from './components/Horarios'; 
import Reportes from './components/Reportes';

function App() {
  const [user, setUser] = useState(null);
  const handleLogin = (userData) => { setUser(userData); };
  const handleLogout = () => { setUser(null); };

  if (!user) {
    return <Login onLogin={handleLogin} />;
  }
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout user={user} onLogout={handleLogout} />}>
          <Route path="pacientes" element={<Pacientes />} />
          <Route path="especialistas" element={<Especialistas />} /> {/* CAMBIO: Usamos la nueva ruta y componente */}
          <Route path="citas" element={<Citas />} />
          <Route path="horarios" element={<Horarios />} />
          <Route path="reportes" element={<Reportes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;