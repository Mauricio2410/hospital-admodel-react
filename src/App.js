import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Layout from './components/Layout';
import Pacientes from './components/Pacientes';
import Medicos from './components/Medicos';
import Citas from './components/Citas';
// (Si no tienes Horarios.jsx, créalo como los otros para evitar un error)
import Horarios from './components/Horarios'; 

function App() {
  // 1. El estado ahora guardará el objeto de usuario completo, o null si nadie ha iniciado sesión.
  const [user, setUser] = useState(null);

  // 2. handleLogin ahora recibe y guarda los datos del usuario.
  const handleLogin = (userData) => {
    setUser(userData);
  };

  // 3. handleLogout limpia los datos del usuario.
  const handleLogout = () => {
    setUser(null);
  };

  // Si no hay usuario, muestra el Login
  if (!user) {
    return <Login onLogin={handleLogin} />;
  }
  
  // Si hay un usuario, muestra el sistema de navegación
  return (
    <BrowserRouter>
      <Routes>
        {/* 4. Pasamos los datos del usuario y la función de logout al Layout */}
        <Route path="/" element={<Layout user={user} onLogout={handleLogout} />}>
          {/* Rutas para todos */}
          <Route path="pacientes" element={<Pacientes />} />

          {/* Rutas condicionales (aunque las definimos todas aquí, los links aparecerán según el rol) */}
          <Route path="medicos" element={<Medicos />} />
          <Route path="citas" element={<Citas />} />
          <Route path="horarios" element={<Horarios />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;