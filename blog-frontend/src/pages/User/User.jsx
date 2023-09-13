import React, { useState,useEffect } from 'react';
import { TextField, Button, Paper, Typography, Grid } from '@mui/material';
import { NavBar } from '../../Components';
import axios from 'axios'




const User = () => {

  //const [profileImage, setProfileImage] = useState(user.profileImage);


  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const FetchUserData = async () => {
      try {
        const jwtToken = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5251/api/accounts/current', {
          headers: {
            Authorization: `Bearer ${jwtToken}`
          }
        });
        console.log(response);
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    FetchUserData(); // Llamar a la función asincrónica dentro del efecto
  }, []);

  const handleImageChange = (e) => {
    // Lógica para manejar el cambio de imagen de perfil
    const newImage = e.target.files[0];
    setProfileImage(newImage);
  };

  const handleSave = (e) => {

  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    try {
        const jwtToken = localStorage.getItem('token'); // Obtener el token de local storage
        const response = await axios.post('http://localhost:5251/api/Posts', {
            Title: formData.get('title'),
            Content: formData.get('content'),
            Category: formData.get('category')
        }, {
            headers: {
                Authorization: `Bearer ${jwtToken}` // Agregar el token en el encabezado
            }
        });

        console.log('New post created:', response.data);

        window.location.href = '/profile';
        // Realiza cualquier redirección o acciones necesarias después de crear el post
    } catch (error) {
        console.error('Error creating post:', error);
    }
};

  return (

    <>
      <NavBar />
      <Grid container justifyContent="center" alignItems="flex-start" spacing={1} style={{ marginTop: '8rem' }}>

        <Grid item xs={6}>
          <Typography variant="h5" gutterBottom>
            User Profile
          </Typography>
          First Name:
          <TextField
          
            label=''
            variant="outlined"
            fullWidth
            value={userData.firstName}
            onChange={(e) => setName(e.target.value)}
            style={{ marginBottom: '10px' }}
          />
          Last Name:
          <TextField
            label=""
            variant="outlined"
            fullWidth
            value={userData.lastName}
            onChange={(e) => setName(e.target.value)}
            style={{ marginBottom: '10px' }}
          />
          Email:
          <TextField
            label=""
            type="email"
            variant="outlined"
            fullWidth
            value={userData.email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ marginBottom: '20px' }}
          />
          <Button variant="contained" color="primary" sx={{ backgroundColor: '#a200ff' }} onClick={handleSave} fullWidth>
            Save Changes
          </Button>
          <Typography variant="caption" style={{ marginTop: '10px' }}>
            User from: {userData.creationDate}
          </Typography>
        </Grid>

      </Grid>
    </>

  );
};

export default User;