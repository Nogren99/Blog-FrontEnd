import React, { useState } from 'react';
import { TextField, Button, Paper, Typography, Grid } from '@mui/material';
import { NavBar } from '../../Components';




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
    
    <>
    <NavBar/>
    <Grid container justifyContent="center" alignItems="flex-start" spacing={1} style={{marginTop:'8rem'}}>
    
      <Grid item xs={6}>
      <Typography variant="h5" gutterBottom>
        User Profile
      </Typography>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px' }}>
        <img src={profileImage} alt="Profile" style={{ width: '150px', height: '150px', borderRadius: '50%', marginBottom: '10px' }} />
        <input type="file" accept="image/*" onChange={handleImageChange} />
      </div>
      <TextField
        label="Name"
        variant="outlined"
        fullWidth
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ marginBottom: '10px' }}
      />
      <TextField
        label="Last Name"
        variant="outlined"
        fullWidth
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ marginBottom: '10px' }}
      />
      <TextField
        label="Email"
        type="email"
        variant="outlined"
        fullWidth
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ marginBottom: '20px' }}
      />
      <Button variant="contained" color="primary" onClick={handleSave} fullWidth>
        Save Changes
      </Button>
      <Typography variant="caption" style={{ marginTop: '10px' }}>
        User from: {user.registrationDate}
      </Typography>
      </Grid>
      
    </Grid>
    </>
    
  );
};

export default UserProfile;
