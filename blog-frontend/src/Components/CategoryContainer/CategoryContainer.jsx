import React from 'react';
import { Grid, Typography } from '@mui/material';
import Post from '../Post/Post'; // Ajusta la ruta según la ubicación de tu componente Post

const CategoryContainer = ({ category, posts }) => {
    console.log(posts)
  return (
    <div>
        
      <Typography variant="h4" component="h2">
        {category}
      </Typography>
      <Grid container spacing={3}>
        {posts.map((post) => (
          <Grid item key={post.id} xs={12} sm={4}>
            <Post
              title={post.title}
              date={post.date}
              content={post.content}
              author={post.author}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default CategoryContainer;