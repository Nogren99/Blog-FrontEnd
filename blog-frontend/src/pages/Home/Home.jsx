import React, { useState, useEffect } from 'react';
import { Container, Grid } from '@mui/material';
import CategoryContainer from '../../Components/CategoryContainer/CategoryContainer';
import { NavBar } from '../../Components';
import axios from 'axios'

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [posts, setPosts] = useState([]); 

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const jwtToken = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5251/api/Posts/categories', {
          headers: {
            Authorization: `Bearer ${jwtToken}`
          }
        });
        //console.log(response);
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchCategories();

    const fetchUserPosts = async () => {
      try {
        const jwtToken = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5251/api/Posts/landing', {
          headers: {
            Authorization: `Bearer ${jwtToken}`
          }
        });
        console.log(response);
    
        const postsByCategory = response.data; // Assuming response.data directly contains the category structure
    
        setPosts(postsByCategory); // Set the posts object with categories as keys and arrays of posts as values
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    
    fetchUserPosts(); // Llamar a la función asincrónica dentro del efecto
    
/*
    const dummyPosts = [  
      {
        id: 1,
        title: 'Mi primer post',
        date: 'October 22, 2023 ',
        content: 'Contenido del primer post...',
        author: 'Usuario123',
        category: 'BOOKS'
      },
      {
        id: 2345,
        title: 'Mi segundo post',
        date: 'October 23, 2023 ',
        content: 'Contenido del segundo post...',
        author: 'Usuario123',
        category: 'BOOKS'
      },
      {
        id: 23465,
        title: 'Mi segundo post',
        date: 'October 23, 2023 ',
        content: 'Contenido del segundo post...',
        author: 'Usuario123',
        category: 'BOOKS'
      },
      {
        id: 3452,
        title: 'Mi segundo post',
        date: 'October 23, 2023 ',
        content: 'Contenido del segundo post...',
        author: 'Usuario123',
        category: 'FOOD'
      },
      {
        id: 265,
        title: 'Mi segundo post',
        date: 'October 23, 2023 ',
        content: 'Contenido del segundo post...',
        author: 'Usuario123',
        category: 'FOOD'
      },
      {
        id: 452,
        title: 'Mi segundo post',
        date: 'October 23, 2023 ',
        content: 'Contenido del segundo post...',
        author: 'Usuario123',
        category: 'FOOD'
      },
      {
        id: 2999,
        title: 'Mi segundo post',
        date: 'October 23, 2023 ',
        content: 'Contenido del segundo post...',
        author: 'Usuario123',
        category: 'GAMES'
      },
      {
        id: 288,
        title: 'Mi segundo post',
        date: 'October 23, 2023 ',
        content: 'Contenido del segundo post...',
        author: 'Usuario123',
        category: 'GAMES'
      },
      {
        id: 266,
        title: 'Mi segundo post',
        date: 'October 23, 2023 ',
        content: 'Contenido del segundo post...',
        author: 'Usuario123',
        category: 'GAMES'
      },
      {
        id: 233,
        title: 'Mi segundo post',
        date: 'October 23, 2023 ',
        content: 'Contenido del segundo post...',
        author: 'Usuario123',
        category: 'MOVIES'
      },
      {
        id: 285,
        title: 'Mi segundo post',
        date: 'October 23, 2023 ',
        content: 'Contenido del segundo post...',
        author: 'Usuario123',
        category: 'MOVIES'
      },
      {
        id: 4552,
        title: 'Mi segundo post',
        date: 'October 23, 2023 ',
        content: 'Con estos cambios, deberías poder renderizar los posts correctamente en cada categoría correspondiente. Asegúrate de que la propiedad category en tus posts coincida con las categorías que estás usando para filtrar.',
        author: 'Usuario123',
        category: 'MOVIES'
      },
      {
        id: 4752,
        title: 'Mi segundo post',
        date: 'October 23, 2023 ',
        content: 'Con estos cambios, deberías poder renderizar los posts correctamente en cada categoría correspondiente. Asegúrate de que la propiedad category en tus posts coincida con las categorías que estás usando para filtrar.',
        author: 'Usuario123',
        category: 'MUSIC'
      },
      {
        id: 4572,
        title: 'Mi segundo post',
        date: 'October 23, 2023 ',
        content: 'Con estos cambios, deberías poder renderizar los posts correctamente en cada categoría correspondiente. Asegúrate de que la propiedad category en tus posts coincida con las categorías que estás usando para filtrar.',
        author: 'Usuario123',
        category: 'MUSIC'
      },

      // ... otros posts
    ];

    setPosts(dummyPosts); // Actualiza el estado con los posts*/
  }, []);

  return (
    <>
      <NavBar />
      <Grid style={{ marginTop: '5rem' }}>
      {Object.keys(posts).map((category) => (
        <CategoryContainer
          key={category}
          category={category}
          posts={posts[category]} // Pass the posts array for this category
        />
      ))}
    </Grid>
    </>
  );
};

export default Home;