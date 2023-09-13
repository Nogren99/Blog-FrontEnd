import React from 'react';
import { Grid } from '@mui/material';
import NavBar from "../../Components/NavBar/NavBar";
import Post from '../../Components/Post/Post' 
import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios'


const UserProfile = () => {
  const { userName } = useParams();
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    const fetchUserPosts = async () => {
      try {
        const jwtToken = localStorage.getItem('token');
        const response = await axios.get( `http://localhost:5251/api/accounts/${userName}` , {
          headers: {
            Authorization: `Bearer ${jwtToken}`
          }
        });
        console.log(response);
        setUserPosts(response.data.posts);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserPosts(); // Llamar a la función asincrónica dentro del efecto
  }, []);
  


  return (
    <>
    <NavBar/>
    
    <Grid container spacing={3} style={{marginTop:'4rem'}}>
      {userPosts.map((post) => (
        <Grid item key={post.id} xs={12} >
          <Post
            postId = {post.id}
            title={post.title}
            date={post.date}
            content={post.content}
            author={post.author}
          />
        </Grid>
      ))}
    </Grid>
    </>
    
  );
};

export default UserProfile;