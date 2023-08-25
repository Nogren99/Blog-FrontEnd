import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Divider } from '@mui/material';
import WorkspacesIcon from '@mui/icons-material/Workspaces';

const Comments = ({ comments, onAddComment }) => {
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

  return (
    <Box>
      <Typography variant="h6">Comments</Typography>
      <Divider sx={{ my: 2 }} />
      {comments.map((comment, index) => (
        <Typography key={index} variant="body1" sx={{ mb: 1 }}>
          {comment}
        </Typography>
      ))}
      <TextField
        label="Add a comment"
        variant="outlined"
        fullWidth
        value={newComment}
        onChange={handleCommentChange}
        sx={{ my: 2 }}
      />
      <Button variant="contained" color="primary" onClick={handleAddComment}>
      <WorkspacesIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
        GO
      </Button>
    </Box>
  );
};

export default Comments;