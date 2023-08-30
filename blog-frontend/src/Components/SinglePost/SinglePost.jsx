import React, { useState,useEffect } from 'react';
import {useParams} from 'react-router-dom';
import { Typography, Container, Box, Divider } from '@mui/material';
import Post from '../Post/Post'; 
import Comments from '../Comments/Comments'; 
import NavBar from '../NavBar/NavBar';
import Loader from '../Loader/Loader';
import axios from 'axios'

const SinglePost = () => {
  const { postId } = useParams(); // Obtiene el ID del post desde los parámetros de la URL
  const [postComments, setPostComments] = useState([]);
  const [selectedPost, setSelectedPost] = useState([]);
  const [loading, setLoading] = useState(true);

  // Busca el post correspondiente en la lista de posts
  console.log(postId)
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const jwtToken = localStorage.getItem('token');
        
        const response = await axios.get(`http://localhost:5251/api/Posts/${postId}`, {
          headers: {
            Authorization: `Bearer ${jwtToken}`
          }
        });
        console.log(response.data)
        setSelectedPost(response.data);
        
        setLoading(false)
      } catch (error) {
        console.error('Error fetching user data:', error);
        setLoading(false)
      }
    };



    // Simulate a loading delay using setTimeout
    const loadingDelay = setTimeout(() => {
      fetchPost();
    }, 1000); // Adjust the delay time as needed

    // Clear the timeout if the component unmounts before the delay is done
    return () => clearTimeout(loadingDelay);


    



  }, [postId]);

  
  

  const handleAddComment = (comment) => {
    setPostComments([...postComments, comment]);
  };




/*
  if (!selectedPost) {
    return <Typography variant="h4">Post not found</Typography>;
  }*/


  
  
  return (
    <>
      <NavBar/>
      <Container maxWidth="md" style={{ marginTop: '7rem' }}>
        {loading ? (
          // Display the Loader while loading is true
          <Loader />
        ) : (
          // Display the content once loading is false
          selectedPost ? (
            <>
              <Typography variant="h4">{selectedPost.title}</Typography>
              <Divider sx={{ my: 2 }} />
              <Post title={selectedPost.title} content={selectedPost.content} />
              <Divider sx={{ my: 2 }} />
              <Box mt={4}>
                <Comments comments={selectedPost.comments}  onAddComment={handleAddComment} />
              </Box>
            </>
          ) : (
            <Typography variant="h4">Post not found</Typography>
          )
        )}
      </Container>
    </>
  );
};

export default SinglePost;