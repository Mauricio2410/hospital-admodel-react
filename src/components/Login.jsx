import React, { useState } from 'react';
import '../styles/Login.css'; // RUTA CORREGIDA

const usersDB = [
  { id: 1, username: 'Salinas', password: '12345678', role: 'Especialista', name: 'Dr. Salinas' },
  { id: 2, username: 'Gama', password: '12345678', role: 'Admin', name: 'Admin Gama' },
];

const Login = ({ onLogin }) => {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');

  const handleSubmit = (evento) => {
    evento.preventDefault();
    
    const foundUser = usersDB.find(
      (user) => user.username === usuario && user.password === contrasena
    );

    if (foundUser) {
      alert(`¡Bienvenido, ${foundUser.name}!`);
      onLogin(foundUser); 
    } else {
      alert('Usuario o contraseña incorrectos.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="logo-container">
          <span className="logo-icon">+</span> 
        </div>
        <h1 className="title">ADMODEL</h1>
        <p className="subtitle">HOSPITAL PRIVADO</p>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Usuario</label>
            <input 
              type="text" 
              id="username" 
              name="username" 
              value={usuario} 
              onChange={(e) => setUsuario(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Contraseña</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
            />
          </div>
          <button type="submit" className="login-button">
            INGRESAR
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;