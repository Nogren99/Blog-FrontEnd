import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './login.css';
import WorkspacesIcon from '@mui/icons-material/Workspaces';

const defaultTheme = createTheme();

export default function Login() {
  const [user, setUser] = useState([]);
  const [token, setToken] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5251/api/login', {
        UserName: event.currentTarget.username.value,
        Password: event.currentTarget.password.value
      });

      const jwtToken = response.data.token;
      setToken(jwtToken);



      localStorage.setItem('token', jwtToken);

      window.location.href = '/home';
    } catch (error) {
      console.error('Login failed:', error);
    }
  };
  /*
  const traerUsuario = async () => {
    try {
      const jwtToken = localStorage.getItem('token');

      const response = await axios.get('http://localhost:5251/api/login', {
        headers: {
          Authorization: `Bearer ${jwtToken}`
        }
      });

      setUser(response.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  useEffect(() => {
    traerUsuario();
  }, []);*/

  const handleSubmit = (event) => {
    handleLogin(event);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" className='body1'>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random?blog)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <WorkspacesIcon />
            </Avatar>
            <Typography component="h1" variant="h3">
              BLOGGO
            </Typography>

            <Typography component="h2" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1, }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="User Name"
                name="username"
                autoComplete="username"
                autoFocus
                
              />
              <TextField
              
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" style={{ color: '#a200ff' }}  />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, backgroundColor: '#a200ff' }}
              >
                Sign In
              </Button>
              
              <Grid item>
                <Link href="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
              
              {

                /*
<Copyright sx={{ mt: 5 }} />
                */
              }
              
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}