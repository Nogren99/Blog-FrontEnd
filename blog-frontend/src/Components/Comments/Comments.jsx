import React, { useState } from 'react';
import {useParams} from 'react-router-dom';
import { Box, Typography, TextField, Button, Divider } from '@mui/material';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import axios from 'axios';

const Comments = ({ comments, onAddComment }) => {
  const { postId } = useParams();
  const [newComment, setNewComment] = useState('');

  
  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
    
  };

  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      onAddComment(newComment);
      //setNewComment('');
    }
    
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    try {
      const jwtToken = localStorage.getItem('token'); // Obtener el token de local storage
      console.log("PostId: "+postId)
      console.log("Content: "+formData.get('content'))
      const response = await axios.post('http://localhost:5251/api/Comments', {
        //AccountId: 0,
        
        PostId: postId,
        Content: formData.get('content'),
        
      }, {
        headers: {
          Authorization: `Bearer ${jwtToken}` // Agregar el token en el encabezado
        }
      });

      console.log('New comment:', response.data);

      console.log("AFTERPostId: "+postId)
      console.log("AFTERContent: "+formData.get('content'))

      window.location.href = `/posts/${postId}`;
      // Realiza cualquier redirección o acciones necesarias después de crear el post
    } catch (error) {
      console.error('Error creating post:', error);
    }

    



  };

  return (
    <Box>
      <Typography variant="h6">Comments</Typography>
      <Divider sx={{ my: 2 }} />
      {comments.map((comment, index) => (
        <Box key={index} sx={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px' }}>
          <Typography variant="body1">{comment.content}</Typography>
        </Box>
      ))}
      <form onSubmit={handleSubmit}>
        <TextField
          id="content"
          label="Add a comment"
          name="content"
          variant="outlined"
          fullWidth
          value={newComment}
          onChange={handleCommentChange}
          sx={{ my: 2 }}
        />
        <Button type="submit" variant="contained" sx={{ backgroundColor: '#a200ff' }} onClick={handleAddComment}>
          <WorkspacesIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          GO
        </Button>
      </form>
    </Box>
  );
};

export default Comments;