import React, { useState } from 'react';
import { Container, Typography, TextField, Button,Grid } from '@mui/material';
import NavBar from '../../Components/NavBar/NavBar';
import WorkspacesIcon from '@mui/icons-material/Workspaces';

const NewPost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null); // Estado para la imagen
    const [creationDate, setCreationDate] = useState(null); // Estado para la fecha de creación
    const [user, setUser] = useState('Usuario Ejemplo'); // Estado para el usuario

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleContentChange = (event) => {
        setContent(event.target.value);
    };

    const handleImageChange = (event) => {
        const selectedImage = event.target.files[0];
        setImage(selectedImage);
    };

    const getCurrentDate = () => {
        const currentDate = new Date();
        return currentDate.toISOString(); // Convertir la fecha a formato ISO
    };

    const handleSubmit = () => {
        // Aquí puedes enviar los datos del nuevo post al backend
        // Actualizar la fecha de creación y usuario setCreationDate(getCurrentDate());
        // Aquí puedes enviar los datos del nuevo post al backend, incluyendo la imagen
        // Ejemplo: sendNewPostToBackend({ title, content, image, creationDate, user });
    };

    return (
        <div>
            <NavBar />
            <Grid style={{marginTop:'6rem'}}>
                <Typography variant="h3" component="h1" align="center">
                    Create New Post
                </Typography>
                <form onSubmit={handleSubmit}>
                    

                    <TextField
                        label="Title"
                        variant="outlined"
                        fullWidth
                        value={title}
                        onChange={handleTitleChange}
                        margin="normal"
                    />

                    <TextField
                        label="Content"
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={5}
                        value={content}
                        onChange={handleContentChange}
                        margin="normal"
                    />
                    <Container>
                        <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        style={{ margin: '16px 0' }}
                    />
                    </Container>
                    
                    <Button type="submit" variant="contained" color="primary">
                        <WorkspacesIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                        GO
                    </Button>
                </form>
            </Grid>
        </div>
    );
};

export default NewPost;