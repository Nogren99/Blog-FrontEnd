import React, { useState } from 'react';
import { TextField, Button, Paper, Typography } from '@mui/material';



const UserProfile = ({ user }) => {
  const [name, setName] = useState(user.name);
  const [birthdate, setBirthdate] = useState(user.birthdate);
  const [email, setEmail] = useState(user.email);
  const [profileImage, setProfileImage] = useState(user.profileImage);

  const handleImageChange = (e) => {
    // Lógica para manejar el cambio de imagen de perfil
    const newImage = e.target.files[0];
    setProfileImage(newImage);
  };

  const handleSave = () => {
    // Lógica para guardar los cambios en la información del perfil en el backend
    const updatedUser = {
      ...user,
      name,
      birthdate,
      email,
      profileImage,
    };
    // Realizar la llamada al backend para actualizar el perfil
  };

  return (
    <Paper elevation={3} style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <Typography variant="h5" gutterBottom>
        Perfil de Usuario
      </Typography>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px' }}>
        <img src={profileImage} alt="Profile" style={{ width: '150px', height: '150px', borderRadius: '50%', marginBottom: '10px' }} />
        <input type="file" accept="image/*" onChange={handleImageChange} />
      </div>
      <TextField
        label="Nombre"
        variant="outlined"
        fullWidth
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ marginBottom: '10px' }}
      />
      <TextField
        label="Fecha de Nacimiento"
        type="date"
        variant="outlined"
        fullWidth
        value={birthdate}
        onChange={(e) => setBirthdate(e.target.value)}
        style={{ marginBottom: '10px' }}
      />
      <TextField
        label="Correo Electrónico"
        type="email"
        variant="outlined"
        fullWidth
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ marginBottom: '20px' }}
      />
      <Button variant="contained" color="primary" onClick={handleSave} fullWidth>
        Guardar Cambios
      </Button>
      <Typography variant="caption" style={{ marginTop: '10px' }}>
        Usuario desde: {user.registrationDate}
      </Typography>
    </Paper>
  );
};

export default UserProfile;
