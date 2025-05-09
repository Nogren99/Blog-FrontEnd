import React from 'react';
import { Grid, Typography } from '@mui/material';
import Post from '../Post/Post'; // Ajusta la ruta según la ubicación de tu componente Post

const CategoryContainer = ({ category, posts }) => {
  return (
    <div>
        
      <Typography variant="h4" component="h2" marginTop={5} marginBottom={5}>
        {category}
      </Typography>
      <Grid container spacing={3}>
      {posts.map((post) => (
          <Grid item key={post.id} xs={12} sm={4}>
            <Post
              postId = {post.id}
              //userName = {post.userName}
              title={post.title}
              userName={post.userName}
              content={post.content}
              author={post.userName}
            />
          </Grid>
         ))}
      </Grid>
    </div>
  );
};

export default CategoryContainer;