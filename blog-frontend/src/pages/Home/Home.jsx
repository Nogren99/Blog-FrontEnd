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
        console.log("esto llega del back:" + response.data);
    
        const postsByCategory = response.data; // Assuming response.data directly contains the category structure
    
        setPosts(postsByCategory); // Set the posts object with categories as keys and arrays of posts as values
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    
    fetchUserPosts(); // Llamar a la función asincrónica dentro del efecto
    

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