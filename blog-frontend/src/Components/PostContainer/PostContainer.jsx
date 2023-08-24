import React from 'react';
import { Grid } from '@mui/material';
import NavBar from "../NavBar/NavBar";
import Post from '../Post/Post' 

const posts = [
  {
    id: 1,
    title: 'Mi primer post',
    date: 'October 22, 2023 ',
    content: 'Method:Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook again without stirring, until mussels have opened and rice is just tender, 5 to 7 minutes more. (Discard any mussels that dont Set aside off of the heat to let rest for 10 minutes, and then serve.',
    author: 'Usuario123',
  },
  {
    id: 2,
    title: 'Mi segundo post',
    content: 'Este es el contenido de mi primer post...',
    author: 'Usuario123',
  },
  {
    id: 1,
    title: 'Mi primer post',
    content: 'Este es el contenido de mi primer post...',
    author: 'Usuario123',
  },
  {
    id: 1,
    title: 'Mi primer post',
    content: 'Este es el contenido de mi primer post...',
    author: 'Usuario123',
  },
  {
    id: 1,
    title: 'Mi primer post',
    content: 'Este es el contenido de mi primer post...',
    author: 'Usuario123',
  },
  {
    id: 1,
    title: 'Mi primer post',
    content: 'Este es el contenido de mi primer post...',
    author: 'Usuario123',
  },
  {
    id: 1,
    title: 'Mi primer post',
    content: 'Este es el contenido de mi primer post...',
    author: 'Usuario123',
  },
  {
    id: 1,
    title: 'Mi primer post',
    content: 'Este es el contenido de mi primer post...',
    author: 'Usuario123',
  },
  {
    id: 1,
    title: 'Mi primer post',
    content: 'Este es el contenido de mi primer post...',
    author: 'Usuario123',
  },
  // Agrega más objetos de ejemplo aquí
];

const PostContainer = () => {
/*
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    fetch('/api/:id/posts') // Ajusta la URL de la API según tu backend
      .then(response => response.json())
      .then(data => setUserPosts(data))
      .catch(error => console.error('Error fetching posts:', error));
  }, []);*/

  return (
    <>
    <NavBar/>
    
    <Grid container spacing={3} style={{marginTop:'4rem'}}>
      {posts.map((post) => (
        <Grid item key={post.id} xs={12} >
          <Post
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

export default PostContainer;