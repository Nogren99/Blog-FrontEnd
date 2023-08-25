import React, { useState, useEffect } from 'react';
import { Container,Grid } from '@mui/material';
import CategoryContainer from '../../Components/CategoryContainer/CategoryContainer';
import { NavBar } from '../../Components';

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [posts, setPosts] = useState([]); // Cambia postsByCategory a posts

  useEffect(() => {
    const dummyCategories = ['Food', 'Books', 'Travel', 'Music'];
    setCategories(dummyCategories);
    
    const dummyPosts = [  // Cambia dummyPostsByCategory a dummyPosts
      {
        id: 1,
        title: 'Mi primer post',
        date: 'October 22, 2023 ',
        content: 'Contenido del primer post...',
        author: 'Usuario123',
        category: 'Food'
      },
      {
        id: 2345,
        title: 'Mi segundo post',
        date: 'October 23, 2023 ',
        content: 'Contenido del segundo post...',
        author: 'Usuario123',
        category: 'Food'
      },
      {
        id: 23465,
        title: 'Mi segundo post',
        date: 'October 23, 2023 ',
        content: 'Contenido del segundo post...',
        author: 'Usuario123',
        category: 'Food'
      },
      {
        id: 3452,
        title: 'Mi segundo post',
        date: 'October 23, 2023 ',
        content: 'Contenido del segundo post...',
        author: 'Usuario123',
        category: 'Books'
      },
      {
        id: 265,
        title: 'Mi segundo post',
        date: 'October 23, 2023 ',
        content: 'Contenido del segundo post...',
        author: 'Usuario123',
        category: 'Books'
      },
      {
        id: 452,
        title: 'Mi segundo post',
        date: 'October 23, 2023 ',
        content: 'Contenido del segundo post...',
        author: 'Usuario123',
        category: 'Books'
      },
      {
        id: 2999,
        title: 'Mi segundo post',
        date: 'October 23, 2023 ',
        content: 'Contenido del segundo post...',
        author: 'Usuario123',
        category: 'Travel'
      },
      {
        id: 288,
        title: 'Mi segundo post',
        date: 'October 23, 2023 ',
        content: 'Contenido del segundo post...',
        author: 'Usuario123',
        category: 'Travel'
      },
      {
        id: 266,
        title: 'Mi segundo post',
        date: 'October 23, 2023 ',
        content: 'Contenido del segundo post...',
        author: 'Usuario123',
        category: 'Travel'
      },
      {
        id: 233,
        title: 'Mi segundo post',
        date: 'October 23, 2023 ',
        content: 'Contenido del segundo post...',
        author: 'Usuario123',
        category: 'Music'
      },
      {
        id: 285,
        title: 'Mi segundo post',
        date: 'October 23, 2023 ',
        content: 'Contenido del segundo post...',
        author: 'Usuario123',
        category: 'Music'
      },
      {
        id: 452,
        title: 'Mi segundo post',
        date: 'October 23, 2023 ',
        content: 'Con estos cambios, deberías poder renderizar los posts correctamente en cada categoría correspondiente. Asegúrate de que la propiedad category en tus posts coincida con las categorías que estás usando para filtrar.',
        author: 'Usuario123',
        category: 'Music'
      },
      // ... otros posts
    ];

    setPosts(dummyPosts); // Actualiza el estado con los posts

  }, []);

  return (
    <>
      <NavBar />
      <Grid style={{marginTop:'5rem'}}>
        {categories.map((category) => (
          <CategoryContainer key={category} category={category} posts={posts.filter(post => post.category === category)} />
        ))}
      </Grid>
    </>
  );
};

export default Home;