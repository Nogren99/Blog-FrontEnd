import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Divider } from '@mui/material';
import WorkspacesIcon from '@mui/icons-material/Workspaces';

const Comments = ({ comments, onAddComment, postId }) => {
  const [newComment, setNewComment] = useState('');

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      onAddComment(newComment);
      setNewComment('');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    try {
      const jwtToken = localStorage.getItem('token'); // Obtener el token de local storage
      const response = await axios.post('http://localhost:5251/api/Comments', {
        AccountId: 0,
        Content: formData.get('content'),
        PostId: postId,
      }, {
        headers: {
          Authorization: `Bearer ${jwtToken}` // Agregar el token en el encabezado
        }
      });

      console.log('New comment:', response.data);

      //window.location.href = '/profile';
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
          label="Add a comment"
          variant="outlined"
          fullWidth
          value={newComment}
          onChange={handleCommentChange}
          sx={{ my: 2 }}
        />
        <Button variant="contained" sx={{ backgroundColor: '#a200ff' }} onClick={handleAddComment}>
          <WorkspacesIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          GO
        </Button>
      </form>
    </Box>
  );
};

export default Comments;