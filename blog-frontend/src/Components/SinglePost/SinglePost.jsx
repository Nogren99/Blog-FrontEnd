import React, { useState } from 'react';
import { Typography, Container, Box, Divider } from '@mui/material';
import Post from '../Post/Post'; 
import Comments from '../Comments/Comments'; 
import NavBar from '../NavBar/NavBar';

const SinglePost = ({ post }) => {
  const [postComments, setPostComments] = useState([]);

  const handleAddComment = (comment) => {
    setPostComments([...postComments, comment]);
  };

  return (
    <>
    <NavBar/>
    <Container maxWidth="md">
      <Typography variant="h4">{post.title}</Typography>
      <Divider sx={{ my: 2 }} />
      <Post title={post.title} date={post.date} content={post.content} author={post.author} />
      <Divider sx={{ my: 2 }} />
      <Box mt={4}>
        <Comments comments={postComments} onAddComment={handleAddComment} />
      </Box>
    </Container>
    </>
    
  );
};

export default SinglePost;