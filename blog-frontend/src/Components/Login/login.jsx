import React, { useState } from 'react';
import { TextField, Button, Paper, Typography } from '@mui/material';
import {Link} from 'react-router-dom'

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Aquí podrías realizar la lógica de autenticación con el backend
    // Por ahora, solo simularemos un inicio de sesión exitoso
    const user = { username, password };
    onLogin(user);
  };

  return (
    <Paper elevation={3} style={{ padding: '20px', maxWidth: '300px', margin: '0 auto' }}>
      <Typography variant="h5" gutterBottom>
        Iniciar Sesión
      </Typography>
      <TextField
        label="Usuario"
        variant="outlined"
        fullWidth
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ marginBottom: '10px' }}
      />
      <TextField
        label="Contraseña"
        variant="outlined"
        fullWidth
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ marginBottom: '20px' }}
      />
      <Button variant="contained" color="primary" onClick={handleLogin} fullWidth>
        Iniciar Sesión
      </Button>

      <Typography variant="body2" style={{ marginTop: '10px' }}>
        ¿No tienes cuenta? <Link to="/register">Regístrate aquí</Link>
      </Typography>
    </Paper>
  );
};

export default Login;