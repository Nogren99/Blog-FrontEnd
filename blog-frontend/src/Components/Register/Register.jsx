import React, { useState } from 'react';
import { TextField, Button, Paper, Typography } from '@mui/material';
import {Link} from 'react-router-dom'

const Register = ({ onRegister }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    if (password !== confirmPassword) {
      // Mostrar algún mensaje de error indicando que las contraseñas no coinciden
      return;
    }

    // Aquí podrías realizar la lógica de registro con el backend
    // Por ahora, solo simularemos un registro exitoso
    const user = { firstName, lastName, username, password };
    onRegister(user);
  };

  return (
    <Paper elevation={3} style={{ padding: '20px', maxWidth: '300px', margin: '0 auto' }}>
      <Typography variant="h5" gutterBottom>
        Registrarse
      </Typography>
      <TextField
        label="Nombre"
        variant="outlined"
        fullWidth
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        style={{ marginBottom: '10px' }}
      />
      <TextField
        label="Apellido"
        variant="outlined"
        fullWidth
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        style={{ marginBottom: '10px' }}
      />
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
        style={{ marginBottom: '10px' }}
      />
      <TextField
        label="Confirmar Contraseña"
        variant="outlined"
        fullWidth
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        style={{ marginBottom: '20px' }}
      />
      <Button variant="contained" color="primary" onClick={handleRegister} fullWidth>
        Registrarse
      </Button>

      <Typography variant="body2" style={{ marginTop: '10px' }}>
        ¿Ya tienes una cuenta? <Link to="/login">Inicia Sesión</Link>
      </Typography>
    </Paper>
  );
};

export default Register;
