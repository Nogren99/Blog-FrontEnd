import React, { useState, useEffect } from 'react';
import { Container, Typography, TextField, Button, Grid, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import NavBar from '../../Components/NavBar/NavBar';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import axios from 'axios';

const NewPost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null); // Estado para la imagen
    const [creationDate, setCreationDate] = useState(null); // Estado para la fecha de creación
    const [user, setUser] = useState('Usuario Ejemplo'); // Estado para el usuario


    const dummyCategories = ['Food', 'Books', 'GAMES', 'Music'];

    const [selectedCategory, setSelectedCategory] = useState('');


    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };
    const [categories, setCategories] = useState([]); // Estado para las categorías

    useEffect(() => {
        const dummyCategories = ['FOOD', 'BOOKS', 'GAMES', 'MOVIES'];
        setCategories(dummyCategories);
    }, []);


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
        <div>
            <NavBar />
            <Grid container justifyContent={'center'} alignItems={'center'}>

                <Grid style={{ marginTop: '6rem' }}>
                    <Typography variant="h3" component="h1" align="center">
                        Create New Post
                    </Typography>
                    <form onSubmit={handleSubmit}>


                        <TextField
                            id="title"
                            label="Title"
                            name="title"
                            variant="outlined"
                            fullWidth
                            value={title}
                            onChange={handleTitleChange}
                            margin="normal"
                        />

                        <TextField
                            id="content"
                            label="Content"
                            name="content"
                            variant="outlined"
                            fullWidth
                            multiline
                            rows={5}
                            value={content}
                            onChange={handleContentChange}
                            margin="normal"
                        />
                        <FormControl variant="outlined" fullWidth margin="normal">
                            <InputLabel htmlFor="category">Category</InputLabel>
                            <Select
                                id="category"
                                label="Category"
                                name="category"
                                value={selectedCategory}
                                onChange={handleCategoryChange}
                            >
                                {categories.map((category) => (
                                    <MenuItem key={category} value={category}>
                                        {category}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <Container>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                style={{ margin: '16px 0' }}
                            />
                        </Container>

                        <Button type="submit" variant="contained" sx={{ backgroundColor: '#a200ff' }}>
                            <WorkspacesIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                            GO
                        </Button>
                    </form>
                </Grid>
            </Grid>

        </div>
    );
};

export default NewPost;